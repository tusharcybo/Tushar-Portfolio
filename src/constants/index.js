import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  lai,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  store,
  tripify,
  facebook,
  c,
  asp,
  mssql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Microsoft SQL Server",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C#",
    icon: c,
  },
  {
    name: "asp",
    icon: asp,
  },
  {
    name: "mssql",
    icon: mssql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Laminaar Aviation Infotech Pvt. Ltd.",
    icon: lai,
    iconBg: "#F3F4F6",
    date: "May 2022 - Dec 2024",
    points: [
      "Designed secure RESTful APIs using ASP.NET Core and built dynamic interfaces with React.js for Aviation Resource Management System (A.R.M.S).",
      "Created a Ground Time Gap Report with SQL Server and DevExpress, boosting reporting efficiency by 50%.",
      "Improved Flight Table Rotation Builder with a save-as filter, reducing schedule modification time by 40%.",
      "Implemented Scenario Compare in CTO, enabling side-by-side evaluations and reducing scheduling conflicts by 60%.",
      "Developed reports like Trip Details, Layover, and Time Table, improving data visibility and insights by 70%.",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company_name: "Laminaar Aviation Infotech Pvt. Ltd.",
    icon: lai,
    iconBg: "#E6E6FA",
    date: "Nov 2021 - May 2022",
    points: [
      "Rapidly learned aviation-specific terminology, operations, and processes to effectively contribute to the development of A.R.M.S Aviation Resource Management System.",
      "Resolved critical bugs in the Commercial Planning Sub-System (CPSS) and Crew Management Subsystem (CMSS), contributing to improved system stability and performance.",
      "Assisted in the development of modular components for flight scheduling and crew management, supporting senior developers in delivering high-quality features.",
      "Collaborated with cross-functional teams to address client-specific requirements and ensured timely delivery of tasks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Store",
    description:
      "Restore is a full-stack resell platform with secure payments via Stripe and user management, built using .NET Core, React, and Redux.",
    tags: [
      {
        name: ".Net Core",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: store,
    source_code_link: "https://github.com/tusharcybo/shopa",
  },
  {
    name: "Tripify",
    description:
      "IndiaTour is a full-stack web app for browsing and booking tours across India, with secure user authentication and real-time management, built using React.js and .NET.",
    tags: [
      {
        name: ".Net Core",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripify,
    source_code_link: "https://github.com/tusharcybo/indiatour-webapi",
  },
  {
    name: "Facebook Clone",
    description:
      "A Facebook clone web application that allows users to create profiles, post updates, like and comment on posts, and interact with friends, built using React.js and Firebase.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: facebook,
    source_code_link: "https://facebook-clone-cecad.web.app/",
  },
];

export {services, technologies, experiences, testimonials, projects};
