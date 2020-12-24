<script>
	import app from "../OnekitApp"
	export default {
		onLaunch: function () {
			if (app.onLaunch) {
				return app.onLaunch.apply(this);
			}
		},
		onShow: function () {
			if (app.onShow) {
				return app.onShow.apply(this);
			}
		},
		onHide: function () {
			if (app.onHide) {
				return app.onHide.apply(this);
			}
		},
		onError: function () {
			if (app.onError) {
				return app.onError.apply(this);
			}
		},
		onUniNViewMessage: function () {}
	}
</script>
<style>
	@import url("../onekit.css");
</style>