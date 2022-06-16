---
layout: ../../layouts/ProjectLayout.astro
title: "This Portfolio Site"
subtitle: "My portfolio website to showcase things I've worked on."
description: An overview of my portfolio website.
name: Jason Xie
date: June 13, 2022
img: "/assets/projects/portfolio/portfolio.png"
repoLink: "https://github.com/thejasonxie/portfolio"
demoLink: "/"
---

After over a hundred job applications and countless of rejections, I've come to the realization after some research that I need to have a portfolio website with projects to demonstrate that I have the skills to be a web/software developer, or at least increase my hire-ability compared to just having a resume and cover letter. As a result, this website that you are reading from right now came to fruition.

## Contents

---

- [The Goal](#the-goal)
- [How I Built It](#how-i-built-it)
  - [1. Mock Up](#1-mock-up)
  - [2. Deciding On Which Technologies To Use](#2-deciding-on-which-technologies-to-use)
  - [3. Begin Building](#3-begin-building)
    - [3.1 Navbar Component](#navbar-component)
    - [3.2 Managing Projects](#managing-projects)
    - [3.2 About Me](#about-me)
- [Performance Review](#performance-review)
- [Future Fixes](#future-fixes)

## The Goal

---

The main goal for this portfolio website is to show the projects that I've worked on to hiring managers and help them in their decision on whether to hire me. Therefore, I wanted to keep the look and feel of this website as simple as possible. All I want on this portfolio is a little detail about myself and a collection of projects that I can easily add to as I build more.

The design of this portfolio website was inspired by <a href="https://www.taniarascia.com/" target="_blank">Tania Rascia's</a>personal website. I thought the design was very simple, minimal, and neat which is exactly what I want for my own website.

I also wanted my portfolio to be light and fast since its only purpose is just to display information, a.k.a. a static website.

## How I Built It

---

### 1. Mock Up

---

To get a basic idea of how I wanted my portfolio website to look before building it, I decided to mock up the portfolio website in Figma.

![My Portfolio Website mock up in Figma](/assets/projects/portfolio/figma.png)

The end-result is not exactly the same but similar. The goal was just to get a basic idea.

### 2. Deciding On Which Technologies To Use

---

As previously mentioned, I wanted my portfolio to be light and fast as all I will be displaying is static information which means that I need to use a static site generator. Initially, I was going to go with <a href="https://www.gatsbyjs.com/" target="_blank">GatsbyJS</a> since I planned on using <a href="https://reactjs.org/" target="_blank">ReactJS</a> as well. However, I ended up going with <a href="https://astro.build/" target="_blank">Astro</a> instead because it <a href="https://docs.astro.build/en/comparing-astro-vs-other-tools/#gatsby-vs-astro" target="_blank">claims</a> to load significantly faster than Gatsby due to a feature called <a href="https://docs.astro.build/en/core-concepts/partial-hydration/" target="_blank">partial hydration.</a> In addition, Gatsby also uses the GraphQL API to handle site content which I think is not necessary. However, GraphQL is a technology I plan to learn soon.

Using <a href="https://reactjs.org/" target="_blank">ReactJS</a> as my framework was a no-brainer as that is what I'm most familiar with.

To style my website, I decided to go with <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> as it is a low-level CSS framework which allows me to style my components and pages exactly how I want it. In addition, TailwindCSS offers the ability to easily enable dark mode themes with a single class of "dark" added to the HTML element

To deploy my portfolio, I decided to go with <a href="https://www.netlify.com/" target="_blank">Netlify</a> due to their generous free plan.

### 3. Begin Building

---

Once I've figured out what technologies to use, it was time to begin building. The following are some highlights of developing the portfolio:

#### 3.1 Navbar Component

---

I started with building the navbar component as I thought it would be the most challenging due to the dark mode toggle button I planned to add. This is where I learned about <a href="https://docs.astro.build/en/core-concepts/partial-hydration/" target="_blank">partial hydration.</a> My ReactJS components would not work as Astro generates every page with zero client-side Javascript by default. However, to allow interactive UIs such as React components, Astro uses a technique called partial hydration to hydrate individual components on the page to only send the absolutely essential Javascript to the page.

![Navbar component code](/assets/projects/portfolio/navbar-component.png)

In the NavBar component, the theme button is an interactive UI and therefore, I need to tell Astro to hydrate it with `client:only="react"`.

The theme toggle button was implemented using React hooks useState and useEffect. I used Astro's <a href="https://github.com/withastro/astro/tree/main/examples/docs" target="_blank">documentation example</a> as a guide but I used `<input type="checkbox">` instead of radio buttons. My solution for the theme button can be found <a href="https://github.com/thejasonxie/portfolio/blob/main/src/components/Nav/ThemeButton.jsx" target="_blank">here.</a>

Also, in order to avoid <a href="https://en.wikipedia.org/wiki/Flash_of_unstyled_content" target="_blank">Flash of unstyled content(FOUC)</a>, include logic in a `<script>` tag within the `<header>` to determine the last theme that is saved in the localStorage so that the correct HTML styling is generated at build time.

![Navbar fouc code](/assets/projects/portfolio/navbar-fouc.png)

#### 3.2 Managing Projects

---

As previously mentioned, I wanted to show a collection of projects that I can easily add to as I build more. So I utilized components to easily add a project and <a href="https://docs.astro.build/en/guides/markdown-content/" target="_blank">Astro Markdown layouts</a> to write about the projects.

Here would be my development workflow when I need to add a project to my portfolio:

1. Add a `<Project />` component with props to describe it to the `projects.astro` page.

   ![Project component](/assets/projects/portfolio/project-component.png)

   Which results in this:

   ![Projects page](/assets/projects/portfolio/projects-page.png)

2. Create a Markdown file with the same name as what was given to the `<Project />` component in lowercase-kebab-case in the projects directory within the pages directory. For example, if the name given to the `<Project />` component was **"This Portfolio Site"**, the markdown file would be named **"this-portfolio-site.md"**.
3. Define the props to be used by the Project Layout that will host the markdown content at the top of the created markdown file.

![Markdown props](/assets/projects/portfolio/markdown-props.png)

4. Write about the project in markdown which generates a page like the one you are currently reading.

#### 3.3 About Me

---

In addition to projects, I added a little information about myself, ways to contact me, and ways to access my resume in the <a href="/aboutme" target="_blank">About me</a> page.

What I find neat about this page is the <a href="/about#about-resume" target="_blank">resume section</a> where an option to view and download the resume is provided.

![About me resume section](/assets/projects/portfolio/aboutme-resume.png)

The Quick View button displays my resume in html format that looks exactly like the resume in PDF format.

## Performance Review

---

To test out the performace of my portfolio, I used the <a href="https://web.dev/measure/" target="_blank">Measure tool</a> provided by <a href="https://web.dev/" target="_blank">web.dev</a>. Below are the audits for all the pages on my portfolio.

![Performance audit of my index page](/assets/projects/portfolio/index-audit.png)
![Performance audit of my projects page](/assets/projects/portfolio/projects-audit.png)
![Performance audit of my privanote page](/assets/projects/portfolio/projects-privanote-audit.png)
![Performance audit of my about page](/assets/projects/portfolio/about-audit.png)
![Performance audit of my resume page](/assets/projects/portfolio/resume-audit.png)

## Future Fixes

---

As of right now, Astro does not have a first-party solution for optimizing images like Gatsby does with <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-image/" target="_blank">gatsby-plugin-image</a> but instead, <a href="https://docs.astro.build/en/comparing-astro-vs-other-tools/#comparing-gatsby-vs-astro-performance" target="_blank">recommends</a> to use <a href="https://github.com/RafidMuhymin/astro-imagetools#readme" target="_blank">astro-imagetools.</a>

However, because Astro is still in beta and will soon have its official release, I opted not to use any third-party integrations but instead, manually compress my images with <a href="https://tinypng.com" target="_blank">TinyPNG.</a>

Astro plans to implement an Image component, possibly using <a href="https://www.npmjs.com/package/vite-imagetools" target="_blank">vite-imagetools</a>, after their V1.0 official release as outlined in their <a href="https://github.com/withastro/rfcs/discussions/161" target="_blank">roadmap.</a>
