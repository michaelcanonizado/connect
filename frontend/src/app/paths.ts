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
			},
		},
		requested: {
			root: {
				path: '/requested',
			},
			id: {
				path: '/requested/:id',
			},
		},
		archived: {
			root: {
				path: '/archived',
			},
			id: {
				path: '/archived/:id',
			},
		},
	},
} as const;
export default paths;
