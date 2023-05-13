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

here we have two layout files one for the resume and the other for the portfolio section all these layout files 
are separated with (folder) file structure of the next 13.

All the static content of the website is stored in the content folder 

```
📦content
 ┣ 📂portfolio
 ┃ ┣ 📜portfolio-website.md
 ┃ ┣ 📜resume-builder.md
 ┃ ┗ 📜sorting-visualizer.md
 ┣ 📂posts
 ┃ ┣ 📜portfolio-website-with-next.md
 ┃ ┣ 📜yeah.md
 ┃ ┗ 📜yet-another-blog.md
 ┣ 📜Intro.md
 ┗ 📜resume.json
```

all the projects content and blogs content are stored in the form of markdown files 
and images are in the public folder the resume.json includes all the data of the resume which is stored in the form of JSON 

`fs` library is used to read data from markdown 
`gray-matter` library is used to convert string files into JavaScript objects

```javascript
import fs from "fs";
import matter from "gray-matter";

const getIntroMetadata = (): any => {
  const file = fs.readFileSync("content/Intro.md", "utf-8");
  const matterResult = matter(file);

  return {
    name: matterResult.data.name,
    title: matterResult.data.title,
    slug: file
  };
};

export default getIntroMetadata;
```

the intro.md file 

```markdown
---
name: 'Rahil Siddique'
title: 'Student & Developer'
---
## Hello 👋
My name is Rahil Siddique, I am an undergrad Engineering student currently in my third year and this is my website where you can find my *projects*, *blogs*, *code snippets*, *resume* etc.
## My Tech Stack 🧑‍💻 
- I mostly do Frontend Development with **React/Next + JavaScript**, though some of my recent projects  include **TypeScript** as well 
- For *Styling* I use **Tailwind css/vanilla css** 

## Things that I am learning right now 📕

- Typescript 
- Next.js 
```

the `getIntroMetadata` function first detects  the files and convert them into string file,
gray-matter takes that file and convert it into an object as follow: 

```json
{
    name: "Rahil Siddique",
    title: "Student & Developer",
    slug: `<h2>Hello 👋</h2> ...`
}
```

this object is than rendered on the website

## how to make this website yours 

- clone the repo using `git clone https://github.com/Rahilsiddique/rahil`
- run the command `npm install` in the folder to download all the required dependencies
- run the command `npm run dev` to run the website locally on port:3000
- Edit the content in markdown files in `content` folder 
- add relevant images to the `public` folder 





