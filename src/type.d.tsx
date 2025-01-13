
//definimos los tipos para los especimenes
export type Especimen = {
    id: string,
    name: string,
    name_scientific: string,
    img: string,
    description: string
}


export type EspecimenId = Pick<Especimen,'id'>
export type EspecimenName = Pick<Especimen,'name'>
export type EspecimenNamePsientific = Pick<Especimen,'name_scientific'>
export type EspecimenDescription = Pick<Especimen,'description'>
export type EspecimenImg = Pick<Especimen,'img'>

export type ListOfEspecimens = Especimen[]

//definir los tipos de datos para las novedades 

export type Post = {
    id: string,
    title: string,
    content: string, 
    img: string, 
    tag: string
}

export type PostId = Pick<Post,'id'>
export type PostTitle = Pick<Post,'title'>
export type PostText = Pick<Post,'content'>
export type PostImg = Pick<Post,'img'>
export type PostTag = Pick<Post,'tag'>

export type ListOfPosts = Post[]

//comentarios

export type ComentPost = {
    id: string,
    content: string,
    postId: string,
    userId: string,
    date: Date,
}

export type ComentsPosts = ComentPost[]

