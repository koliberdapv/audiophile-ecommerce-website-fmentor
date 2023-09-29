import xx59_image from '../../../assets/cart/image-xx59-headphones.jpg';
import xx99_mark_1_image from '../../../assets/cart/image-xx99-mark-one-headphones.jpg';
import xx99_mark_2_image from '../../../assets/cart/image-xx99-mark-two-headphones.jpg';
import yx1_image from '../../../assets/cart/image-yx1-earphones.jpg';
import zx7_image from '../../../assets/cart/image-zx7-speaker.jpg';
import zx9_image from '../../../assets/cart/image-zx9-speaker.jpg';
import { nanoid } from 'nanoid';

export const cartItemsList = [
	{
		id: nanoid(),
		name: 'XX99 MK II',
		image: xx99_mark_2_image,
		price: 299900,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'XX99 MK I',
		image: xx99_mark_1_image,
		price: 175000,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'XX59',
		image: xx59_image,
		price: 89900,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'ZX9',
		image: zx9_image,
		price: 450000,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'ZX7',
		image: zx7_image,
		price: 350000,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'YX1',
		image: yx1_image,
		price: 59900,
		amountInStock: 0,
	},
];
