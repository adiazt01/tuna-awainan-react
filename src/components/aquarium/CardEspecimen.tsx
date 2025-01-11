import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Image } from "lucide-react"

import React from "react"
import { Especimen } from "@/type.d"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  


export const CardEspecimen = ({id, name, namePsientific, img, description}:Especimen) => {
    return (
        <>
            <a href='#' className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {namePsientific}
                    </p>
                    <span className="text-xs">Bolivar, Venezuela</span>
                </div>
            </a>

        </>

    )
}
