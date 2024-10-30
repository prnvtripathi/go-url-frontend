import AuthForm from "@/components/auth-form";
import Image from "next/image";

export default function LoginPage() {
    return (
        <>
            <main className="flex min-h-screen bg-black">
                <section className="flex w-full flex-col justify-center lg:w-1/2">
                    <AuthForm variant="register" />
                </section>
                <section className="hidden w-1/2 bg-neutral-900 lg:block">
                    <div className="flex h-full items-center justify-center">
                        <Image src="/images/login.jpg" width={800} height={800} alt="Login" className="h-screen object-cover grayscale" />
                    </div>
                </section>
            </main>
        </>
    )
}