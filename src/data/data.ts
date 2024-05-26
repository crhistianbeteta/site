import { now } from "../shared/date-utils/DateUtils";

export const skills = [
    {
        title: "skills.programming.title",
        items: [
            { name: "Java" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "Python" },
            { name: "C#" },
            { name: "C" },
        ],
    },
    {
        title: "Office",
        items: [
            { name: "Word" },
            { name: "Excel" },
            { name: "Powerpoint" },
            { name: "Access" },
        ],
    },

    {
        title: "skills.os.title",
        items: [
            { name: "Windows" },
            { name: "Linux" },
            { name: "Mac" },
        ],
    },

    {
        title: "skills.languages.title",
        items: [{ name: "skills.languages.es" }, { name: "skills.languages.en" }],
    },

    {
        title: "FrontEnd",
        items: [{ name: "Angular" }, { name: "React" }, { name: "Oracle JET" }],
    },

    {
        title: "Backend",
        items: [{ name: "Spring Boot" }, { name: "Node JS" }, { name: "Nest JS" }],
    },
];

export const courses = [
    {
        name: "Master Javascript",
        skillsLearned: [
            "JavaScript",
            "jQuery",
            "TypeScript",
            "Angular",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
    },
    {
        name: "Curso Unity 2D",
        skillsLearned: ["Unity", "C#"],
    },
    {
        name: "Curso Diseño WEB",
        skillsLearned: ["HTML5", "CSS", "JavaScript", "jQuery", "Node.js"],
    },
    {
        name: "React: De cero a experto ( Hooks y MERN )",
        skillsLearned: ["HTML5", "CSS", "JavaScript", "React", "Hooks"],
    },
    {
        name: "Introducción al desarrollo backend con Node.js y Express",
        skillsLearned: ["Node.js", "Express"],
    },
    {
        name: "Angular: De cero a experto",
        skillsLearned: ["Node.js", "Express"],
    },
    {
        name: "Angular Avanzado:  Lleva tus bases al siguiente nivel - MEAN",
        skillsLearned: ["Node.js", "Express"],
    },
    {
        name: "Guía completa JUnit y Mockito incluye Spring Boot Test 2022",
        skillsLearned: ["Node.js", "Express"],
    },
];

export const academicBackground = [
    {
        title: "academic_background.master.title",
        description: "academic_background.master.description",
        beginYear: 2020,
        endYear: 2022,
    },

    {
        title: "academic_background.degree.title",
        description: "academic_background.master.description",
        beginYear: 2015,
        endYear: 2020,
    },
    {
        title: "academic_background.high_school.title",
        description: "academic_background.high_school.description",
        beginYear: 2013,
        endYear: 2015,
    },
];

export const professionalExperience = [
    {
        companyName: "Docpath",
        beginDate: "2021-11-01",
        endDate: now(),
        location: "Ciudad Real",
        jobTitle: "Full Stack Developer",
        technologies: [
            "Java",
            "Spring Boot",
            "NodeJS",
            "Angular",
            "MySQL",
            "SQL Server",
        ],
    },
    {
        companyName: "Alcorce Telecomunicaciones",
        beginDate: "2021-03-01",
        endDate: "2021-11-01",
        location: "Ciudad Real",
        jobTitle: "Full Stack Developer",
        technologies: ["Java", "Spring Boot", "Angular", "Microservicios", "MongoDB"],
    },
    {
        companyName: "FK Interactive",
        beginDate: "2020-09-01",
        endDate: "2021-02-28",
        location: "Ciudad Real",
        jobTitle: "Full Stack Developer",
        technologies: ["NodeJS", "NestJS", "Angular", "PostgreSQL", "AWS"],
    },
    {
        companyName: "Avanttic",
        beginDate: "2020-02-01",
        endDate: "2020-07-31",
        location: "Madrid",
        jobTitle: "Developer",
        technologies: [
            "NodeJS",
            "Express",
            "Oracle Jet",
            "MongoDB",
            "Oracle Digital Assistant",
            "Amazon Lex",
            "Google Dialogflow",
        ],
    },
];
