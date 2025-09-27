"use client";
import { useLoadingStore } from "@/app/store/loader";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import LoadingModal from "./GeneratingModal";
import { useRef } from "react";
import { createPost } from "@/utils/actions/post.actions";

const InputArea = () => {
    const loading = useLoadingStore((state) => state.load.loading);
    const PostRef = useRef<HTMLTextAreaElement>(null);
    const setLoading = useLoadingStore((state) => state.setLoading);

    async function handleCreatePost() {
        if (PostRef.current) {
            console.log(PostRef.current.value);
            const value = PostRef.current.value;
            setLoading(true);
            try {
                const data = await createPost(value);
                console.log(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
                PostRef.current.value = "";
            }
        }
    }
    return (
        <section className="max-w-[850px] mx-auto">
            <h1 className="pb-2 font-medium">Paste your Blog post or URL</h1>
            <Textarea
                ref={PostRef}
                className="h-[120px] hover:shadow-lg"
                placeholder="Paste your blog post content here...or enter the URL"
            />
            <div className="mt-4">
                <Button
                    className="button button-primary"
                    onClick={handleCreatePost}
                >
                    Repurpose Content
                </Button>
            </div>
            {loading && (
                <LoadingModal
                    isOpen={loading}
                    onClose={() => setLoading(false)}
                />
            )}
        </section>
    );
};

export default InputArea;
