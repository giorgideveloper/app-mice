import Image from 'next/image';
import React from 'react';
import main from '@/app/image/main.png';

export default function ImageApp({ img, alt }) {
	return (
		<>
			{' '}
			<Image
				src={img || main}
				alt={alt || 'Image'}
				width={1920}
				height={1080}
			/>
		</>
	);
}
