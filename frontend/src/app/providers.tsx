import { useAuthentication } from '@/store/useAuthentication';
import { useEffect, useRef, useState } from 'react';

export default function AppProviders({ children }: ComponentChildrenProp) {
	const [isAuthenticationInitialized, setIsAuthenticationInitialized] =
		useState(false);
	const { initializeProvider: initializeAuthentication } = useAuthentication(
		(state) => state
	);

	const hasInitialized = useRef(false);

	useEffect(() => {
		if (hasInitialized.current) return;
		hasInitialized.current = true;

		console.log('<Providers/>: Initializing Auth');
		initializeAuthentication().finally(() =>
			setIsAuthenticationInitialized(true)
		);
	}, []);

	if (!isAuthenticationInitialized) return <div>Loading providers...</div>;

	/* Add Providers here that are GLOBAL. 
	    providers will encapsulate protected 
		and non protected routes */
	return <div>{children}</div>;
}
