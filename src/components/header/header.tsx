import { ThemeSwitcher } from "../theme-switcher";

import Search from "./search";
import User from "./user";

const Header = () => {
    return (
        <header className="border-b py-4 md:py-6 flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-semibold">
                digital marketplace
            </h1>
            <ul className="flex flex-row gap-2">
                <Search />
                <User />
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </header>
    );
};

export default Header;
