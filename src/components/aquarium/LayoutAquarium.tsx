import { supabase } from "@/lib/supabase"
import { ButtonLetter } from "./ButtonLetter"

const { data , error } = await supabase.from("especimens").select("*")

const letterAllowed = new Set()

data?.forEach((animal) => {
    const firstLetter = animal.name.charAt(0).toUpperCase()
    letterAllowed.add(firstLetter)
})

const aquarium = Array.from(letterAllowed).sort()

export function LayoutAquarium(){
    return (
            <section className='grid grid-cols 2'>
                <div className='flex flex-row pt-8 justify-center flex-wrap gap-x-4 gap-y-4 bg-[#0cc0df]'>
                    {
                        aquarium.map((letter) => (
                            <>
                                <ButtonLetter letter={letter} />
                            </>
                    ))}
                </div>
                <slot />
            </section>
    )
}