export interface IProduct{
    id?: number | undefined ,
    name: string,
    priece: number,
    urlImage?: string,
    sizes?: string[],
    description: string,
    colors?: string[],
    category: string,
}

