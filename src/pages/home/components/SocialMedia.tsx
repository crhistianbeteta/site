import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

export default function SocialMedia() {
    return (
        <section className='flex gap-x-9' >
            <a href="mailto:crhistianbetetanavarro@gmail.com" target="_blank" rel="noopener">
                <MdOutlineMailOutline size={"4em"} className="font-light dark:text-gray-400"></MdOutlineMailOutline>

            </a>
            <a href="https://www.linkedin.com/in/crhistian-beteta-navarro" target="_blank" rel="noopener">
                <FaLinkedin size={"4em"} className="font-light dark:text-gray-400" ></FaLinkedin>

            </a>
            <a href="https://twitter.com/Crhistian1797" target="_blank" rel="noopener">
                <FaTwitterSquare size={"4em"} className="font-light dark:text-gray-400" ></FaTwitterSquare>

            </a>


        </section>
    )
}
