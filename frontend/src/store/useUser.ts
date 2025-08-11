import api from '@/lib/axios';
import { create } from 'zustand';

type UserDTO = {
	id: string;
	username: string;
	name: string;
	bio: string;
	profileUrl: string;
	isOnline: boolean;
	lastSeenAt: string;
};

type UserState = {
	user: UserDTO | null;
	fetchUser: () => Promise<void>;
};

export const useUser = create<UserState>((set) => {
	return {
		user: null,

		fetchUser: async () => {
			try {
				console.log('Fetching user...');
				/* IMPORTANT: verify incoming data with zod instead of telling axios: "trust me bro, that's UserDTO" */
				const response = await api.get<UserDTO>(
					'/user/6692db05-a35b-4f55-879c-1358164ba6fb'
				);
				set({ user: response.data });
			} catch (error) {
				console.error('Failed to fetch user! ', error);
			}
		},
	};
});
