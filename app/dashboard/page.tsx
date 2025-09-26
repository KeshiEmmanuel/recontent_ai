import InputArea from "@/components/InputArea";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import UsageBar from "@/components/UsageMeter";
import React from "react";

const Home = async () => {
    const supabase = await createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error || !user) {
        redirect("/login");
    }
    return (
        <main className="max-w-[850px] mx-auto font-sans pt-30">
            <div className="mb-12">
                <h1 className=" text-3xl font-bold">
                    Welcome back,
                    <span className="text-[#231645]">
                        {user.user_metadata?.full_name || "User"}!
                    </span>
                </h1>
                <p className="text-sm">Ready to repurpose some content?</p>
            </div>
            <UsageBar
                spaceHoriziontal="my-4"
                userData={{ maxUsage: 5, usageCount: 2 }}
            />
            <InputArea />
        </main>
    );
};

export default Home;
