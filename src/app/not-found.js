// src/app/not-found.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import notFoundImage from '@/app/image/notfound.svg'
import Link from 'next/link';


export default function NotFound() {
	return (
		<div className='container'>
			<div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
				<div className='col-lg-6 col-12'>
					<h1 className='fs-1 font-bold text-gray-800 mb-4 fw-bold'>Page not found</h1>
					<p>Sorry, the page you are looking for does not exist. Here are some helpful links:</p>
					<div className='d-flex gap-2'>
						<button className='btn border-1 border-dark rounded-5 '>Go to back</button>
					<Link href="/"><button className='btn btn-danger rounded-5'>Home</button></Link>
					</div>
				</div>
				<div className='col-lg-6 col-12'>
					<Image
						src={notFoundImage}
						width={700}
						height={700}
						alt='Picture of the author'
					/>
				</div>
			</div>
		</div>
	)
}

