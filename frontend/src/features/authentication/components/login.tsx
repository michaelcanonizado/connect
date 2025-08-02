import Button from '@/components/button';
import { useAuthentication } from '@/store/useAuthentication';

export default function Login({ children }: ComponentChildrenProp) {
	const login = useAuthentication((state) => state.login);

	return <Button onClick={login}>{children}</Button>;
}
