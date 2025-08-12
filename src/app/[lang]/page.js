import { fetchMainPage } from '@/service/service';
import { MainPage } from '../components/MainPage/MainPage';
import { getDictionary } from './dictionaries';

export const metadata = {
	title: 'მთავარი | Visit Batumi',
	description: 'Internationalized App Router example',
};


export default async function Page({ params }) {
	const { lang } = await params;
	const dict = await getDictionary(lang); 
	const data = await fetchMainPage(lang); // Fetch the main page data for the specific language
	return (
		<>
			{/* <button className='btn btn-primary'>{dict?.products?.cart}</button>
			<div className="container">
				<div className="row">
					<h1>helooo</h1>
				</div>
			</div> */}
			<MainPage dict={dict} data={data} lang={lang} />
		</>
	); 
}
