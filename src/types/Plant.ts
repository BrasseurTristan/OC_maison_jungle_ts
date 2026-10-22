export type PlantCategory = 'classique' | 'extérieur' | 'plante grasse'
export type CareLevel = 1 | 2 | 3


export interface Plant {
    name: string
    category: PlantCategory
    id: string
    light: CareLevel
    water: CareLevel
    cover: string
    price: number
    description: string
};

