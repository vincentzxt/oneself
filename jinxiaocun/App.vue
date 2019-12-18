<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					console.log(e)
					Vue.prototype.StatusBar = e.statusBarHeight
					let custom = wx.getMenuButtonBoundingClientRect()
					console.log(custom)
					Vue.prototype.Custom = custom
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight
				}
			})
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
