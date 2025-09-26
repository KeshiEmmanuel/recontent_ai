import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const InputArea = () => {
    return (
        <section className="max-w-[850px] mx-auto">
            <h1 className="pb-2 font-medium">Paste your Blog post or URL</h1>
            <Textarea
                className="h-[120px]"
                placeholder="Paste your blog post content here...or enter the URL"
            />
            <div className="mt-4">
                <Button className="button button-primary">
                    Repurpose content
                </Button>
            </div>
        </section>
    );
};

export default InputArea;
