import React from "react";

interface Props {
    username: string;
    created_at: string
    text: string
}

const CommentItem: React.FC<Props> = ({ username, created_at, text }) => {
    return(
    <article className="text-base rounded-lg bg-gray-100 ">
        <footer className="flex items-center mb-2">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full ml-4 mt-4">
            <span className="font-semibold text-gray-600">
                {username[0].toUpperCase()}
            </span>
        </div>
        <div className="ml-3 mt-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                {username}
            </h3>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <time dateTime={created_at}>
                {new Date(created_at).toLocaleString()}
            </time>
            </div>
        </div>
        </footer>
        <p className="text-gray-800 mt-2 dark:text-gray-400 ml-5">
            {text}
        </p>
        <div className="my-4 border-b border-gray-200 dark:border-gray-700" />
    </article>        

    );
};

export default CommentItem