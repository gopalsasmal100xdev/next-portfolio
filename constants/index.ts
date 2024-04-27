export const NAME = "GOPAL SASMAL";
export const name = "Gopal Sasmal";

interface SocialsType {
  name: string;
  profile_link: string;
  icon: string;
}

export const Socials: SocialsType[] = [
  {
    name: "Github",
    profile_link: "https://github.com/gopalsasmal100xdev",
    icon: "/icons8-github.svg",
  },
  {
    name: "LinkedIn",
    profile_link: "https://www.linkedin.com/in/gopal-sasmal/",
    icon: "/icons8-linkedin.svg",
  },
  {
    name: "Twitter",
    profile_link: "https://twitter.com/GopalSasmal01",
    icon: "/icons8-twitter.svg",
  },
];

export const about =
  "I'm a skilled software developer with experience in JavaScript and TypeScript, and expertise in frameworks like React.js, Next.js, Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

export const Short_desc =
  "I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.";

export const Resume_url = "https://flowcv.com/resume/4upc6r21k2";

export const title = "Fullstack Developer";

export const titles = [
  "Frontend Development",
  "Backend Development",
  "MERN Stack Development",
  "Open Source Contribution",
];

export interface Skill {
  id: number;
  title: string;
  url: string;
}
export const skills = {
  frontend: [
    {
      id: 1,
      title: "HTML5",
      url: "/skills/icons8-html.svg",
    },
    {
      id: 2,
      title: "CSS",
      url: "/skills/icons8-css.svg",
    },
    {
      id: 3,
      title: "JavaScript",
      url: "/skills/icons8-javascript.svg",
    },
    {
      id: 4,
      title: "TypeScript",
      url: "/skills/icons8-typescript.svg",
    },
    {
      id: 5,
      title: "ReactJS",
      url: "/skills/icons8-react-js.svg",
    },
    {
      id: 6,
      title: "NextJS",
      url: "/skills/icons8-next.svg",
    },
    {
      id: 7,
      title: "Redux",
      url: "/skills/redux.png",
    },
    {
      id: 8,
      title: "Tailwind",
      url: "/skills/tailwindcss.png",
    },
    {
      id: 9,
      title: "Material UI",
      url: "/skills/material-ui.png",
    },
    {
      id: 10,
      title: "Chakra UI",
      url: "/skills/chakra-ui.png",
    },
    {
      id: 11,
      title: "Bootstrap",
      url: "/skills/bootstrap.png",
    },
    {
      id: 12,
      title: "jQuery",
      url: "/skills/jquery.png",
    },
  ],
  backend: [
    {
      id: 1,
      title: "NodeJS",
      url: "/skills/icons8-node-js.svg",
    },
    {
      id: 2,
      title: "Express",
      url: "/skills/express-js.png",
    },
    {
      id: 3,
      title: "MongoDB",
      url: "/skills/mongodb.png",
    },
    {
      id: 4,
      title: "Firebase",
      url: "/skills/firebase.png",
    },
    {
      id: 5,
      title: "MySQL",
      url: "/skills/mysql-logo.png",
    },
    {
      id: 10,
      title: "Postgresql",
      url: "/skills/icons8-postgresql.svg",
    },
    {
      id: 6,
      title: "Prisma",
      url: "/skills/icons8-prisma-orm.svg",
    },
    {
      id: 7,
      title: "Redis",
      url: "/skills/icons8-redis.svg",
    },
    {
      id: 8,
      title: "AWS",
      url: "/skills/icons8-amazon-aws.png",
    },
    {
      id: 9,
      title: "Docker",
      url: "/skills/docker.png",
    },
    {
      id: 10,
      title: "GraphQl",
      url: "/skills/graphql.png",
    },
  ],
  other: [
    {
      id: 2,
      title: "Java",
      url: "/skills/java.png",
    },
    {
      id: 10,
      title: "C++",
      url: "/skills/cpp.png",
    },
    {
      id: 3,
      title: "Git",
      url: "/skills/git.png",
    },
    {
      id: 4,
      title: "Github",
      url: "/skills/github.png",
    },
    {
      id: 6,
      title: "Postman",
      url: "/skills/postman.png",
    },
    {
      id: 8,
      title: "Thunder Client",
      url: "/skills/thunderclient.png",
    },
    {
      id: 7,
      title: "Netlify",
      url: "/skills/netlify.png",
    },
    {
      id: 5,
      title: "Vercel",
      url: "/skills/vercel.png",
    },
    {
      id: 9,
      title: "Chat GPT",
      url: "/skills/icons8-chat-gpt.svg",
    },
    {
      id: 1,
      title: "Googling",
      url: "/skills/google-logo.png",
    },
  ],
};

export const contact_desc =
  "Feel free to slide into my DMs anytime! Whether you've got a burning question or simply want to shoot the breeze, I'll try my best to get back to you!";

export const nav_items: string[] = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "coding",
  "contact",
];

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  desc: string[];
}
export interface Education {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export const experiences: Experience[] = [
  {
    company: "Antier Solutions (Mohali, Punjab)",
    desc: [
      "Learnt decentralized applications (DApps) using blockchain platforms, smart contracts, and modern web development tools",
      "Optimized website performance by implementing lazy loading and code splitting techniques, resulting in a 40% improvement in page load speed",
      "Fixing several bugs in a pre-written codebase",
    ],
    startDate: "June 2023",
    endDate: "Dec 2023",
    position: "Blockchain Developer Apprenticeship",
  },
  // Add most recent at the end
];

export const educations: Education[] = [
  {
    institute: "Barageria R.A.M Sikshaniketan(H.S)",
    degree: "General Subjects(B,E,M,H,G,P,C)[V - X]",
    startDate: "2012",
    endDate: "2017",
  },
  {
    institute: "Jalchack N.N Vidyayatan",
    degree: "Pure Science(Phy, Chem, Math, Bio)",
    startDate: "2018",
    endDate: "2020",
  },
  {
    institute: "Chitkara University",
    degree: "Computer Science and Engineering (B-Tech)",
    startDate: "2020",
    endDate: "2024",
  },
  // Add most recent at the end
];

export const CodingProfiles = [];

export interface CodeBadge {
  title: string;
  date: string;
  url: string;
  gif_url: string;
  year?: number;
}

type BadgesType = {
  [key: string]: CodeBadge[];
};

export const Badges: BadgesType = {
  complition: [
    {
      title: "100 Days Badge",
      date: "09-04-2024",
      url: "/badges/2024-100.png",
      gif_url: "/badges/2024-100.gif",
      year: 2024,
    },
    {
      title: "50 Days Badge",
      date: "19-02-2024",
      url: "/badges/2024-50.png",
      gif_url: "/badges/2024-50.gif",
      year: 2024,
    },
    {
      title: "Annual Badge",
      date: "15-12-2023",
      url: "/badges/2023.png",
      gif_url: "/badges/2023.gif",
      year: 2023,
    },
    {
      title: "50 Days Badge",
      date: "15-12-2023",
      url: "/badges/2023-50.png",
      gif_url: "/badges/2023-50.gif",
      year: 2023,
    },
    {
      title: "100 Days Badge",
      date: "15-12-2023",
      url: "/badges/2023-100.png",
      gif_url: "/badges/2023-100.gif",
      year: 2023,
    },
    {
      title: "100 Days Badge",
      date: "01-01-2023",
      url: "/badges/2022-100.png",
      gif_url: "/badges/2022-100.gif",
      year: 2023,
    },
  ],
  monthly: [
    // recent badge puts at the end
    // 2024
    {
      title: "100 Days Badge",
      date: "09-04-2024",
      url: "/badges/2024-100.png",
      gif_url: "/badges/2024-100.gif",
      year: 2024,
    },
    {
      title: "50 Days Badge",
      date: "19-02-2024",
      url: "/badges/2024-50.png",
      gif_url: "/badges/2024-50.gif",
      year: 2024,
    },
    {
      title: "January Badge",
      date: "31-01-2024",
      url: "/badges/2024-01.png",
      gif_url: "/badges/2024-01.gif",
      year: 2024,
    },
    {
      title: "Fabruary Badge",
      date: "29-02-2024",
      url: "/badges/2024-02.png",
      gif_url: "/badges/2024-02.gif",
      year: 2024,
    },
    {
      title: "March Badge",
      date: "31-03-2024",
      url: "/badges/2024-03.png",
      gif_url: "/badges/2024-03.gif",
      year: 2024,
    },
    // 2023
    {
      title: "Annual Badge",
      date: "15-12-2023",
      url: "/badges/2023.png",
      gif_url: "/badges/2023.gif",
      year: 2023,
    },
    {
      title: "50 Days",
      date: "15-12-2023",
      url: "/badges/2023-50.png",
      gif_url: "/badges/2023-50.gif",
      year: 2023,
    },
    {
      title: "100 Days",
      date: "15-12-2023",
      url: "/badges/2023-100.png",
      gif_url: "/badges/2023-100.gif",
      year: 2023,
    },
    {
      title: "January Badge",
      date: "31-01-2023",
      url: "/badges/2023-01.png",
      gif_url: "/badges/2023-01.gif",
      year: 2023,
    },
    {
      title: "Fabruary Badge",
      date: "28-02-2023",
      url: "/badges/2023-02.png",
      gif_url: "/badges/2023-02.gif",
      year: 2023,
    },
    {
      title: "March Badge",
      date: "31-03-2023",
      url: "/badges/2023-03.png",
      gif_url: "/badges/2023-03.gif",
      year: 2023,
    },
    {
      title: "April Badge",
      date: "30-04-2023",
      url: "/badges/2023-04.png",
      gif_url: "/badges/2023-04.gif",
      year: 2023,
    },
    {
      title: "May Badge",
      date: "31-05-2023",
      url: "/badges/2023-05.png",
      gif_url: "/badges/2023-05.gif",
      year: 2023,
    },
    {
      title: "June Badge",
      date: "30-06-2023",
      url: "/badges/2023-06.png",
      gif_url: "/badges/2023-06.gif",
      year: 2023,
    },
    {
      title: "July Badge",
      date: "31-07-2023",
      url: "/badges/2023-07.png",
      gif_url: "/badges/2023-07.gif",
      year: 2023,
    },
    {
      title: "August Badge",
      date: "31-08-2023",
      url: "/badges/2023-08.png",
      gif_url: "/badges/2023-08.gif",
      year: 2023,
    },
    {
      title: "September Badge",
      date: "30-09-2023",
      url: "/badges/2023-09.png",
      gif_url: "/badges/2023-09.gif",
      year: 2023,
    },
    {
      title: "October Badge",
      date: "31-10-2023",
      url: "/badges/2023-10.png",
      gif_url: "/badges/2023-10.gif",
      year: 2023,
    },
    {
      title: "November Badge",
      date: "30-11-2023",
      url: "/badges/2023-11.png",
      gif_url: "/badges/2023-11.gif",
      year: 2023,
    },
    {
      title: "December Badge",
      date: "31-12-2023",
      url: "/badges/2023-12.png",
      gif_url: "/badges/2023-12.gif",
      year: 2023,
    },

    // 2022
    {
      title: "June Badge",
      date: "30-6-2022",
      url: "/badges/2022-06.png",
      gif_url: "/badges/2022-06.gif",
      year: 2022,
    },
    {
      title: "October Badge",
      date: "31-10-2022",
      url: "/badges/2022-10.png",
      gif_url: "/badges/2022-10.gif",
      year: 2022,
    },
    {
      title: "November Badge",
      date: "30-11-2022",
      url: "/badges/2022-11.png",
      gif_url: "/badges/2022-11.gif",
      year: 2022,
    },
    {
      title: "December Badge",
      date: "31-12-2022",
      url: "/badges/2022-12.png",
      gif_url: "/badges/2022-12.gif",
      year: 2022,
    },
  ],
  github: [
    {
      title: "Pull Shark",
      date: "Mar 28, 2023",
      url: "/badges/github-pull-shark.png",
      gif_url: "/badges/github-pull-shark.png",
      year: 2023,
    },
    {
      title: "Quickdraw",
      date: "Nov 10, 2023",
      url: "/badges/github-quickdraw.png",
      gif_url: "/badges/github-quickdraw.png",
      year: 2023,
    },
    {
      title: "Yolo",
      date: "Jan 31, 2023",
      url: "/badges/github-yolo.png",
      gif_url: "/badges/github-yolo.png",
      year: 2023,
    },
  ],
  outhers: [],
};

export const projects_categories = [
  "SPA",
  "MERN Stack",
  "Backend",
  "Basic App",
];

interface Project {
  name: string;
  description: string;
  tags: string[];
  image_url: string;
  source_code_url: string;
  live_link?: string;
}

export const projects: Project[] = [
  {
    name: "E-Shop",
    description:
      "Responsive and multi-functionality e-commerce platform E-Shop, Enhanced user experience with a user-friendly interface, secure shopping cart, and efficient payment processing",
    tags: [
      "ReactJS",
      "Tailwind",
      "Javascript",
      "NodeJS",
      "MongoDB",
      "Express",
      "Node Mailer",
      "Socet.io",
    ],
    image_url: "/projects/eshop.png",
    source_code_url: "https://github.com/gopalsasmal100xdev/E-Shop",
    live_link: "",
  },
  {
    name: "Ninja Board",
    description:
      "Created a collaborative Ninjaboard app with a rich toolbar including Text, Shapes, Sticky Note, and Pencil tools. Added layering for better organization, undo/redo, and keyboard shortcuts for efficient editing. Enabled real-time collaboration via a database for simultaneous editing and live updates.",
    tags: [
      "NextJS-14",
      "React",
      "Typescript",
      "Javascript",
      "Convex",
      "Clerk",
      "Tailwind",
      "Shadcn",
    ],
    image_url: "/projects/ninjaboard.png",
    source_code_url: "https://github.com/gopalsasmal100xdev/Ninja-Board",
    live_link: "https://ninja-board.vercel.app/",
  },
  {
    name: "Hippo Digital Goods",
    description: "Digital marketplace for high-quality digital assets",
    tags: ["NextJS", "React", "Typescript", "Javascript", "Tailwind"],
    image_url: "/projects/hippodigitalgoods.png",
    source_code_url: "https://github.com/gopalsasmal100xdev/HippoDigitalGoods",
    live_link: "https://hippo-digital-goods.vercel.app",
  },
  {
    name: "Pinfinity",
    description:
      "Web-based platform that allows users to easily share, organize, and discover photos with their friends and followers. Implemented key features such as upload, comments ",
    tags: ["react", "Google Auth API"],
    image_url: "/projects/pinfinity.png",
    source_code_url: "https://github.com/gopal24-colab/Pinfinity",
    live_link: "https://pinfinity-gs.netlify.app/",
  },
  {
    name: "AI Art Gallery",
    description:
      "The AI Art Gallery project is a web application that leverages the power of artificial intelligence to create and showcase unique pieces of artwork.Using user prompts create new artwork using Open AI",
    tags: ["React", "Javascript", "Open AI", "NodeJS"],
    image_url: "/projects/ai-art.png",
    source_code_url: "https://github.com/gopal24-colab/ai-art-gallery",
    live_link: "https://ai-art-gallery.netlify.app/",
  },
  {
    name: "Library Management",
    description:
      "A servers side library Management project,Admin can add books and only one book only can borrowed by one user",
    tags: ["NodeJS", "Javascript", "MongoDB", "Multer", "Mongoose"],
    image_url: "/projects/library.png",
    source_code_url: "https://github.com/gopalsasmal100xdev/Library-Management",
    live_link: "https://library-management-gs.onrender.com/",
  },
];

export type Certificate = {
  name: string;
  iframe_link: string;
  bg_color: "red" | "green" | "blue" | "yellow";
  provider: string;
};

export const certificates: Certificate[] = [
  {
    name: "Frontend Developer (React)",
    iframe_link: "https://www.hackerrank.com/certificates/ad77b4d7a95f",
    bg_color: "red",
    provider: "HackerRank",
  },
  {
    name: "Problem Solving (Basic)",
    iframe_link: "https://www.hackerrank.com/certificates/fa26abb915f1",
    bg_color: "green",
    provider: "HackerRank",
  },
  {
    name: "Problem Solving (Intermediate)",
    iframe_link: "https://www.hackerrank.com/certificates/ae5417d16f43",
    bg_color: "yellow",
    provider: "HackerRank",
  },
  {
    name: "JavaScript (Basic)",
    iframe_link: "https://www.hackerrank.com/certificates/82255d5c49f1",
    bg_color: "green",
    provider: "HackerRank",
  },
  {
    name: "JavaScript (Intermediate)",
    iframe_link: "https://www.hackerrank.com/certificates/0c4a22620858",
    bg_color: "yellow",
    provider: "HackerRank",
  },
  {
    name: "React (Basic)",
    iframe_link: "https://www.hackerrank.com/certificates/1ce21c585590",
    bg_color: "green",
    provider: "HackerRank",
  },
  {
    name: "Node (Basic)",
    iframe_link: "https://www.hackerrank.com/certificates/a6342aa37da9",
    bg_color: "green",
    provider: "HackerRank",
  },
  {
    name: "Rest API (Intermediate)",
    iframe_link: "https://www.hackerrank.com/certificates/0fb4f3933649",
    bg_color: "yellow",
    provider: "HackerRank",
  },
  {
    name: "Java (Basic)",
    iframe_link: "https://www.hackerrank.com/certificates/ede3ba7dc1a3",
    bg_color: "green",
    provider: "HackerRank",
  },
  {
    name: "CSS (Basic)",
    iframe_link: "https://www.hackerrank.com/certificates/4bdfa3ec5982",
    bg_color: "green",
    provider: "HackerRank",
  },
  {
    name: "SQL (Basic)",
    iframe_link: "https://www.hackerrank.com/certificates/9baf89e9f5f9",
    bg_color: "green",
    provider: "HackerRank",
  },
  {
    name: "SQL (Intermediate)",
    iframe_link: "https://www.hackerrank.com/certificates/5f6c71b0b12a",
    bg_color: "yellow",
    provider: "HackerRank",
  },
  {
    name: "SQL (Advanced)",
    iframe_link: "https://www.hackerrank.com/certificates/b4aabc62a746",
    bg_color: "red",
    provider: "HackerRank",
  },
];
