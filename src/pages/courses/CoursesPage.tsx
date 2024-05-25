import { Badge, Card } from "flowbite-react"
import { courses } from "../../data/data"
export default function CoursesPage() {
    return (
        <section className="flex flex-col gap-2 p-2 items-center">

            {courses.map(c => (
                <Card className="w-2/3 p-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {c.name}
                    </h5>
                    <div className="flex flex-wrap gap-2">

                        {c.skillsLearned.map(skill => (

                            <Badge size={"sm"}>{skill}</Badge>
                        ))}

                    </div>

                </Card>
            )
            )}

        </section>
    )
}
