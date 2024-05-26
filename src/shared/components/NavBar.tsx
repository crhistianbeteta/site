
import { DarkThemeToggle, Navbar as FlowBiteNavbar } from "flowbite-react";
import { Link as WouterLink, useLocation } from "wouter"
import logo from "../../assets/logo.png";
import { routes } from "../../routes/routes";
import LanguageDropdown from "./LanguageDropdown";

export function Navbar({ translate }: { translate: (key: string) => string }) {


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


            <div className="flex md:order-2 flex-1 justify-end">
                <FlowBiteNavbar.Toggle className="p-2.5" />

                <LanguageDropdown  ></LanguageDropdown>

                <DarkThemeToggle />
            </div>


            <FlowBiteNavbar.Collapse>
                <WouterLink href="/" >
                    <FlowBiteNavbar.Link active={location === routes.HOME}>
                        {translate('pages.home')}
                    </FlowBiteNavbar.Link>
                </WouterLink>

                <WouterLink href="/professional-experience">
                    <FlowBiteNavbar.Link active={location === routes.PROFESSIONAL_EXPERIENCE}>
                        {translate('pages.experience')}
                    </FlowBiteNavbar.Link>
                </WouterLink>
                <WouterLink href="/courses">
                    <FlowBiteNavbar.Link active={location === routes.COURSES}>
                        {translate('pages.courses')}
                    </FlowBiteNavbar.Link>
                </WouterLink>

                <WouterLink href="/academic-background">
                    <FlowBiteNavbar.Link active={location === routes.ACADEMIC_BACKGROUND}>
                        {translate('pages.academic_background')}
                    </FlowBiteNavbar.Link>
                </WouterLink>

                <WouterLink href="/skills" >
                    <FlowBiteNavbar.Link active={location === routes.SKILLS}>
                        {translate('pages.skills')}
                    </FlowBiteNavbar.Link>
                </WouterLink>


            </FlowBiteNavbar.Collapse>
        </FlowBiteNavbar>

    );
}