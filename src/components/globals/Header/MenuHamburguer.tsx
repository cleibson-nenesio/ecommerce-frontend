'use client';

// React
import { useState } from 'react';

// Icons
import { CloseIcon, MenuBars } from '@/assets/icons';
import { NAV_LINKS } from './variables';
import Link from 'next/link';

export default function MenuHamburguer() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function toggleMenu() {
		setIsOpen((prevState) => !prevState);
	}

	if (typeof document !== 'undefined') {
		document.body.style.overflowY = isOpen ? 'hidden' : 'scroll';
	}

	return (
		<>
			{isOpen && (
				<div
					onClick={toggleMenu}
					className="md:hidden fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.1)]"
				/>
			)}

			<div className="cursor-pointer md:hidden" onClick={toggleMenu}>
				<MenuBars size={32} />
			</div>

			<div
				className={`md:hidden fixed flex flex-col transition-all duration-300 w-4/5 bg-white h-full top-0 p-5 ${
					isOpen ? 'right-0' : '-right-full'
				}`}
			>
				<div className="flex justify-end mb-4">
					<div className="cursor-pointer" onClick={toggleMenu}>
						<CloseIcon size={28} />
					</div>
				</div>

				<nav>
					<ul className="text-center">
						{NAV_LINKS.map(({ id, label, path, underline }) => (
							<li key={id} className="mb-1">
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
			</div>
		</>
	);
}
