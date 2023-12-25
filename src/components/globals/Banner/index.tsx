export default async function Banner() {
	return (
		<div className="bg-black">
			<div className="flex justify-between items-center m-auto max-w-[1440px] py-[12px] px-[20px]">
				<div />
				<p className="text-white">
					Summer Sale For All Swim Suits And Free Express Delivery -
					OFF 50%!{' '}
					<a href="#" className="underline font-semibold">
						ShopNow
					</a>
				</p>

				<div>
					<select className="bg-black text-white">
						<option value="en">English</option>
					</select>
				</div>
			</div>
		</div>
	);
}
