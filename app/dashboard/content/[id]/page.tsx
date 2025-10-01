import ContentDetailsPage from "@/components/ContentDetails";
import { Textarea } from "@/components/ui/textarea";
import {
    getPostContent,
    getRepurposedContent,
} from "@/utils/actions/post.actions";
import React from "react";
type ContentPageProps = {
    params: Promise<{ id: string }>;
};

const DetailsPage = async ({ params }: ContentPageProps) => {
    const { id } = await params;
    const data = await getRepurposedContent(id);
    const postDetails = await getPostContent(id);
    const post = postDetails.post.slice(0, 3000);

    return (
        <main>
            <ContentDetailsPage contentData={data} />
            <div className="my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-xl font-semibold text-[#231645] mb-1">
                                Original Blog Post
                            </h2>
                            <p className="text-xs text-gray-500">
                                Source content used to generate the content pack
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded border border-gray-100">
                        <p className="text-gray-500 text-sm italic leading-relaxed">
                            {post}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DetailsPage;
