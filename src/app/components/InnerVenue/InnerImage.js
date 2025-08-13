import style from './InnerImage.module.css';
import ImageApp from '@/app/plugins/ImageApp';

export default function InnerImage({ image }) {
	return (
		<div className={style.innerImage}>
			<ImageApp img={image} alt='Venue Image' />
		</div>
	);
}
