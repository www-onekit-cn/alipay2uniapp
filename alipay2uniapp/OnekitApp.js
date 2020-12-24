export default function (my_object) {
	const uniapp_object = {
		onLaunch(uni_launchOpions) {
			let my_launchOpions = {}
			/*
			uni_launchOpions => my_launchOpions
			*/
			my_launchOpions = uni_launchOpions
			my_launchOpions.shareTicket = undefined
			my_launchOpions.referrerInfo = {}
			//////////////////////
			this.onekit_launchOpions = my_launchOpions
			if (my_object.onLaunch) {
				my_object.onLaunch.call(this, my_launchOpions)
				// my_object.onLaunch(my_launchOpions)
			}
		},
		onShow(uni_showOpions) {
			let my_showOpions = {}
			my_showOpions = uni_showOpions
			this.onekit_showOptions = my_showOpions
			if (my_object.onShow) {
				my_object.onShow.call(this, uni_showOpions)
			}
		},
		onUnhandledRejection(uni_rejectionFn) {
			/**     未生效       */
			let my_rejectionFn = uni_rejectionFn()
			this.onekit_rejectionFn = my_rejectionFn()
			if (my_object.onUnhandledRejection) {
				my_object.onUnhandledRejection(my_rejectionFn())
			}
		},
		onThemeChange(uni_themeChangeFn) {
			/**     未测试    */
			let my_themeChangeFn = uni_themeChangeFn()
			this.onekit_themeChangeFn = my_themeChangeFn()
			if (my_object.onThemeChange) {
				my_object.onThemeChange(my_themeChangeFn())
			}
		}
	}
	return uniapp_object
}