module.exports = {
	// pages 里面存放多页面的配置，为对象形式，key为多页面的入口名称
	pages: {
		pc: {
			entry: './src/main-pc.js',
			template: 'public/index-pc.html',
			filename: 'index.html',
			title: 'PC',
			chunks: ['chunk-vendors', 'chunk-common', 'pc']
		},
		h5: {
			entry: './src/main-h5.js',
			template: 'public/index-h5.html',
			filename: 'h5.html',
			title: 'H5',
			chunks: ['chunk-vendors', 'chunk-common', 'h5']
		}
	}
}