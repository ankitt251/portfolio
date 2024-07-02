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
  meta,
  starbucks,
  bosch,
  zensar,
  tesla,
  shopify,
  carrent,
  realestate,
  paymentgate,
  qtrip,
  jobit,
  tripguide,
  threejs,
  sparkfound,
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
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Volleyball Player",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Trainee",
    company_name: "Bosch Ltd.",
    icon: bosch,
    iconBg: "#383E56",
    date: "Feb 2023 - March 2023",
    points: [
      "Developed PLC (Programmable Logic Controller) programs for a brushing unit, focusing on automation and efficiency improvements in industrial processes.",
      "Collaborated with a multidisciplinary team to understand project requirements and translate them into functional PLC programs.",
      "Conducted testing and troubleshooting of PLC programs to validate functionality and resolve issues promptly.",
      "Integrated sensors and actuators into the PLC system to monitor and control brushing parameters effectively.",
    ],
  },
  {
    title: "Trainee",
    company_name: "Zensar Technologies",
    icon: zensar,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - June 2023",
    points: [
      "Selected as one of 95 trainees out of 295 students across all branches, demonstrating academic excellence and technical aptitude.",
      "Completed rigorous training in SQL, PL/SQL, and Java, gaining proficiency in database management and object-oriented programming.",
      "Collaborated with mentors and peers to complete projects and assignments, applying theoretical knowledge to practical scenarios.",
      "Received commendations for dedication, problem-solving abilities, and contributions to team projects during the training period.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "The Sparks Foundation",
    icon: sparkfound,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Designed and implemented payment gateway integration for web applications, ensuring secure and seamless online transactions.",
      "Collaborated with a team of developers and designers to integrate payment solutions into existing web applications.",
      "Participated in team meetings and discussions to brainstorm ideas and strategies for enhancing user experience and application performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I actively participate in volleyball and had the honor of captaining the team during the 2023-24 season. We achieved notable success, winning the KPL 23 championship and securing the runner-up position in the state-level KSF tournament. These experiences have not only honed my leadership skills but also taught me the importance of teamwork and perseverance.",
    name: "Team Captain",
    designation: "Team Lead",
    company: "KKWIEER",
    image: "/src/assets/testimonials/volleyball.jpg",
  },
  {
    testimonial:
      "As Coding Competition Head at Telekinesis 2023, I organized and led a successful coding competition that attracted participants from diverse backgrounds. Responsibilities included designing competition frameworks, coordinating logistics, and ensuring smooth execution. I fostered a competitive yet collaborative atmosphere, promoting skill development and community engagement in the tech community.",
    name: "Coding Competition Head",
    designation: "COO",
    company: "Telekinesis",
    image: "/src/assets/testimonials/paint.jpg",
  },
  {
    testimonial:
      "I am passionate about playing guitar, painting, and sketches, actively participating in events. In 2024, I was honored to win the ETPL Cricket Competition with Most Runs.!",
    name: "Participant",
    designation: "CTO",
    company: "KKWIEER",
    image: "/src/assets/testimonials/participate.png",
  },
];

const projects = [
  {
    name: "Real Estate Hub",
    description:
      "•	Designed and deployed a comprehensive Full Stack web platform on Render, allowing users to seamlessly buy, sell, and rent properties with detailed listings, images, and contact information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mern",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/ankitt251/mern-estate.git",
  },
  {
    name: "Payment Gateway Form",
    description:
      "Designed and implemented payment gateway integration for web applications, ensuring secure and seamless online transactions.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: paymentgate,
    source_code_link: "https://github.com/ankitt251/PaymentGateway.git",
  },
  {
    name: "Q Trip Guide",
    description:
      "Designed and implemented an interactive, responsive and user friendly interface using HTML, CSS, and JavaScript, providing seamless navigation across various travel destinations. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: qtrip,
    source_code_link: "https://timely-granita-cf73f1.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
