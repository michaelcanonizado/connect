export default function Button({
	children,
	...props
}: ComponentChildrenProp & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className="px-8 pt-1 pb-2 rounded-lg bg-blue-500 text-white hover:cursor-pointer"
			{...props}
		>
			{children}
		</button>
	);
}
