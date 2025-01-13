import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Image } from "lucide-react"
import { Link } from "@tanstack/react-router"


import React from "react"
import { Especimen } from "@/type.d"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  


export const CardEspecimen = ({id, name, name_scientific, img, description}:Especimen) => {
    return (
        <>


        <div>

            <button className="flex m-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                

                <Link type="button" to={`/aquarium/$letter/$especimen_id`} params={{ letter:name[0], especimen_id: id }}
                >

                    <div className="flex flex-col w-[450px] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full ml-3 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src='https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1450&h=816' alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {name[0].toUpperCase() + name.substring(1,name.length)}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {name_scientific[0].toUpperCase() + name_scientific.substring(1,name_scientific.length)}
                            </p>
                            <span className="text-xs">Bolivar, Venezuela</span>
                        </div>
                    </div>
                       
                </Link>

            </button>
        </div>
            

        </>

    )
}
