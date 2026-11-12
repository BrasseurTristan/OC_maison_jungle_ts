import type { Plant } from "./Plant";

export interface CartItem extends Pick<Plant, 'name' | 'price'> {
    amount: number
};

export type AddToCart = (plant: Pick<Plant, 'name' | 'price'>) => void