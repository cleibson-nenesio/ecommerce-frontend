// Next
import Link from 'next/link';

// Libraries
import { v4 as uuidv4 } from 'uuid';

// Types
import { NavLinks } from './types';

// Components
import Input from '@/components/shared/Input';
import Banner from '../Banner';

// Icons
import { MagnifyingGlassIcon } from '@/assets/icons';

const NAV_LINKS: NavLinks[] = [
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

export default function Header() {
	return (
		<header className="border-b-[rgba(0,0,0,0.3)] border-b">
			<Banner />

			<div className="pt-[38px] pb-[16px] flex justify-between items-center max-w-[1440px] mx-auto px-[20px]">
				<p className="text-[24px] font-bold">Exclusive</p>

				<nav>
					<ul className="flex items-center gap-[48px]">
						{NAV_LINKS.map(({ id, label, path, underline }) => (
							<li key={id}>
								<Link
									href={path}
									className={underline ? 'underline' : ''}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Input
					placeholder="What are you looking for?"
					right={() => <MagnifyingGlassIcon />}
				/>
			</div>
		</header>
	);
}
