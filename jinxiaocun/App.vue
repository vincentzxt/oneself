<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
			}
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
				}
			})
			//uni.removeStorageSync('userInfo')
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	page {
		font-size: $uni-font-size-base;
		color: $uni-text-color;
		background-color: $uni-bg-color;
	}
	/*每个页面公共css */
</style>
