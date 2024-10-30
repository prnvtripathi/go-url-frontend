"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"
import { LuGithub } from "react-icons/lu";

type AuthFormProps = {

    variant: "login" | "register";

};
export default function AuthForm(
    { variant }: AuthFormProps
) {
    return (
        <Card className="mx-auto max-w-sm sm:w-96 border-neutral-800 bg-neutral-950 text-white">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold tracking-tight">
                    {variant === "login" ? "Login" : "Create new account"}
                </CardTitle>
                <CardDescription className="text-neutral-400">
                    {variant === "login" ? "Welcome back! Please login to your account." : "Enter your email below to create your account"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="border-neutral-800 bg-neutral-950 text-white hover:bg-neutral-900">
                            <LuGithub className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                        <Button variant="outline" className="border-neutral-800 bg-neutral-950 text-white hover:bg-neutral-900">
                            <FcGoogle className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-neutral-800" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-neutral-950 px-2 text-neutral-400">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-white">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            className="border-neutral-800 bg-neutral-950 text-white placeholder:text-neutral-400"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password" className="text-white">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="********"
                            className="border-neutral-800 bg-neutral-950 text-white placeholder:text-neutral-400"
                        />
                    </div>
                    <Button className="w-full">
                        Create account
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}