---
layout: ../../layouts/ProjectLayout.astro
title: "Block Group Interpolation"
subtitle: "Demographic analysis in a given circle of a census polygon."
description: An overview of Block Group Interpolation.
name: Jason Xie
date: July 22, 2022
img: "/assets/projects/block-group-interpolation/BlockGroupLogo.png"
repoLink: "https://github.com/thejasonxie/block-group-interpolation"
demoLink: "https://block-group-interpolation.herokuapp.com/"
---

This project is an application to calculate the total population and average income in a given circle from an underlying census polygon. The application provides two methods for calculating the interpolations, a centroid based and areal proportion method. Below is a screenshot of the application I built.

![Block Group Interpolation demo screenshot](/assets/projects/block-group-interpolation/demo-screenshot.png)

## Contents

---

- [About](#about)
  - [Centroid Based Method](#centroid-based-method)
  - [Areal Proportion Method](#area-proportion-method)
  - [Data used](#data-used)
- [Implementations](#implementations)
  - [Determining The Buffer](#determining-the-buffer)
  - [Finding The Polygons With Centroids In The Buffer](#finding-the-polygons-with-centroids-in-the-buffer)
  - [Finding Polygons That Intersect With The Buffer](#finding-polygons-that-intersect-with-the-buffer)
  - [Finding Polygons That The Buffer Overlaps But Is Not Contained](#finding-polygons-that-the-buffer-overlaps-but-is-not-contained)
  - [Finding Proportioned Area That The Buffer Overlaps](#finding-proportioned-area-that-the-buffer-overlaps)
- [Main Tech Used](#main-tech-used)
  - [Front-End](#front-end)
  - [Back-End](#back-end)
- [Improvement / Fixes](#improvement--fixes)

## About

This project was actually a take home assignment. The assignment was intended to be a backend application built in Java. However, the option to implement the frontend was also given. I was tasked to calculate the total population and average income in a two kilometer buffer from a coordinate on a map using a Postegres database extended with PostGIS that contained the data. I was allowed to use either a centroid based or areal proportion method.

### Centroid Based Method

![Image of centroid based method](/assets/projects/block-group-interpolation/centroid-method.png)

If a census polygon's centroid falls within the circle buffer, the values associated with the polygon is used to calculate the interpolations.

### Areal Proportion Method

![Image of areal proportion method](/assets/projects/block-group-interpolation/areal-proportion.png)

If a census polygon falls within the circle buffer, a portion of the values based on the total area of the polygon is used to calculate the interpolations.

### Data Used

![Image of data used](/assets/projects/block-group-interpolation/data-used.png)

The SpatialObj column is of geometry type which is a spatial value that Postgres can use by extending PostGIS. PostGIS provides useful functions for calculating centroids, creating buffer radius, determining which geometry a coordinate falls in, and convertion to GeoJSON which is used by many popular web map API's.

## Implementations

By using a combination of the methods below, I was able to calculate the interpolations using a centroid based and areal proportion method. You can see the actual SQL code that uses the methods below <a href="https://github.com/thejasonxie/block-group-interpolation/blob/main/src/main/java/com/thejasonxie/blockgroupinterpolation/blockgroup/BlockGroupDataAccessService.java" target="_blank">here.</a>

### Determining The Buffer

The first step was figuring out how to set a buffer radius from a given point. PostGIS provides a `ST_Buffer` function for this purpose.

![Image of sql to find buffer](/assets/projects/block-group-interpolation/1-buffer-sql.png)

![Image of buffer created](/assets/projects/block-group-interpolation/1-buffer.png)

### Finding The Polygons With Centroids In The Buffer

Once I had a way to determine the radius, I need to find which polygon as a centroid in that radius. PostGIS provides `ST_Centroid` to find the centroid polygon and `ST_Within` to identify if a centroid point falls within a geometry object that is the buffer. This is used to implement the centroid based method.

![Image of sql to find centroids in buffer](/assets/projects/block-group-interpolation/2-centroid-in-buffer-sql.png)

![Image of polygons in buffer](/assets/projects/block-group-interpolation/2-centroid-in-buffer.png)

### Finding Polygons That Intersect With The Buffer

To determine the polygons that need to be used for areal propotion method, PostGIS provides `ST_Intersect` to determine the polygons need.

![Image of sql to find polygons that intersect buffer](/assets/projects/block-group-interpolation/3-blocks-that-intersect-buffer-sql.png)

![Image of polygons that intersect buffer](/assets/projects/block-group-interpolation/3-blocks-that-intersect-buffer.png)

### Finding Polygons That The Buffer Overlaps But Is Not Contained

To determine the polygons that overlaps the buffer, PostGIS provides `ST_Overlaps`. This is used to determine which polygons will be portioned off for the areal proportion calculation.

![Image of sql to find polygons that overlap buffer](/assets/projects/block-group-interpolation/4-blocks-where-buffer-overlaps-but-not-contain-sql.png)

![Image of polygons that overlap buffer](/assets/projects/block-group-interpolation/4-blocks-where-buffer-overlaps-but-not-contain.png)

### Finding Proportioned Area That The Buffer Overlaps

By using a combination of `ST_Overlaps`, `ST_Intersect`, and `ST_Buffer`, you can find the polygons that need to be portioned for the areal proportion calculation. You can then use `ST_Area` to determine the area of that portion polygon.

![Image of sql to find portioned polygons in buffer](/assets/projects/block-group-interpolation/5-area-of-blocks-that-are-contained-in-the-buffer-by-intersection-sql.png)

![Image of portioned polygons in buffer](/assets/projects/block-group-interpolation/5-area-of-blocks-that-are-contained-in-the-buffer-by-intersection.png)

## Main Tech Used

### Front-End

To implement the front-end, I used <a href="https://reactjs.org/" target="_blank">React.js</a> along with <a href="https://www.mapbox.com/" target="_blank">Mapbox</a>. I also used <a href="https://turfjs.org/" target="_blank">Turf.js</a> to generate a GeoJSON buffer circle to add to mapbox. For styling, I used <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>.

### Back-End

To implement the back-end, I used <a href="https://spring.io/" target="_blank">Spring Boot</a> to build the server API for the front-end and to query the <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> database that extended <a href="https://postgis.net/" target="_blank">PostGIS</a>. I created the back-end server using an N-tier architecture that consisted of the API Layer, Service Layer, and Data Access Layer.

## Improvement / Fixes

This project was part of a take home assignment and therefore will discontinue development. However, these are some fixes and improvements I would do should development continue.

1. **State management**: I have a form state and a point state that both hold latitude, longitude, and buffer data that I made sure are in sync. A better way would be to have one state that includes those data that the form and map point share.
2. **Remove unnecessary API Request**: This project was initially suppose to be a backend Springboot application but I decided to add front-end section with react and mapbox to visualize the data. But while doing so, I kept using the same route for the calculations not realizing that I could do the calculations in the front-end since I already have access to the necessary geojson and centroid data from the initial request. This would reduce the number of API requests to just one instead of multiple request each time a calculation is needed to be made.
3. **Improve UI/UX**: A friend of mine told me that the calculate button was rather annoying to click and would be better to have it done automatically the moment a coordinate is selected. I agree with my friend as this is an unnecessary step for the end-user since the calculation could be done in the front-end as mentioned in number 2 above.
