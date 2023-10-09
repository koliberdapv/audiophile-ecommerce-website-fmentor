import { nanoid } from 'nanoid';
import xx59_image from '../assets/cart/image-xx59-headphones.jpg';
import xx99_mark_1_image from '../assets/cart/image-xx99-mark-one-headphones.jpg';
import xx99_mark_2_image from '../assets/cart/image-xx99-mark-two-headphones.jpg';
import yx1_image from '../assets/cart/image-yx1-earphones.jpg';
import zx7_image from '../assets/cart/image-zx7-speaker.jpg';
import zx9_image from '../assets/cart/image-zx9-speaker.jpg';

import mark2 from './products/xx99_mark_2';
import mark1 from './products/xx99_mark_1';
import yx1 from './products/yx1_earphones';
import zx7 from './products/zx7_speaker';
import xx59 from './products/xx59';
import zx9 from './products/zx9_speaker';

export const productList = [
  {
    id: 'v_aS0A9R_RHePiE1uM9_',
    name: 'XX99 Mark II',
    direction: `/product/XX99-Mark-II`,
    image: xx99_mark_2_image,
    price: 2999,
    amountInStock: 8,
    info: mark2,
  },
  {
    id: 'ky4C1NMi7u8ytkQH64CG9',
    name: 'XX99 Mark I',
    direction: `/product/XX99-Mark-I`,
    image: xx99_mark_1_image,
    price: 1750,
    amountInStock: 12,
    info: mark1,
  },
  {
    id: 'T08B6mmWGg0_wW4dUtUA_',
    name: 'XX59',
    direction: `/product/XX59`,
    image: xx59_image,
    price: 899,
    amountInStock: 4,
    info: xx59,
  },
  {
    id: 'qE0MbulsxFu6YsRSKXNo2',
    name: 'ZX9',
    direction: `/product/ZX9`,
    image: zx9_image,
    price: 4500,
    amountInStock: 7,
    info: zx9,
  },
  {
    id: 'G7KkFABKX17rqxE9qLVFn',
    name: 'ZX7',
    direction: `/product/ZX7`,
    image: zx7_image,
    price: 3500,
    amountInStock: 10,
    info: zx7,
  },
  {
    id: '4xpxJDwGAvUYeaME_56pS',
    name: 'YX1',
    direction: `/product/YX1`,
    image: yx1_image,
    price: 599,
    amountInStock: 9,
    info: yx1,
  },
];
