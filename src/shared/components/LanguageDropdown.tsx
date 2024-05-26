import { Dropdown } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

function LanguageDropdown() {

    const [, i18n] = useTranslation();

    return (
        <>
            <Dropdown className="p-2.5" label={
                <GrLanguage className="ext-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 mx-1"></GrLanguage>} inline arrowIcon={false} >
                <Dropdown.Item onClick={() => { i18n.changeLanguage('en') }}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => { i18n.changeLanguage('es') }}>ES</Dropdown.Item>
            </Dropdown>
        </>
    );
}

export default LanguageDropdown