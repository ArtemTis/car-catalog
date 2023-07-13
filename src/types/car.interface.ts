export interface ICar {
    id: number,
    name: string,
    image: string,
    price: number | string
}

export interface TypeData extends Omit<ICar, 'id'> {}