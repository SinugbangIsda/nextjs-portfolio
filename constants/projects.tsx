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
  MaskUpAdmin,
  MaskUpLogo,
  MaskUpThumbnail,
  MaskUpUser,
  ShortlyHome,
  ShortlyLogo,
  ShortlyThumbnail,
  HighDefThumbnail,
  HighDefLogo
} from "@/public";

export const projects = [
  {
    name: "HighDef",
    system: "Web Application",
    year: "2023",
    thumbnail: HighDefThumbnail,
    tools: [
      "ReactJS",
      "TailwindCSS",
      "DaisyUI",
      "NodeJS",
      "ExpressJS",
      "MongoDB"
    ],
    description: "Coming Soon!",
    screenshots: [],
    demo: "https://highdef.vercel.app/",
    video: "",
    github: "https://github.com/SinugbangIsda/mern-highdef-ims",
    logo: HighDefLogo
  },
  {
    name: "Durtect",
    system: "Mobile Application",
    year: "2023",
    thumbnail: DurtectThumbnail,
    tools: [
      "React Native",
      "Flask",
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
    github: "https://github.com/SinugbangIsda/react-native-durtect",
    logo: DurtectLogo
  },
  {
    name: "AnimeLib",
    system: "Web Application",
    year: "2023",
    thumbnail: AnimeLibThumbnail,
    tools: [
      "ReactJS",
      "ChakraUI",
      "Spring Boot",
      "MySQL"
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
    name: "Short.ly",
    system: "Web Application",
    year: "2023",
    thumbnail: ShortlyThumbnail,
    tools: [
      "ReactJS",
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
    demo: "https://xd.adobe.com/view/8c8f5cf9-c157-4e1b-8da8-6bc2c4d85350-d9dc/screen/a40dcc5e-7f3f-4ca4-9a52-8dd780989484?fullscreen",
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
  }
];