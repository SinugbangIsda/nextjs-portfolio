import { 
  AnimeLibDashboard,
  AnimeLibForgotPassword,
  AnimeLibInformation,
  AnimeLibLogo,
  AnimeLibProfile,
  AnimeLibSignin,
  AnimeLibSignup,
  AnimeLibThumbnail,
  AnimeLibWatchlist,
  BookHiveAdd,
  BookHiveHome,
  BookHiveLogo,
  BookHiveThumbnail,
  BookHiveUpdate,
  BugritosDashboard,
  BugritosEmployees,
  BugritosLogo,
  BugritosProducts,
  BugritosProfile,
  BugritosSignin,
  BugritosSignup,
  BugritosThumbnail,
  BugritosTransactions,
  DurtectLogo,
  DurtectMockup,
  DurtectThumbnail,
  ListifyHome,
  ListifyLogo,
  ListifyThumbnail,
  MaskUpAdmin,
  MaskUpLogo,
  MaskUpThumbnail,
  MaskUpUser,
  ShoppingListCreate,
  ShoppingListHelp,
  ShoppingListThumbnail,
  ShoppingListView,
  ShoppingListViewAndDelete,
  ShortlyHome,
  ShortlyLogo,
  ShortlyThumbnail
} from "@/public";

export const projects = [
  {
    name: "Durtect",
    system: "Mobile Application",
    year: "2023",
    thumbnail: DurtectThumbnail,
    tools: [
      "ReactNative",
      "TypeScript",
      "Redux Toolkit (RTK)",
      "Tailwind React Native Classnames",
      "Flask",
      "Python",
      "PyTorch",
      "Firebase",
      "Roboflow",
      "YOLOv5"
    ],
    description: "Durtect is a mobile application that can identify the patch canker disease on Durian trees. Using the roboflow framework, It incorporates the use of a custom trained YOLOv5 CNN Model for its disease detection process. The project aims to aid in mitigating the spread of durian diseases and improving crop protection.",
    screenshots: [
      {
        label: "Durtect Mockup",
        src: DurtectMockup
      }
    ],
    demo: "",
    video: "/durtect/durtect-demo.mp4",
    github: "https://github.com/SinugbangIsda/react-native-durtect-v2",
    logo: DurtectLogo
  },
  {
    name: "AnimeLib",
    system: "Web Application",
    year: "2023",
    thumbnail: AnimeLibThumbnail,
    tools: [
      "ReactJS",
      "ViteJS",
      "TypeScript",
      "Redux Toolkit (RTK)",
      "ChakraUI",
      "Java",
      "Spring Boot",
      "MyBatis-Plus",
      "MyBatisPlus-Plus",
      "Project Lombok",
      "Apache Shiro",
      "MySQL",
      "Liquibase"
    ],
    description: "AnimeLib is an anime catalogue of people's favourite animes. Every user has a Watchlist where they can add animes they are interested in.",
    screenshots: [
      {
        label: "AnimeLib Signup",
        src: AnimeLibSignup
      },
      {
        label: "AnimeLib Signin",
        src: AnimeLibSignin
      },
      {
        label: "AnimeLib Forgot Password",
        src: AnimeLibForgotPassword
      },
      {
        label: "AnimeLib Dashboard",
        src: AnimeLibDashboard
      },
      {
        label: "AnimeLib Information",
        src: AnimeLibInformation
      },
      {
        label: "AnimeLib Watchlist",
        src: AnimeLibWatchlist
      },
      {
        label: "AnimeLib Profile",
        src: AnimeLibProfile
      }
    ],
    demo: "",
    video: "",
    github: "https://github.com/SinugbangIsda/spring-boot-ddd-animelib",
    logo: AnimeLibLogo
  },
  {
    name: "Listify",
    system: "Web Application",
    year: "2023",
    thumbnail: ListifyThumbnail,
    tools: [
      "ReactJS",
      "ViteJS",
      "TypeScript",
      "TailwindCSS",
      "Java",
      "Spring Boot",
      "MongoDB",
      "Project Lombok",
    ],
    description: "A full-stack application that utilizes the Spring Boot framework on the backend and React.js on the frontend to create a simple, yet functional todo list. The application allows users to create, read, update, and delete todo items in a user-friendly interface.",
    screenshots: [
      {
        label: "Listify Home",
        src: ListifyHome
      }
    ],
    demo: "",
    video: "",
    github: "https://github.com/SinugbangIsda/spring-boot-reactjs-todolist",
    logo: ListifyLogo
  },
  {
    name: "BookHive",
    system: "Web Application",
    year: "2023",
    thumbnail: BookHiveThumbnail,
    tools: [
      "Thymeleaf",
      "TailwindCSS",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL"
    ],
    description: "This is a full-stack web application for storing and managing book information",
    screenshots: [
      {
        label: "BookHive Home",
        src: BookHiveHome
      },
      {
        label: "BookHive Add",
        src: BookHiveAdd
      },
      {
        label: "BookHive Home",
        src: BookHiveUpdate
      }
    ],
    demo: "",
    video: "",
    github: "https://github.com/SinugbangIsda/spring-boot-thymeleaf-bds",
    logo: BookHiveLogo
  },
  {
    name: "Short.ly",
    system: "Web Application",
    year: "2023",
    thumbnail: ShortlyThumbnail,
    tools: [
      "ReactJS",
      "ViteJS",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "ExpressJS",
      "NodeJS"
    ],
    description: "A web app that shortens long and cluttered URL links.",
    screenshots: [
      {
        label: "Shortly Home",
        src: ShortlyHome
      }
    ],
    demo: "https://shortlyapp.vercel.app/",
    github: "https://github.com/SinugbangIsda/mern-url-shortener",
    logo: ShortlyLogo
  },
  {
    name: "MaskUp",
    system: "Mobile Application Prototype",
    year: "2022",
    thumbnail: MaskUpThumbnail,
    tools: [
      "AdobeXD"
    ],
    description: "This project introduces 2 mobile applications - One for detecting facemask violations from employees not wearing facemasks and the other one monitors and manages data from the Facemask detection mobile application. Data will be stored regarding the time log of the detection, which will contain information regarding what time and date, and which location it occurred in the database.",
    screenshots: [
      {
        label: "MaskUp User",
        src: MaskUpUser
      },
      {
        label: "MaskUp Admin",
        src: MaskUpAdmin
      }
    ],
    demo: "",
    video: "",
    github: "",
    logo: MaskUpLogo
  },
  {
    name: "Bugrito's",
    system: "Desktop Application",
    year: "2021",
    thumbnail: BugritosThumbnail,
    tools: [
      "Windows Forms",
      "C#",
      "XML"
    ],
    description: "An inventory management desktop application for a small burger restaurant. Built using C# Winforms and XML as a local database.",
    screenshots: [
      {
        label: "Bugrito's Signup",
        src: BugritosSignup
      },
      {
        label: "Bugrito's Signin",
        src: BugritosSignin
      },
      {
        label: "Bugrito's Dashboard",
        src: BugritosDashboard
      },
      {
        label: "Bugrito's Products",
        src: BugritosProducts
      },
      {
        label: "Bugrito's Transactions",
        src: BugritosTransactions
      },
      {
        label: "Bugrito's Employees",
        src: BugritosEmployees
      },
      {
        label: "Bugrito's Profile",
        src: BugritosProfile
      },
    ],
    demo: "",
    video: "",
    github: "https://github.com/SinugbangIsda/Bugritos-XML",
    logo: BugritosLogo
  },
  {
    name: "ShoppingList",
    system: "DiscordJS Bot",
    year: "2021",
    thumbnail: ShoppingListThumbnail,
    tools: [
      "DiscordJS",
      "JavaScript",
      "MongoDB",
      "ExpressJS",
      "NodeJS"
    ],
    description: "A discord bot that stores, updates, displays, and deletes the shopping list set by the user.",
    screenshots: [
      {
        label: "ShoppingList Help",
        src: ShoppingListHelp
      },
      {
        label: "ShoppingList Create",
        src: ShoppingListCreate
      },
      {
        label: "ShoppingList View",
        src: ShoppingListView
      },
      {
        label: "ShoppingList View and Delete",
        src: ShoppingListViewAndDelete
      }
    ],
    demo: "",
    video: "",
    github: "https://github.com/SinugbangIsda/shopping-list-discord-bot",
  },
];