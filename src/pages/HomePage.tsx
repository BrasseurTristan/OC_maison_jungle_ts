import Footer from '../components/layout/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'
import type { AddToCart } from '../types/CartItem'

interface HomePageProps {
	addToCart: AddToCart
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