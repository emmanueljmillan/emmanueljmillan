import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Emmanuel Millan",
  DESCRIPTION: "Welcome to my Portfolio! Template from AstroSphere, developed by Mark Horn.",
  AUTHOR: "Emmanuel Millan",
}

// Work Page i.e. Experience
export const WORK: Page = {
  TITLE: "Experience",
  DESCRIPTION: "Places I have worked.",
}

//Removing Blog
/*
// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}
*/
//Ending comment

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Experience", 
    HREF: "/Experience", 
  },
  
//Removing Blog
/*
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
*/  
//Ending comment
  
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "emmanueljmillan@outlook.com",
    HREF: "emmanueljmillan@outlook.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "emmanuel-dev",
    HREF: "https://github.com/emmanueljmillan"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "emmanuel-dev",
    HREF: "https://www.linkedin.com/in/emmanueljmillan/",
  },
]

