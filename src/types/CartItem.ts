import type { Plant } from "./Plant";

export interface CartItem extends Plant {
    amount: number
};

export type AddToCart = (plant: Pick<Plant, 'name' | 'price'>) => void