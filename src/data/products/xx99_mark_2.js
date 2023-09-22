import mobile_img_product from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import mobile_img_gallery_1 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg';
import mobile_img_gallery_2 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg';
import mobile_img_gallery_3 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg';
import tablet_img_product from '../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import tablet_img_gallery_1 from '../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg';
import tablet_img_gallery_2 from '../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg';
import tablet_img_gallery_3 from '../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg';
import desktop_img_product from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import desktop_img_gallery_1 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import desktop_img_gallery_2 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import desktop_img_gallery_3 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

export const productInfo = {
	images: {
		mobile: mobile_img_product,
		tablet: tablet_img_product,
		desktop: desktop_img_product,
	},
	name: 'XX99 Mark II Headphones',
	isNew: true,
	description:
		'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
};

export const productAbout = {
	features: [
		`Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're talking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.`,
		`The advanced Active Noise Cancelation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surrounding when you need to.  Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.  `,
	],
	inTheBox: [
		{
			equipmentName: 'headphone unit',
			quantity: 1,
		},
		{
			equipmentName: 'replacement earcups',
			quantity: 2,
		},
		{
			equipmentName: 'user manual',
			quantity: 1,
		},
		{
			equipmentName: '3.5mm 5m audio cable',
			quantity: 1,
		},
		{
			equipmentName: 'travel bag',
			quantity: 1,
		},
	],
};

export const productImages = [
	{
		mobile: mobile_img_gallery_1,
		tablet: tablet_img_gallery_1,
		desktop: desktop_img_gallery_1,
		alt: 'a man wearing headphones and listening to music',
	},
	{
		mobile: mobile_img_gallery_2,
		tablet: tablet_img_gallery_2,
		desktop: desktop_img_gallery_2,
		alt: 'a table with a phone, headphones, and a magazine on it',
	},
	{
		mobile: mobile_img_gallery_3,
		tablet: tablet_img_gallery_3,
		desktop: desktop_img_gallery_3,
		alt: `headphones' earcups close-up`,
	},
];
