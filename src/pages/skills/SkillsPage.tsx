import { Card } from "flowbite-react"
import { skills } from "../../data/data"
import { List } from "flowbite-react";

export default function SkillsPage() {
    return (
        <section className="flex flex-col gap-2 p-2 items-center">

            {skills.map(skill => (
                <Card href="#" className="w-2/3 p-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {skill.title}
                    </h5>
                    <List unstyled>
                        {skill.items.map(item => (<List.Item >{item.name}</List.Item>))}

                    </List>

                </Card>
            )
            )}
        </section>
    )
}
