const LANGUAGUES: Record<'label' | 'value' | 'id', string>[] = [
	{
		label: 'English',
		value: 'en',
		id: '1',
	},
	{
		label: 'Português',
		value: 'pt-br',
		id: '2',
	},
	{
		label: 'Español',
		value: 'es',
		id: '3',
	},
];

export default async function Banner() {
	return (
		<div className="bg-black">
			<div className="flex justify-center text-sm md:text-base md:justify-between items-center m-auto max-w-[1440px] py-[12px] px-[20px]">
				<div className="hidden lg:block" />

				<p className="text-white text-center">
					Summer Sale For All Swim Suits And Free Express Delivery -
					OFF 50%!{' '}
					<a href="#" className="underline font-semibold">
						ShopNow
					</a>
				</p>

				<select className="bg-black text-white hidden md:block">
					{LANGUAGUES.map((lang) => (
						<option value={lang.value} key={lang.id}>
							{lang.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
