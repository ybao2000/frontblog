module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'https://www.cineplex.com',
				ws: true,
				changeOrigin: true
			}
			// '^/foo': {
			//   target: '<other_url>'
			// }
		}
	}
}
