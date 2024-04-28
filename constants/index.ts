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

export const leetcode_profile_url: string =
  "https://leetcode.com/GOPAL_SASMAL-1152";

export const geeksforgeeks_profile_url: string =
  "https://www.geeksforgeeks.org/user/xshadow/";

export const hackerrank_profile_url: string =
  "https://www.hackerrank.com/profile/gopalsasmal2000";

export const leetcode_profile_details = {
  totalSolved: 881,
  totalQuestions: 3130,
  easySolved: 337,
  totalEasy: 789,
  mediumSolved: 424,
  totalMedium: 1644,
  hardSolved: 120,
  totalHard: 697,
  acceptanceRate: 86.05,
  ranking: 16020,
  contributionPoints: 4676,
  reputation: 5,
  submissionCalendar: {
    "1682640000": 7,
    "1682726400": 8,
    "1682812800": 13,
    "1682899200": 3,
    "1682985600": 8,
    "1683072000": 1,
    "1683158400": 10,
    "1683244800": 4,
    "1683331200": 4,
    "1683417600": 1,
    "1683504000": 5,
    "1683590400": 1,
    "1683676800": 2,
    "1683763200": 3,
    "1683849600": 2,
    "1683936000": 5,
    "1684022400": 4,
    "1684108800": 2,
    "1684195200": 2,
    "1684281600": 8,
    "1684368000": 6,
    "1684454400": 12,
    "1684540800": 6,
    "1684627200": 7,
    "1684713600": 1,
    "1684800000": 4,
    "1684886400": 7,
    "1684972800": 7,
    "1685059200": 4,
    "1685145600": 3,
    "1685232000": 3,
    "1685318400": 3,
    "1685404800": 4,
    "1685491200": 3,
    "1685577600": 3,
    "1685664000": 3,
    "1685750400": 3,
    "1685836800": 8,
    "1685923200": 4,
    "1686009600": 4,
    "1686096000": 4,
    "1686182400": 3,
    "1686268800": 3,
    "1686355200": 3,
    "1686441600": 3,
    "1686528000": 3,
    "1686614400": 4,
    "1686700800": 3,
    "1686787200": 3,
    "1686873600": 3,
    "1686960000": 3,
    "1687046400": 3,
    "1687132800": 3,
    "1687219200": 3,
    "1687305600": 3,
    "1687392000": 2,
    "1687478400": 3,
    "1687564800": 2,
    "1687651200": 3,
    "1687737600": 4,
    "1687824000": 3,
    "1687910400": 3,
    "1687996800": 4,
    "1688083200": 5,
    "1688169600": 4,
    "1688256000": 3,
    "1688342400": 2,
    "1688428800": 3,
    "1688515200": 3,
    "1688601600": 3,
    "1688688000": 3,
    "1688774400": 2,
    "1688860800": 2,
    "1688947200": 3,
    "1689033600": 3,
    "1689120000": 3,
    "1689206400": 3,
    "1689292800": 2,
    "1689379200": 3,
    "1689465600": 2,
    "1689552000": 4,
    "1689638400": 10,
    "1689724800": 7,
    "1689811200": 2,
    "1689897600": 3,
    "1689984000": 2,
    "1690070400": 6,
    "1690156800": 2,
    "1690243200": 2,
    "1690329600": 2,
    "1690416000": 2,
    "1690502400": 3,
    "1690588800": 2,
    "1690675200": 5,
    "1690761600": 2,
    "1690848000": 2,
    "1690934400": 2,
    "1691020800": 2,
    "1691107200": 3,
    "1691193600": 2,
    "1691280000": 3,
    "1691366400": 3,
    "1691452800": 2,
    "1691539200": 2,
    "1691625600": 4,
    "1691712000": 2,
    "1691798400": 2,
    "1691884800": 5,
    "1691971200": 2,
    "1692057600": 2,
    "1692144000": 2,
    "1692230400": 2,
    "1692316800": 2,
    "1692403200": 2,
    "1692489600": 3,
    "1692576000": 2,
    "1692662400": 2,
    "1692748800": 2,
    "1692835200": 3,
    "1692921600": 3,
    "1693008000": 3,
    "1693094400": 5,
    "1693180800": 3,
    "1693267200": 3,
    "1693353600": 3,
    "1693440000": 2,
    "1693526400": 3,
    "1693612800": 3,
    "1693699200": 3,
    "1693785600": 2,
    "1693872000": 3,
    "1693958400": 3,
    "1694044800": 3,
    "1694131200": 3,
    "1694217600": 3,
    "1694304000": 2,
    "1694390400": 2,
    "1694476800": 4,
    "1694563200": 3,
    "1694649600": 4,
    "1694736000": 2,
    "1694822400": 1,
    "1694908800": 3,
    "1694995200": 3,
    "1695081600": 2,
    "1695168000": 3,
    "1695254400": 4,
    "1695340800": 3,
    "1695427200": 3,
    "1695513600": 4,
    "1695600000": 3,
    "1695686400": 4,
    "1695772800": 3,
    "1695859200": 3,
    "1695945600": 4,
    "1696032000": 1,
    "1696118400": 4,
    "1696204800": 3,
    "1696291200": 1,
    "1696377600": 2,
    "1696464000": 1,
    "1696550400": 4,
    "1696636800": 3,
    "1696723200": 2,
    "1696809600": 3,
    "1696896000": 2,
    "1696982400": 2,
    "1697068800": 1,
    "1697155200": 3,
    "1697241600": 2,
    "1697328000": 3,
    "1697414400": 2,
    "1697500800": 2,
    "1697587200": 2,
    "1697673600": 3,
    "1697760000": 2,
    "1697846400": 3,
    "1697932800": 1,
    "1698019200": 2,
    "1698105600": 2,
    "1698192000": 2,
    "1698278400": 2,
    "1698364800": 2,
    "1698451200": 3,
    "1698537600": 1,
    "1698624000": 2,
    "1698710400": 1,
    "1698796800": 3,
    "1698883200": 1,
    "1698969600": 1,
    "1699056000": 1,
    "1699142400": 1,
    "1699228800": 3,
    "1699315200": 1,
    "1699401600": 2,
    "1699488000": 2,
    "1699574400": 2,
    "1699660800": 2,
    "1699747200": 2,
    "1699833600": 2,
    "1699920000": 1,
    "1700006400": 2,
    "1700092800": 2,
    "1700179200": 2,
    "1700265600": 2,
    "1700352000": 2,
    "1700438400": 3,
    "1700524800": 2,
    "1700611200": 2,
    "1700697600": 2,
    "1700784000": 2,
    "1700870400": 2,
    "1700956800": 5,
    "1701043200": 2,
    "1701129600": 2,
    "1701216000": 2,
    "1701302400": 1,
    "1701388800": 2,
    "1701475200": 3,
    "1701561600": 7,
    "1701648000": 2,
    "1701734400": 2,
    "1701820800": 3,
    "1701907200": 1,
    "1701993600": 2,
    "1702080000": 1,
    "1702166400": 4,
    "1702252800": 2,
    "1702339200": 1,
    "1702425600": 2,
    "1702512000": 4,
    "1702598400": 2,
    "1702684800": 2,
    "1702771200": 2,
    "1702857600": 3,
    "1702944000": 5,
    "1703030400": 3,
    "1703116800": 1,
    "1703203200": 1,
    "1703289600": 1,
    "1703376000": 1,
    "1703462400": 1,
    "1703548800": 1,
    "1703635200": 3,
    "1703721600": 1,
    "1703808000": 2,
    "1703894400": 2,
    "1703980800": 2,
    "1704067200": 3,
    "1704153600": 1,
    "1704240000": 6,
    "1704326400": 1,
    "1704412800": 1,
    "1704499200": 2,
    "1704585600": 2,
    "1704672000": 2,
    "1704758400": 2,
    "1704844800": 2,
    "1704931200": 2,
    "1705017600": 4,
    "1705104000": 2,
    "1705190400": 2,
    "1705276800": 7,
    "1705363200": 6,
    "1705449600": 2,
    "1705536000": 5,
    "1705622400": 5,
    "1705708800": 1,
    "1705795200": 4,
    "1705881600": 3,
    "1705968000": 2,
    "1706054400": 16,
    "1706140800": 7,
    "1706227200": 5,
    "1706313600": 14,
    "1706400000": 8,
    "1706486400": 2,
    "1706572800": 2,
    "1706659200": 1,
    "1706745600": 1,
    "1706832000": 1,
    "1706918400": 2,
    "1707004800": 8,
    "1707091200": 4,
    "1707177600": 3,
    "1707264000": 2,
    "1707350400": 5,
    "1707436800": 8,
    "1707523200": 7,
    "1707609600": 7,
    "1707696000": 6,
    "1707782400": 1,
    "1707868800": 2,
    "1707955200": 1,
    "1708041600": 3,
    "1708128000": 6,
    "1708214400": 10,
    "1708300800": 5,
    "1708387200": 4,
    "1708473600": 1,
    "1708560000": 7,
    "1708646400": 8,
    "1708732800": 2,
    "1708819200": 1,
    "1708905600": 2,
    "1708992000": 1,
    "1709078400": 1,
    "1709164800": 1,
    "1709251200": 1,
    "1709337600": 1,
    "1709424000": 8,
    "1709510400": 4,
    "1709596800": 3,
    "1709683200": 2,
    "1709769600": 1,
    "1709856000": 2,
    "1709942400": 1,
    "1710028800": 7,
    "1710115200": 4,
    "1710201600": 2,
    "1710288000": 1,
    "1710374400": 1,
    "1710460800": 1,
    "1710547200": 11,
    "1710633600": 10,
    "1710720000": 6,
    "1710806400": 1,
    "1710892800": 1,
    "1710979200": 1,
    "1711065600": 2,
    "1711152000": 1,
    "1711238400": 1,
    "1711324800": 1,
    "1711411200": 1,
    "1711497600": 3,
    "1711584000": 3,
    "1711670400": 1,
    "1711756800": 2,
    "1711843200": 4,
    "1711929600": 2,
    "1712016000": 1,
    "1712102400": 1,
    "1712188800": 2,
    "1712275200": 1,
    "1712361600": 1,
    "1712448000": 3,
    "1712534400": 1,
    "1712620800": 3,
    "1712707200": 1,
    "1712793600": 2,
    "1712880000": 1,
    "1712966400": 1,
    "1713052800": 1,
    "1713139200": 2,
    "1713225600": 4,
    "1713312000": 8,
    "1713398400": 1,
    "1713484800": 1,
    "1713571200": 1,
    "1713657600": 1,
    "1713744000": 2,
    "1713830400": 1,
    "1713916800": 2,
    "1714003200": 2,
    "1714089600": 2,
    "1714176000": 1,
  },
};
