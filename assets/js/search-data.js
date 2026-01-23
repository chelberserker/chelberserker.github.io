// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here texts are grouped by a common theme in a project",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "post-surf-python-package-is-released",
        
          title: "SURF Python package is released",
        
        description: "Release of a software package for Surface X-ray scattering processing",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/SURF-release/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-paper-out-in-jcis",
          title: 'New paper out in JCIS!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-14-JCIS-balance_hydrophobic/";
            },},{id: "news-passed-my-phd-viva",
          title: 'Passed my PhD viva',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-29-viva-news/";
            },},{id: "news-new-paper-out-in-langmuir",
          title: 'New paper out in Langmuir!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-23-Langmuir-humidity-induced/";
            },},{id: "projects-surf-python-package",
          title: 'SURF python package',
          description: "python package for surface scattering (XRR, GID, GIXS) data processing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_SURF/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%67%6F%72.%62%65%72%73%65%6E%65%76@%65%73%72%66.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/chelberserker", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5609-7794", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Q2yuoqwAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57208650095", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
