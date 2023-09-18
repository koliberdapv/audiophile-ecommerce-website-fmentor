import xx99_mark2_mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';
import xx99_mark2_tablet from '../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg';
import xx99_mark2_desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import xx99_mark1_mobile from '../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg';
import xx99_mark1_tablet from '../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg';
import xx99_mark1_desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import xx59_mobile from '../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg';
import xx59_tablet from '../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg';
import xx59_desktop from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';

const data = [
	{
		images: {
			mobile: xx99_mark2_mobile,
			tablet: xx99_mark2_tablet,
			desktop: xx99_mark2_desktop,
		},
		isNew: true,
		name: 'XX99 Mark II Headphones',
		info: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
		link: '/product/XX99-Mark-II',
	},
	{
		images: {
			mobile: xx99_mark1_mobile,
			tablet: xx99_mark1_tablet,
			desktop: xx99_mark1_desktop,
		},
		isNew: false,
		name: 'XX99 Mark I Headphones',
		info: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
		link: '/product/XX99-Mark-I',
	},
	{
		images: {
			mobile: xx59_mobile,
			tablet: xx59_tablet,
			desktop: xx59_desktop,
		},
		isNew: false,
		name: 'XX59 Headphones',
		info: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
		link: '/product/XX59',
	},
];
export default data;
