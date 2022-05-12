export const fullVersionLink = "https://resume.tawanchai.com"
export const sourceLink = "https://github.com/tawanchaiii/resume"
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"

export const introData = {
  name: "Tawanchai Chatkul na ayuttaya",
  nickname: "Champ",
  phone: "",
  email: "tawanchai.ch@ku.th",
  github: "tawanchaiii",
  linkedin: "tawanchaiii",
  location: "Bangkok, Thailand",
  website: "blog.tawanchai.com",
}

export const technologies = [
  {
    section: "Languages:",
    details:
      "C, C++, Python, Go, SQL, Shell script, Assembly (On RISC-V Architecture)",
  },
  {
    section: "Frameworks:",
    details:
      "ReactJS, NextJS, Svelte, Docusaurus 2, Bootstrap",
  },
  {
    section: "Tools:",
    details:
      "Git, Docker, Zsh, Arduino, Markdown",
  },
  {
    section: "Other:",
    details:
      "Firebase, Vercel, Netlify, DigitalOcean, CloudFlare, MongoDB atlas",
  },
]

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: "Kasetsart University, TH. 2020-2023 (GPA 3.65 - 4 Semester)",
  },
]

export const workExperiences = [
  {
    position: "Teaching assistant",
    company: "Massive Information and Knowledge Engineering Laboratory",
    url: "https://mike.cpe.ku.ac.th/",
    years: ["Jun 2021","Oct 2021"],
    details: [
      "I'm TA in 01204111 Computer & Programming course for first-year computer engineering student, Kasetsart University.",
    ],
  },
  {
    position: "Internship Student",
    company: "Thailand National Metal and Materials Technology Center",
    url: "https://www.mtec.or.th/",
    years: ["May 2021","Jun 2021"],
    details: [
      "Optimized applications to preferred nanocrystalline configurations in ternary and multicomponent alloys.",
      "Optimized the microstructures building time to be 90% faster than existing source code.",
      "Optimized source code to compile on Cython libraries.",
    ],
  },
]

export const projects = [
  {
    name: "Face recognition to unlock the door",
    details:[
      "This is the security door lock system. Users must be authorized by the system to unlock the system. The system will authorize from the user's face. and then compare it with the existingdatabase.This project used OpenCV to make face recognition system, Tkinter for frontend, and PyUSB to communicate between hardware and frontend.",
    ],
    url: "github.com/stamp465/Practicum",
  },
  {
    name: "RainDeer tutoring school’s registration system",
    details:[
      "The system was created to reduce the use of paper in registration. And makes managing a list of students more convenient. This project made me learn to use the database system with MongoDB atlas and web design.",
    ],
  },
  {
    name: "Prommanusorn school’s enrollment system",
    details:[
      "The system was created as a replacement for the existing enrollment system. There are many problems, such as the inability to accommodate large numbers of people, the inability of students to cancel their enrollment. This project made me learn to use new web frameworks such as React, firebase (Database), and Netlify (Hosting).",
    ],
  },
  {
    name: "Prommanusorn school’s recruitment system",
    details:[
      "The system was created to reduce the errors in entering the computer information system in the recruitment of students annually. By the system to read information from the applicant's ID card And bring that readable data into the database and the system will automatically arrange the examination room and exam seat number for the applicants. This project made me learn to use Tkinter libraries in Python and SQLite.",
    ],
  },
]
export const references = [
  {
    name: "Asst. Prof. Dr. Chaiporn Jaikaeo",
    details: [
      "Intelligent Wireless Network Group",
      "Department of Computer Engineering",
      "Kasetsart University",
      "Bangkok, Thailand",
    ],
    url: "cpe.ku.ac.th/~cpj/",
  },
  {
    name: "Supornchai Tiamtongorn",
    details: [  
      "Computer Teacher / Computer Technician",
      "Department of Science and Technology, Prommanusorn Phetchaburi School",
      "Phetchaburi, Thailand",
    ]
  },
]