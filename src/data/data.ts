import { now } from "../shared/date-utils/DateUtils";

export const skills = [
    {
        title: "Programación",
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
        title: "Sistemas operativos",
        items: [
            { name: "Windows" },
            { name: "Linux" },
            { name: "Mac" },
        ],
    },

    {
        title: "Idiomas",
        items: [{ name: "Castellano" }, { name: "Ingles" }],
    },

    {
        title: "Frameworks FrontEnd",
        items: [{ name: "Angular" }, { name: "React" }, { name: "Oracle JET" }],
    },

    {
        title: "Frameworks Backend",
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
        title: "Máster en Ingenieria Informática",
        description:
            "Los estudios fueron cursados en la Escuela Superior de Informática de la Universidad de Castilla-La Mancha, abordando una variedad de temas como realidad virtual, contenerización, computación de altas prestaciones y gestión de proyectos. Sin embargo, el énfasis principal se centró en la computación cuántica, tema explorado en el trabajo de fin de máster (TFM), que recibió la máxima calificación.",
        beginYear: 2020,
        endYear: 2022,
    },

    {
        title: "Grado en Ingenieria Informática",
        description:
            "Cursado en la Escuela Superior de Informática de la Universidad de Castilla-La Mancha. La intensificación escogida fue la de Tecnologías de la Información. En esta etapa, me gustaría destacar la obtención de la matrícula de honor en mi trabajo fin de grado (TFG): Asistente virtual para onboarding y soporte a empleados.",
        beginYear: 2015,
        endYear: 2020,
    },
    {
        title: "Bachillerato",
        description:
            "Bachillerato (Científico - Tecnológico) cursado en I.E.S Estados del Duque. Siempre me habían gustado mucho las asignaturas de matemáticas, física e informática. Por este motivo, me entró mucha curiosidad por el mundo de las tecnologías de información y decidí adentrarme más en ese mundo.",
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
        jobTitle: "Becario",
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
