import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    pages: {
                        home: "Home",
                        experience: "Experience",
                        courses: "Courses",
                        academic_background: "Education",
                        skills: "Skills"
                    },
                    home: {
                        computer_engineer: "Computer Engineer"
                    },
                    academic_background: {
                        master: {
                            title: "Master's degree in computer engineering",
                            description: `The studies were carried out at the ESI (University of Castilla-La Mancha), covering a variety of topics such as virtual reality, containerisation, high-performance computing and project management. However, the main emphasis was on quantum computing, a topic explored in the Master's thesis, which received the highest grade.`
                        },
                        degree: {
                            title: "Degree in computer engineering",
                            description: `Studied at the ESI of the University of Castilla-La Mancha. The chosen specialisation was Information Technologies. At this stage, I would like to highlight the achievement of an honours degree in my final degree project: Virtual assistant for onboarding and employee support.`,
                        },
                        high_school: {
                            title: "High School",
                            description: "I studied at I.E.S. Estados del Duque. I had always liked the subjects of mathematics, physics and computer science. For this reason, I became very curious about the world of information technologies and I decided to go deeper into this world."
                        }
                    },
                    skills: {
                        programming: {
                            title: "Programming"
                        },
                        os: {
                            title: "Operating Systems"
                        },
                        languages: {
                            title: "Languages",
                            es: "Spanish",
                            en: "English"
                        }
                    }
                }
            },

            es: {
                translation: {
                    pages: {
                        home: "Inicio",
                        experience: "Experiencia",
                        courses: "Cursos",
                        academic_background: "Formación",
                        skills: "Habilidades"
                    },
                    home: {
                        computer_engineer: "Ingeniero Informático"
                    },

                    academic_background: {
                        master: {
                            title: "Máster en Ingeniería informática",
                            description: `Los estudios fueron cursados en la Escuela Superior de Informática de la Universidad de Castilla-La Mancha, abordando una variedad de temas como realidad virtual, contenerización, computación de altas prestaciones y gestión de proyectos. Sin embargo, el énfasis principal se centró en la computación cuántica, tema explorado en el trabajo de fin de máster (TFM), que recibió la máxima calificación.`
                        },
                        degree: {
                            title: "Grado en Ingeniería informática",
                            description: `Cursado en la Escuela Superior de Informática de la Universidad de Castilla-La Mancha. La intensificación escogida fue la de Tecnologías de la Información. En esta etapa, me gustaría destacar la obtención de la matrícula de honor en mi trabajo fin de grado (TFG): Asistente virtual para onboarding y soporte a empleados.`
                        },
                        high_school: {
                            title: "Bachillerato",
                            description: `Cursado en I.E.S Estados del Duque. Siempre me habían gustado mucho las asignaturas de matemáticas, física e informática. Por este motivo, me entró mucha curiosidad por el mundo de las tecnologías de información y decidí adentrarme más en ese mundo.`
                        }
                    },
                    skills: {
                        programming: {
                            title: "Programación"
                        },
                        os: {
                            title: "Sistemas operativos"
                        },
                        languages: {
                            title: "Lenguajes",
                            es: "Español",
                            en: "Inglés"
                        }


                    }
                }
            }
        }
    });

export default i18n;