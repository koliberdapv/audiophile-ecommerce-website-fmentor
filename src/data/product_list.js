import {
	Product_xx99_mark_2,
	Product_xx99_mark_1,
	Product_xx59,
	Product_zx9_speaker,
	Product_zx7_speaker,
	Product_yx1_earphones,
} from '../pages/Product';
import xx59_image from '../assets/cart/image-xx59-headphones.jpg';
import xx99_mark_1_image from '../assets/cart/image-xx99-mark-one-headphones.jpg';
import xx99_mark_2_image from '../assets/cart/image-xx99-mark-two-headphones.jpg';
import yx1_image from '../assets/cart/image-yx1-earphones.jpg';
import zx7_image from '../assets/cart/image-zx7-speaker.jpg';
import zx9_image from '../assets/cart/image-zx9-speaker.jpg';
import { nanoid } from 'nanoid';
export const productList = [
	{
		id: nanoid(),
		name: 'XX99-Mark-II',
		direction: `/product/XX99-Mark-II`,
		ElementName: Product_xx99_mark_2,
		image: xx99_mark_2_image,
		price: 299900,
		amountInStock: 8,
	},
	{
		id: nanoid(),
		name: 'XX99-Mark-I',
		direction: `/product/XX99-Mark-I`,
		ElementName: Product_xx99_mark_1,
		image: xx99_mark_1_image,
		price: 175000,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'XX59',
		direction: `/product/XX59`,
		ElementName: Product_xx59,
		image: xx59_image,
		price: 89900,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'ZX9',
		direction: `/product/ZX9`,
		ElementName: Product_zx9_speaker,
		image: zx9_image,
		price: 450000,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'ZX7',
		direction: `/product/ZX7`,
		ElementName: Product_zx7_speaker,
		image: zx7_image,
		price: 350000,
		amountInStock: 0,
	},
	{
		id: nanoid(),
		name: 'YX1',
		direction: `/product/YX1`,
		ElementName: Product_yx1_earphones,
		image: yx1_image,
		price: 59900,
		amountInStock: 0,
	},
];
