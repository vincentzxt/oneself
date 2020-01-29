<template>
	<view class="cu-class cu-cell-group">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'cu-cell-group',
		mounted() {
			const cells = this.$children
			console.log("child")
			console.log(cells)
			const len = cells.length
			if (len > 0) {
				let lastIndex = len - 1
				cells.forEach((cell, index) => {
					cell.updateIsLastCell(index === lastIndex)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
