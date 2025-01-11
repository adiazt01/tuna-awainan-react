
import { type  ComentPost } from "@/type.d"

interface Props{
    coment: ComentPost
}

export const Coment = ({coment}:Props) => {
    return (
        <article className="text-base rounded-lg dark:bg-gray-100 ">
            <footer className="flex items-center mb-2">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-semibold text-gray-600 dark:text-gray-300">
                    {'nombre de usuario'[0]}
                </span>
            </div>
            <div className="ml-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {'nombre de usuario'}
                </h3>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <h3>Fecha: {`${coment.date}`}</h3>
                </div>
            </div>
            </footer>
            <p className="text-gray-800 mt-2 dark:text-gray-400 px-10">
                {coment.content}
            </p>
            <div className="my-4 border-b border-gray-200 dark:border-gray-700" />

        </article>
    )
}