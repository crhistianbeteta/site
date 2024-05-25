import { Card } from "flowbite-react/components/Card"
import { professionalExperience } from "../../data/data"
import { Badge } from "flowbite-react";
import { calculateTime } from "../../shared/date-utils/DateUtils";

export default function ProfessonalExperiencePage() {
    return (
        <section className="flex flex-col gap-2 p-2 items-center">

            {professionalExperience.map(p => (
                <Card className="w-2/3 p-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {p.companyName}
                    </h5>
                    <p className="font-thin text-gray-700 dark:text-gray-400">
                        {calculateTime(p.beginDate, p.endDate, 'es')}
                    </p>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        {p.jobTitle}
                    </p>


                    <div className="flex flex-wrap gap-2">

                        {p.technologies.map(t => (

                            <Badge size={"sm"}>{t}</Badge>
                        ))}

                    </div>

                </Card>
            )
            )}
        </section>
    )
}
