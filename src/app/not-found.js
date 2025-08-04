// src/app/not-found.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function NotFound() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
			<div className='max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center'>
				<h1 className='text-3xl font-bold text-gray-800 mb-4'>
					404 - Page Not Found
					<div className='alert alert-primary' role='alert'>
						A simple primary alert—check it out!
					</div>
				</h1>
				<p className='text-gray-600 mb-6'>The page you</p>
				<Image
					src='./image/notfound.svg'
					width={500}
					height={500}
					alt='Picture of the author'
				/>
			</div>
			</div>
	)
}
