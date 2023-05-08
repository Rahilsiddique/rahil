---
title: "This website"
subtitle: "how to make blazingly fast blogs/portfolio using next.js 13"
date: "2023-10-04"
tags: ['blog','front-end','next.js']
---

## Intro 
I needed a personal website and wanted to learn next.js coming from React, so decided that I will make my 
website using next.js 13 with a new experimental app directory

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