---
title: "This website"
subtitle: "Tech stack, file structure etc etc"
date: "2023-10-04"
tags: ['blog','front-end','next.js']
---

## Intro 
I needed a personal website and wanted to learn next.js coming from React, so decided that I will make my 
website using next.js 13 with a new experimental app directory

This website is created using **Next.js** 13 
for styling **Tailwind css**
all the markdown files are styled with **tailwindcss/typography** css plugin

below is the file structure of the website 

## File Structure

```
📦app
 ┣ 📂(portfolio)
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📂[slug]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂guestbook
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂portfolio
 ┃ ┃ ┣ 📂[slug]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂(providers)
 ┃ ┣ 📜PageWrapper.tsx
 ┃ ┗ 📜providers.tsx
 ┗ 📂(resume)
 ┃ ┣ 📂resume
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📜layout.tsx
```




