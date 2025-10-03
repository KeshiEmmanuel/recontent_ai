import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import SubscriptionSetting from "@/components/SubscriptionSetting";
import SignOutButton from "@/components/SignOutButton";
const ProfilePage = async () => {
    const supabase = await createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    return (
        <main className="mt-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={user?.user_metadata.avatar_url} />
                        <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-lg font-bold">
                            {user?.user_metadata.full_name}
                        </h1>
                        <p className="text-sm">{user?.email}</p>
                    </div>
                </div>
                <SignOutButton>Sign out</SignOutButton>
            </div>
            <SubscriptionSetting />
        </main>
    );
};

export default ProfilePage;
