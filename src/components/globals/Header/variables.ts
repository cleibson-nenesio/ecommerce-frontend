// Types
import { NavLinks } from './types';

// Libraries
import { v4 as uuidv4 } from 'uuid';

export const NAV_LINKS: NavLinks[] = [
	{
		label: 'Home',
		path: '/',
		underline: false,
		id: uuidv4(),
	},
	{
		label: 'Contact',
		path: '/contact',
		underline: false,
		id: uuidv4(),
	},
	{
		label: 'About',
		path: '/about',
		underline: false,
		id: uuidv4(),
	},
	{
		label: 'Sign Up',
		path: '/signup',
		underline: true,
		id: uuidv4(),
	},
];
