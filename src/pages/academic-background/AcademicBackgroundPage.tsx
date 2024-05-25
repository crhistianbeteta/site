import { Timeline } from "flowbite-react";
import { academicBackground } from "../../data/data";

export default function
    AcademicBackgroundPage() {
    return (
        <section className="p-2 flex justify-center">
            <Timeline className="w-2/3">

                {academicBackground.map(item => (
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>{item.beginYear}-{item.endYear}</Timeline.Time>
                            <Timeline.Title>{item.title}</Timeline.Title>
                            <Timeline.Body className="text-justify">
                                {item.description}
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}


            </Timeline>
        </section>

    );
}
