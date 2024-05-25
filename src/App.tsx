import { Flowbite } from "flowbite-react";
import { Navbar } from "./shared/components/NavBar";
import HomePage from "./pages/home/HomePage";
import { Route as WouterRoute } from "wouter";
import ProfessonalExperiencePage from "./pages/professional-experience/ProfessionalExperiencePage";
import CoursesPage from "./pages/courses/CoursesPage";
import AcademicBackgroundPage from "./pages/academic-background/AcademicBackgroundPage";
import SkillsPage from "./pages/skills/SkillsPage";
import { routes } from "./routes/routes";
export default function App() {
  return (
    <Flowbite>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 h-full	">

        <Navbar></Navbar>

        <WouterRoute path={routes.HOME} component={HomePage} />
        <WouterRoute path={routes.PROFESSIONAL_EXPERIENCE} component={ProfessonalExperiencePage} />
        <WouterRoute path={routes.COURSES} component={CoursesPage} />
        <WouterRoute path={routes.ACADEMIC_BACKGROUND} component={AcademicBackgroundPage} />
        <WouterRoute path={routes.SKILLS} component={SkillsPage} />
      </div>
    </Flowbite>

  );
}



