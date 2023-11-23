import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { User } from "lucide-react";

const SignInButton = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("discord");
            }}
        >
            <Button className="flex items-center gap-2">
                <User className="h-[1.2rem] w-[1.2rem]" />
                <span>Sign in</span>
            </Button>
        </form>
    );
};

export default SignInButton;
