import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-screen-xl pt-2">
                <div className="text-slate-600 text-md mt-4 mb-2">
                    {/* i remove the author */}
                </div>
                <div className="flex items-center">
                    <div className="pr-4">
                        <Avatar size="big" name={blog.author.name || "Anonymous"} />
                    </div>
                    <div>
                        <div className="text-xl font-bold mb-1">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="text-slate-500">
                             Blogger and Content Creator
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-screen-xl pt-8">
                    <div className="text-3xl sm:text-5xl font-extrabold mb-4">
                        {blog.title}
                    </div>
                    <div className="text-slate-500">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
