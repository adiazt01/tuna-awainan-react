
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

//definir los tipos de datos para las novedades 

export type Post = {
    id: string,
    title: string,
    text: string, 
    imgFile: string, 
    tag: string
}

export type PostId = Pick<Post,'id'>
export type PostTitle = Pick<Post,'title'>
export type PostText = Pick<Post,'text'>
export type PostImg = Pick<Post,'imgFile'>
export type PostTag = Pick<Post,'tag'>

export type ListOfPosts = Post[]