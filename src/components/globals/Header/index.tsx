// Next
import Link from 'next/link';

// Components
import MenuHamburguer from './MenuHamburguer';
import Input from '@/components/shared/Input';
import Banner from '../Banner';

// Icons
import { MagnifyingGlassIcon } from '@/assets/icons';

// Variables
import { NAV_LINKS } from './variables';

export default function Header() {
	return (
		<>
			<header className="border-b-[rgba(0,0,0,0.3)] border-b sticky top-0 w-full bg-white">
				<Banner />

				<div className="pt-[38px] pb-[16px] flex justify-between items-center max-w-[1440px] mx-auto px-[20px] ">
					<p className="text-[24px] font-bold">Exclusive</p>

					<nav className="hidden md:block">
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
						className="hidden lg:block"
					/>

					<MenuHamburguer />
				</div>
			</header>
		</>
	);
}
