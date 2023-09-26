import Headphones from '../pages/Headphones/Headphones';
import Earphones from '../pages/Earphones/Earphones';
import Speakers from '../pages/Speakers/Speakers';
import Checkout from '../pages/Checkout/Checkout';
import Error from '../pages/Error/Error';

import Home from '../pages/Home/Home';

export const pagesList = [
	{ name: 'home', direction: '/', ElementName: Home },
	{
		name: 'headphones',
		direction: '/category/headphones',
		ElementName: Headphones,
	},
	{
		name: 'speakers',
		direction: '/category/speakers',
		ElementName: Speakers,
	},
	{
		name: 'earphones',
		direction: '/category/earphones',
		ElementName: Earphones,
	},
	{
		name: 'checkout',
		direction: '/checkout',
		ElementName: Checkout,
	},
	{
		name: 'error',
		direction: '*',
		ElementName: Error,
	},
];
