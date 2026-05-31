import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Emmanuel Millan",
  DESCRIPTION: "Welcome to my Portfolio!",
  AUTHOR: "Emmanuel Millan",
}

// Work Page i.e. Experience
export const WORK: Page = {
  TITLE: "Experience",
  DESCRIPTION: "Places I have worked.",
}

// Research Page
export const RESEARCH: Page = {
  TITLE: "Research",
  DESCRIPTION: "Subject of Master's Thesis.",
}

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
    HREF: "/experience", 
  },
  
  { 
    TEXT: "Research", 
    HREF: "/research", 
  },
  
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
    HREF: "mailto:emmanueljmillan@outlook.com",
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

