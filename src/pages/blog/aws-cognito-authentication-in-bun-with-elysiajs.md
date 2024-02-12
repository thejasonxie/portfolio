---
layout: ../../layouts/BlogLayout.astro
title: "AWS Cognito Authentication in Bun with ElysiaJS"
subtitle: "A guide on how to set up AWS Cognito authentication in Bun with ElysiaJS"
description: AWS Cognito Authentication in Bun with ElysiaJS.
name: Jason Xie
date: Feb 11, 2022
# img: "/assets/projects/privanote/privanote.png"
# repoLink: "https://github.com/PrivaNoteTeam/PrivaNote"
# demoLink: "https://www.youtube.com/watch?v=yCYnAPSgYa0&ab_channel=PrivaNoteTeam"
---

1. Setup bearer and add a handler function that will be our authentication middleware to ElysiaJS

```ts
const router = new Elysia();

router.get("/health", HealthController.getHealth);

router.use(bearer());
router.onBeforeHandle([AuthMiddleware]);

router.get("/health-auth", HealthController.getHealth);
```

2. Write the code for the AuthMiddleware

Before Feb 11, 2024

```ts
import jwt, { JwtPayload } from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";

const getJwk = async (token: string) => {
  const decoded = jwt.decode(token, { complete: true }) as JwtPayload;
  const tokedKid = decoded.header.kid;
  const jwkUrl = decoded.payload.iss + "/.well-known/jwks.json";
  const jwks = await fetch(jwkUrl).then((res) => res.json());
  const jwk = jwks.keys.find((key: any) => key.kid === tokedKid);
  if (!jwk) throw new Error("JWK not found");
  return jwk;
};

export const AuthMiddleware = async ({ bearer }: any) => {
  try {
    const jwk = await getJwk(bearer);
    const publicKey = jwkToPem(jwk);

    const payload = jwt.verify(bearer, publicKey, { algorithms: ["RS256"] });

    console.log("Token is valid", payload);
  } catch (error: any) {
    console.error("Token is invalid: ", error.message);
    return createResponse(401, { error: { message: "Unauthorized" } });
  }
};
```

After Feb 11, 2024

Refer to the following links for more information:

- https://github.com/awslabs/aws-jwt-verify/issues/154
- https://github.com/awslabs/aws-jwt-verify/pull/155

```ts
import { CognitoJwtVerifier } from "aws-jwt-verify";

const cognitoJwtVerifier = CognitoJwtVerifier.create({
  userPoolId: process.env.AWS_COGNITO_USER_POOL_ID as string,
  tokenUse: "access",
});

export const AuthMiddleware = async ({ bearer }: any) => {
  try {
    const payload = await cognitoJwtVerifier.verify(bearer, {
      clientId: process.env.AWS_COGNITO_USER_CLIENT_ID as string,
    });
    console.log("Token is valid", payload);
  } catch (error: any) {
    console.error("Token is invalid: ", error.message);
    return createResponse(401, { error: { message: "Unauthorized" } });
  }
};
```

3.  Results

No Auth
![/health no auth](/assets/blog/aws-cognito-authentication-in-bun-with-elysiajs/result_1.png)
With Auth
![/health with auth](/assets/blog/aws-cognito-authentication-in-bun-with-elysiajs/result_2.png)
