import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './ui/PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import type { PlantCategory, CategoriesOption } from '../types/Plant'
import type { AddToCart } from '../types/CartItem'

interface ShoppingListProps {
	addToCart: AddToCart
}

function ShoppingList({ addToCart }: ShoppingListProps) {
	const [activeCategory, setActiveCategory] = useState<CategoriesOption>('')
	const categories = plantList.reduce<PlantCategory[]>(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	const handleAddToCart = (name: string, price: number) => {
		addToCart({ name, price })
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<li key={id}>
							<PlantItem
								id={id}
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
								onAddToCart={() => handleAddToCart(name, price)}
							/>
						</li>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
