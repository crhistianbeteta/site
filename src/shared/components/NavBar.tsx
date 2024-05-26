
import { DarkThemeToggle, Navbar as FlowBiteNavbar } from "flowbite-react";
import { Link as WouterLink, useLocation } from "wouter"
import logo from "../../assets/logo.png";
import { routes } from "../../routes/routes";

export function Navbar() {


    const [location] = useLocation();

    return (
        <FlowBiteNavbar fluid  >

            <div className="flex-1">
                <WouterLink href="/">
                    <FlowBiteNavbar.Brand>
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Crhistian Beteta Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Crhistian Beteta</span>
                    </FlowBiteNavbar.Brand>
                </WouterLink>
            </div>


            <div className="flex md:order-2 flex-1  justify-end">
                <FlowBiteNavbar.Toggle />
                <DarkThemeToggle />
            </div>


            <FlowBiteNavbar.Collapse>
                <WouterLink href="/" >
                    <FlowBiteNavbar.Link active={location === routes.HOME}>
                        Inicio
                    </FlowBiteNavbar.Link>
                </WouterLink>

                <WouterLink href="/professional-experience">
                    <FlowBiteNavbar.Link active={location === routes.PROFESSIONAL_EXPERIENCE}>
                        Experiencia
                    </FlowBiteNavbar.Link>
                </WouterLink>
                <WouterLink href="/courses">
                    <FlowBiteNavbar.Link active={location === routes.COURSES}>
                        Cursos
                    </FlowBiteNavbar.Link>
                </WouterLink>

                <WouterLink href="/academic-background">
                    <FlowBiteNavbar.Link active={location === routes.ACADEMIC_BACKGROUND}>
                        Formación
                    </FlowBiteNavbar.Link>
                </WouterLink>

                <WouterLink href="/skills" >
                    <FlowBiteNavbar.Link active={location === routes.SKILLS}>
                        Habilidades
                    </FlowBiteNavbar.Link>
                </WouterLink>

            </FlowBiteNavbar.Collapse>
        </FlowBiteNavbar>

    );
}