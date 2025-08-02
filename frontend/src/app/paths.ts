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
		requests: {
			root: {
				path: '/requests',
			},
			id: {
				path: '/requests/:id',
				build: (id: string | number) => `/requests/${id}`,
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
