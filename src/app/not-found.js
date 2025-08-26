// src/app/not-found.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


export default function NotFound() {
	return (
		<div className='container'>
			<div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
				<div className='col-lg-6 col-12'>
					<h1 className='fs-1 font-bold text-gray-800 mb-4 fw-bold'>Page not found</h1>
					<p>Sorry, the page you are looking for does not exist. Here are some helpful links:</p>
					<div className='d-flex gap-2'>
						<a href="/"><button className='btn border-1 border-dark rounded-5 '>Go to back</button></a>
						<a href="/"><button className='btn btn-danger rounded-5'>Home</button></a>
					</div>
				</div>
				<div className='col-lg-6 col-12'>
					<Image
						src='./notfound.svg'
						width={500}
						height={500}
						alt='Picture of the author'
					/>
				</div>
			</div>
		</div>
	)
}

