import project1 from "../assets/projects/pharmacy-management-system.webp";
import project2 from "../assets/projects/mobile-app.webp";
import project3 from "../assets/projects/portfolio.webp";
import project4 from "../assets/projects/mohsin-steel-fabricators.webp";

export const HERO_CONTENT = `I’m a passionate front-end developer with 1 year of hands-on experience building responsive and dynamic websites. I specialize in HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and also work with Node.js and WordPress. I love crafting modern, user-focused web interfaces that not only look great but also perform efficiently. My goal is to keep growing, take on exciting challenges, and deliver top-notch digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated front-end developer with a strong focus on building clean, responsive, and engaging web applications. Over the past year, I’ve gained experience working with modern technologies including React, Tailwind CSS, Bootstrap, JavaScript, HTML, and CSS. I’ve also explored backend basics using Node.js and developed dynamic websites with WordPress. My passion for development comes from a desire to bring ideas to life and continuously improve my skills. I enjoy taking on new challenges, learning emerging tools, and delivering results that exceed expectations.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Pharmacy Management System",
    image: project1,
    description:
      "A fully functional static desktop application for Pharmacy Management, designed to streamline daily operations. It includes features like product listing with pricing, customer receipt generation, sales record management, data fetching, and bill printing. Ideal for small to medium-sized pharmacies requiring an offline solution.",
    technologies: ["Python", "Tkinter", "OOP", "SqlLite"],
    code: "https://github.com/engineer-mohsin/Pharmacy-Management-System/",
    live: "https://1024terabox.com/s/1F7DtjOHJb7n_SZULbRzEhQ",
  },
  {
    title: "Tailor Mobile App",
    image: project2,
    description:
      "A mobile application built with Flutter for tailoring businesses to manage clients, measurements, and order tracking efficiently. The app allows tailors to save customer details, record precise measurements, and monitor order progress with specific delivery dates and times. Designed for both Android and iOS platforms, it uses a local database for offline access and fast performance.",
    technologies: ["Flutter", "Dart", "Android", "iOS"],
    code: "https://github.com/engineer-mohsin/Tailor-App",
    live: "https://1024terabox.com/s/1c8NVEg6J1BDrZkMICVlgFw",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A modern and responsive personal portfolio website built to highlight my web development projects, technical skills, and contact details. Designed with smooth animations and a clean UI using React, Tailwind CSS, and Framer Motion.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    code: "https://github.com/engineer-mohsin/Engr-Mohsin-Portfolio",
    live: "https://engr-mohsin-portfolio.netlify.app",
  },
  {
    title: "Steel Business Website",
    image: project4,
    description:
      "A responsive and professionally designed business website developed to showcase the services, projects, and contact information of Mohsin Steel Fabricators. Built using modern web technologies for a clean user interface and smooth experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    code: "https://github.com/engineer-mohsin/Mohsin-Steel-Fabricators",
    live: "https://mohsin-steel-fabricators.netlify.app",
  },
];

export const CONTACT = {
  address: "Peshawar Pakistan",
  phoneNo: "+92 300 1358167 ",
  email: "engineer.mohsin.dev@gmail.com",
};
