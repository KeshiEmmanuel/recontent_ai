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

export const updateRelatedPostContent = async (
    postId: string,
    content: any
) => {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
        .from("repurposed_contents")
        .insert({
            post_id: postId,
            user_id: user?.id,
            linkedin_content: content.linkedin,
            instagram_captions: content.instagram,
            facebook_content: content.facebook,
            twitter_threads: content.twitter,
            quotes: content.quotes,
            email: content.email,
        })
        .select();

    if (error || !data) throw new Error(error?.message || "Failed to update ");

    return data[0];
};

export const getRepurposedContent = async (postId: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("repurposed_contents")
        .select()
        .eq("post_id", postId);

    if (error) {
        throw new Error("Cant find content pack");
    }
    return data[0];
};

export const getPostContent = async (id: string) => {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("blog_posts")
        .select()
        .eq("id", id);

    if (error || !data)
        throw new Error(error?.message || "Failed to create a companion");

    return data[0];
};
