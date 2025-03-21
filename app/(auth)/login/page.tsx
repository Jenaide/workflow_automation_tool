import { LoginForm } from "@/components/form/LoginForm";
import { ModeToggle } from "@/components/theme-toggler";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="fixed top-2 right-2"><ModeToggle /></div>
            <LoginForm />
        </div>
    )
}