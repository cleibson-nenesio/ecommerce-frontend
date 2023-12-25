// Types
import { InputProps } from './types';

export default function Input({ left, right, className, ...rest }: InputProps) {
	const hasLeftIcon = !!left;
	const hasRightIcon = !!right;

	const leftIconStyles = hasLeftIcon ? ' pl-[45px] ' : ' pl-[20px] ';
	const rightIconStyles = hasRightIcon ? ' pr-[45px] ' : ' pr-[20px] ';

	return (
		<div className={'relative'}>
			{hasLeftIcon && (
				<div className="absolute left-[12px] top-1/2 -translate-y-1/2 pr-[5px] bg-input-bg">
					{left()}
				</div>
			)}

			<input
				type="text"
				className={
					`bg-input-bg outline-none py-[7px] rounded` +
					leftIconStyles +
					rightIconStyles +
					className
				}
				{...rest}
			/>

			{hasRightIcon && (
				<div className="absolute right-[12px] top-1/2 -translate-y-1/2 pl-[5px] bg-input-bg">
					{right()}
				</div>
			)}
		</div>
	);
}
