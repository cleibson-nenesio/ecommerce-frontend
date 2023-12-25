import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = {
	right?: () => ReactNode;
	left?: () => ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
