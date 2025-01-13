  
interface Props {
    children: React.ReactNode
}

export const LayoutComunidad = ({children}:Props) => {
    return (
        <div>
            <div className="flex flex-row h-[70px] pt-8 justify-center flex-wrap gap-x-4 gap-y-4 bg-[#0cc0df] text-center">
            </div>

            {children}
        </div>

    )
}