export default function Home() {
	const redirectToLogin = () => {
		console.log('Redirecting to login....');
	};

	return (
		<div>
			<h1 className="text-lg">Home</h1>
			<button onClick={redirectToLogin}>Get Started</button>
		</div>
	);
}
