import Button from '@/components/button';
import { useAuthentication } from '@/store/useAuthentication';

export default function Logout({ children }: ComponentChildrenProp) {
	const logout = useAuthentication((state) => state.logout);

	return <Button onClick={logout}>{children}</Button>;
}
