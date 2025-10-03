"use client";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

interface Props {
    children: React.ReactNode;
}

const SignOutButton = ({ children }: Props) => {
    const supabase = createClient();
    const router = useRouter();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
        router.push("/");
    };
    return (
        <Button className="button button-primary" onClick={handleSignOut}>
            {children}
        </Button>
    );
};

export default SignOutButton;
