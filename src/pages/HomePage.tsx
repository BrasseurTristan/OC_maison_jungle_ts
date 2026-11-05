import Footer from '../components/layout/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'
import type { Plant } from '../types/Plant'

interface HomePageProps {
	addToCart:  ({name, price}: Pick<Plant,'name' | 'price'>) => void
}

function HomePage({ addToCart }: HomePageProps) {
	return (
		<div>
			<div className='lmj-layout-inner'>
				<ShoppingList addToCart={addToCart} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage 