import mobile_img_product from '../../assets/product-zx7-speaker/mobile/image-product.jpg';
import mobile_img_gallery_1 from '../../assets/product-zx7-speaker/mobile/image-gallery-1.jpg';
import mobile_img_gallery_2 from '../../assets/product-zx7-speaker/mobile/image-gallery-2.jpg';
import mobile_img_gallery_3 from '../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg';
import tablet_img_product from '../../assets/product-zx7-speaker/tablet/image-product.jpg';
import tablet_img_gallery_1 from '../../assets/product-zx7-speaker/tablet/image-gallery-1.jpg';
import tablet_img_gallery_2 from '../../assets/product-zx7-speaker/tablet/image-gallery-2.jpg';
import tablet_img_gallery_3 from '../../assets/product-zx7-speaker/tablet/image-gallery-3.jpg';
import desktop_img_product from '../../assets/product-zx7-speaker/desktop/image-product.jpg';
import desktop_img_gallery_1 from '../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import desktop_img_gallery_2 from '../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import desktop_img_gallery_3 from '../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';

export const productInfo = {
	images: {
		mobile: mobile_img_product,
		tablet: tablet_img_product,
		desktop: desktop_img_product,
	},
	name: 'ZX7 Speaker',
	isNew: false,
	description: `Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.`,
};

export const productAbout = {
	features: [
		`Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.`,
		`The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience. `,
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
		alt: 'a person in a studio with a row of speakers above the monitor',
	},
	{
		mobile: mobile_img_gallery_3,
		tablet: tablet_img_gallery_3,
		desktop: desktop_img_gallery_3,
		alt: `a speaker on a table`,
	},
];

export const recommendations = ['ZX9 Speaker', 'XX99 Mark I', 'XX59'];
