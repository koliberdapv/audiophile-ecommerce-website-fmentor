import mobile_img_product from '../../assets/product-zx9-speaker/mobile/image-product.jpg';
import mobile_img_gallery_1 from '../../assets/product-zx9-speaker/mobile/image-gallery-1.jpg';
import mobile_img_gallery_2 from '../../assets/product-zx9-speaker/mobile/image-gallery-2.jpg';
import mobile_img_gallery_3 from '../../assets/product-zx9-speaker/mobile/image-gallery-3.jpg';
import tablet_img_product from '../../assets/product-zx9-speaker/tablet/image-product.jpg';
import tablet_img_gallery_1 from '../../assets/product-zx9-speaker/tablet/image-gallery-1.jpg';
import tablet_img_gallery_2 from '../../assets/product-zx9-speaker/tablet/image-gallery-2.jpg';
import tablet_img_gallery_3 from '../../assets/product-zx9-speaker/tablet/image-gallery-3.jpg';
import desktop_img_product from '../../assets/product-zx9-speaker/desktop/image-product.jpg';
import desktop_img_gallery_1 from '../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import desktop_img_gallery_2 from '../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import desktop_img_gallery_3 from '../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg';

export const productInfo = {
	images: {
		mobile: mobile_img_product,
		tablet: tablet_img_product,
		desktop: desktop_img_product,
	},
	name: 'ZX9 Speaker',
	isNew: true,
	description: `Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.`,
};

export const productAbout = {
	features: [
		`Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).`,
		`Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5" aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Futhermore, you will experience new sensations from old songs since it an respond to even the subtle waveforms.`,
	],
	inTheBox: [
		{
			equipmentName: 'speaker unit',
			quantity: 2,
		},
		{
			equipmentName: 'speaker cloth panel',
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
			equipmentName: '10m optical cable',
			quantity: 1,
		},
	],
};

export const productImages = [
	{
		mobile: mobile_img_gallery_1,
		tablet: tablet_img_gallery_1,
		desktop: desktop_img_gallery_1,
		alt: `a speaker's dynamic up-close`,
	},
	{
		mobile: mobile_img_gallery_2,
		tablet: tablet_img_gallery_2,
		desktop: desktop_img_gallery_2,
		alt: 'a room with the speakers on the floor, flower table and a bookshelf',
	},
	{
		mobile: mobile_img_gallery_3,
		tablet: tablet_img_gallery_3,
		desktop: desktop_img_gallery_3,
		alt: `a pair of speakers`,
	},
];

export const recommendations = ['ZX7 Speaker', 'XX99 Mark I', 'XX59'];
