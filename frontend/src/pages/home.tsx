export default function Home() {
	const redirectToLogin = () => {
		console.log('Redirecting to login....');
	};

	return (
		<div className="h-screen grid place-items-center">
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-lg">Home</h1>
				<button
					onClick={redirectToLogin}
					className="px-8 py-2 rounded-lg bg-blue-500 text-white hover:cursor-pointer"
				>
					Get Started
				</button>
			</div>
		</div>
	);
}
