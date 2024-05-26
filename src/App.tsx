import { Flowbite } from "flowbite-react";
import { Navbar } from "./shared/components/NavBar";
import HomePage from "./pages/home/HomePage";
import { Redirect, Switch, Route as WouterRoute } from "wouter";
import ProfessionalExperiencePage from "./pages/professional-experience/ProfessionalExperiencePage";
import CoursesPage from "./pages/courses/CoursesPage";
import AcademicBackgroundPage from "./pages/academic-background/AcademicBackgroundPage";
import SkillsPage from "./pages/skills/SkillsPage";
import { routes } from "./routes/routes";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export default function App() {

  const [t, i18n] = useTranslation();
  useEffect(() => {

    const lang = navigator.language;
    i18n.changeLanguage(lang);
    //setLocation(location);
  }, [])


  return (


    <Flowbite>

      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 h-full	">

        <Navbar translate={t} ></Navbar>
        <Switch>


          <WouterRoute path={routes.HOME}>
            <HomePage translate={t}></HomePage>
          </WouterRoute>
          <WouterRoute path={routes.PROFESSIONAL_EXPERIENCE}
          >
            <ProfessionalExperiencePage locale={i18n.language}></ProfessionalExperiencePage>
          </WouterRoute>

          <WouterRoute path={routes.COURSES} component={CoursesPage} />

          <WouterRoute path={routes.ACADEMIC_BACKGROUND}>
            <AcademicBackgroundPage translate={t}></AcademicBackgroundPage>
          </WouterRoute>

          <WouterRoute path={routes.SKILLS} >
            <SkillsPage translate={t}></SkillsPage>
          </WouterRoute>

          <WouterRoute>
            {() => <Redirect to={routes.HOME} />}
          </WouterRoute>
        </Switch>
      </div>
    </Flowbite >

  );
}



