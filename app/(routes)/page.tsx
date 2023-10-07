import getBillboard from '@/actions/get-billboard';
import Container from '@/components/ui/container';
import React from 'react'
import Billboard from '@/components/ui/billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';
// made (routes) so it doesnt affect the URL

export const revalidate = 0; // so isnt cached accidently

// this will load our product also billboard in our landing page ecommerce
const HomePage = async () => {
	const products = await getProducts({ isFeatured: true })
	const billboard = await getBillboard("5d1166a5-8475-446f-91bc-0ce4d0378b67");

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
			</div>
			<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
				<ProductList title="Featured Products" items={products} />
			</div>
		</Container>
	)
}

export default HomePage;