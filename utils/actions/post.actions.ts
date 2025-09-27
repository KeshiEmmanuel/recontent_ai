"use server";

import { createClient } from "../supabase/server";

export const createPost = async (post_text: string) => {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
        .from("blog_posts")
        .insert({ user_id: user?.id, post: post_text })
        .select();

    if (error || !data)
        throw new Error(error?.message || "Failed to create a companion");

    return data[0];
};
