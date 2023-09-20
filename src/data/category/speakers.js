import zx9_mobile from '../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg';
import zx9_tablet from '../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import zx9_desktop from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import zx7_mobile from '../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg';
import zx7_tablet from '../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import zx7_desktop from '../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';

const data = [
	{
		images: {
			mobile: zx9_mobile,
			tablet: zx9_tablet,
			desktop: zx9_desktop,
		},
		isNew: true,
		name: 'ZX9 Speaker',
		info: `Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.`,
		link: '/product/ZX9',
	},
	{
		images: {
			mobile: zx7_mobile,
			tablet: zx7_tablet,
			desktop: zx7_desktop,
		},
		isNew: false,
		name: 'ZX7 Speaker',
		info: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
		link: '/product/ZX7',
	},
];
export default data;
