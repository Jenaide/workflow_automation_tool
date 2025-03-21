import { SignupForm } from "@/components/form/SignupForm";
import { ModeToggle } from "@/components/theme-toggler";

export default function SignupPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="fixed top-2 right-2"><ModeToggle /></div>
            <SignupForm />
        </div>
    )
}