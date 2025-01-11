
//definimos los tipos para los especimenes
export type Especimen = {
    id: string,
    name: string,
    namePsientific: string,
    img: string,
    description: string
}


export type EspecimenId = Pick<Especimen,'id'>
export type EspecimenName = Pick<Especimen,'name'>
export type EspecimenNamePsientific = Pick<Especimen,'namePsientific'>
export type EspecimenDescription = Pick<Especimen,'description'>
export type EspecimenImg = Pick<Especimen,'img'>

export type ListOfEspecimens = Especimen[]