<script>
	import OnekitApp from '../alipay2uniapp/OnekitApp'
	import my from '../alipay2uniapp/my'
	export default OnekitApp({
		onLaunch: function () {
			console.log('App Launch')

		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	})
</script>

<style>
	@import '../alipay2uniapp/onekit.css'
</style>