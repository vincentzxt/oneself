<template>
	<text :style="{ color: color, 'font-size': size + 'px' }" class="uni-icons" @click="_onClick">{{icons[type]}}</text>
</template>

<script>
	import icons from './icons.js';
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		src: url('//at.alicdn.com/t/font_1563314_nyy39a029hb.eot');
		src: url('//at.alicdn.com/t/font_1563314_nyy39a029hb.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.woff') format('woff'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.svg#iconfont') format('svg');
	});
	// #endif
	export default {
		name: 'UniIcons',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
			}
		},
		data() {
			return {
				icons: icons
			}
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	@font-face {
		font-family: uniicons;
		src: url('//at.alicdn.com/t/font_1563314_nyy39a029hb.eot');
		src: url('//at.alicdn.com/t/font_1563314_nyy39a029hb.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.woff') format('woff'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1563314_nyy39a029hb.svg#iconfont') format('svg');
	}

	/* #endif */

	.uni-icons {
		font-family: uniicons;
		text-decoration: none;
		text-align: center;
	}
</style>
