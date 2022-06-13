---
layout: ../../layouts/ProjectLayout.astro
title: "PrivaNote"
subtitle: "A note-taking app which prioritizes your security first."
description: A detailed report of PrivaNote.
name: Jason Xie
date: June 12, 2022
img: "/assets/privanote.png"
repoLink: "https://github.com/PrivaNoteTeam/PrivaNote"
demoLink: "https://www.youtube.com/watch?v=yCYnAPSgYa0&ab_channel=PrivaNoteTeam"
---

This project was completed as my school's capstone project during two semesters of my <a href="https://www.senecacollege.ca/programs/fulltime/CPA.html" target="_blank">Computer Programming and Analysis</a> program at <a href="https://www.senecacollege.ca/home.html" target="_blank">Seneca College</a> from May 2021 to December 2021.

The first semester consisted of project planning and management which resulted in building a Software Requirements Specification (SRS) document that can be found <a href="https://docs.google.com/document/d/1ELxASBmFmaZhRiirG6oLVcJKfYo66Z0o/edit?usp=sharing&ouid=116152409118747259916&rtpof=true&sd=true" target="_blank">here.</a> The second semester consisted of implementing the project and the end-result can be found on the project's<a href={frontmatter.repoLink} target="_blank">GitHub repo.</a>

![PrivaNote UI](https://i.imgur.com/JADxLG1.png)

## Contents

---

- [What is PrivaNote?](#what-is-privanote)
- [Main Tech Used](#main-tech-used)
  - [ElectronJS](#electronjs)
  - [Language (Typescript)](#language-typescript)
  - [Front end (ReactJs + TailwindCSS)](#front-end-reactjs--tailwindcss)
  - [Back end (Node + Express)](#back-end-node-express)
  - [Data Storage (PostgreSQL + Prisma + Google Drive API](#data-storage-postgresql--prisma--google-drive-api)
- [Team](#team)

## What is PrivaNote?

---

PrivaNote is a cross-platform desktop note-taking app that provides its end-users with full security and privacy through end-to-end encryption.

PrivaNote's UI consists of a file-explorer to see all your notes, a text-editor to edit your notes in Markdown, and a preview window to see your Markdown notes live.

Users have the option to synchronize their notes to Google Drive or to PrivaNote's own cloud storage service that utilizes end-to-end encryption.

## Main Tech Used

---

A full breakdown of all the technologies used can be found in the `package.json` file for the <a href="https://github.com/PrivaNoteTeam/PrivaNote/blob/main/server/package.json" target="_blank">Server</a> and <a href="https://github.com/PrivaNoteTeam/PrivaNote/blob/main/client/package.json" target="_blank">Client.</a>

### ElectronJS

To enable PrivaNote to be used on Mac, Windows, and Linux, ElectronJS was used to make PrivaNote cross-platform. ElectronJS is essentially wraps around a web app and makes it suitable for desktop.

### Language (Typescript)

To ease the collaboration process, Typescript was used to help build and manage PrivaNote.

### Front end (ReactJS + TailwindCSS)

ReactJS was used to develop PrivaNote's client along with TailwindCSS for styling.

### Back end (Node + Express)

The back end server was built with Node and Express to keep it consistent with the front end client language. This was also what the team was most familiar with.

### Data Storage (PostgreSQL + Prisma + Google Drive API)

User's account and notes data are stored in PostreSQL using Prisma. Notes are encrypted using Node's cryptography library to provide end-to-end encryption. Google Drive API was used to allow users to store/sync their notes with their Google Drive account.

## Team

---

- [Olivier Goulet](https://github.com/oliviergoulet5)
- [Jason Xie](https://github.com/thejasonxie)
- [Parsa Parichehreh](https://github.com/parsa111)
- [Ehsan Hazari](https://github.com/EHSANHAZARI)
- Paul Triet Nham
