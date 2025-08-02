const paths = {
	home: {
		path: '/',
	},
	authentication: {
		callback: {
			path: '/authentication/callback',
		},
	},
	app: {
		chats: {
			root: {
				path: '/chats',
			},
			id: {
				path: '/chats/:id',
				build: (id: string | number) => `/chats/${id}`,
			},
		},
		requested: {
			root: {
				path: '/requested',
			},
			id: {
				path: '/requested/:id',
				build: (id: string | number) => `/requested/${id}`,
			},
		},
		archived: {
			root: {
				path: '/archived',
			},
			id: {
				path: '/archived/:id',
				build: (id: string | number) => `/archived/${id}`,
			},
		},
	},
} as const;
export default paths;
