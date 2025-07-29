import { getDictionary } from './dictionaries';

export default async function Page({ params }) {
	const { lang } = await params;
	const dict = await getDictionary(lang); // en
	console.log(dict + '  ss');
	return <button>{dict?.products?.cart}</button>; // Add to Cart
}
