import { Button } from "../ui/button";
import { CreditCard, LogOut, SearchIcon, Settings, User2 } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

const Search = () => {
    return (
        <>
            <li className="flex md:hidden">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon" variant="outline">
                            <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Search</DialogTitle>
                            <DialogDescription className="flex flex-col gap-2 pt-2">
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="placeholder:italic"
                                />
                                <Button>Search</Button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </li>
            <li className="hidden md:flex">
                <Input
                    type="search"
                    placeholder="Search..."
                    className="placeholder:italic min-w-[300px]"
                />
            </li>
        </>
    );
};

export default Search;
