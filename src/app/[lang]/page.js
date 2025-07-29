import { getDictionary } from './dictionaries';

export default async function Page({ params }) {
	const { lang } = await params;
	const dict = await getDictionary(lang); // en
	return <button className='btn btn-primary'>{dict?.products?.cart}</button>; // Add to Cart
}
