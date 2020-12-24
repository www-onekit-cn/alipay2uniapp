export default class my {

  //////////////////////  基础  ///////////////////////////

	static canIUse(schema) {
		return uni.canIUse(schema);
  }
  
  static getAppIdSync() {
		return console.error("getAppIdSync暂不支持")
  }
  
  static getLaunchOptionsSync() {
		return console.error("getLaunchOptionsSync暂不支持")
  }
  
  static getRunScene() {
		return console.error("getRunScene暂不支持")
  }
  
  static SDKVersion() {
		return console.error("SDKVersion暂不支持")
  }
  
  //////////////////////  应用级事件  ///////////////////////////

  static env() {
		return console.error("env暂不支持")
  }

  static offAppHide(callback) {
		return uni.offError(callback)
  }
  
  static offAppShow(callback) {
		return uni.offError(callback)
  }
  
  static offComponentError(callback) {
		return console.error("offComponentError暂不支持")
  }
  
  static offError(callback) {
		return uni.offError(callback)
  }
  
  static offUnhandledRejection(callback) {
		return console.error("offUnhandledRejection暂不支持")
  }
  
  static onAppHide(callback) {
		return uni.onAppHide(callback)
  }
  
  static onAppShow(callback) {
		return uni.onAppShow(callback)
  }
  
  static onComponentError(callback) {
		return console.error("onComponentError暂不支持")
  }

  static onError(callback) {
		return uni.onError(callback)
  }
  
  static onUnhandledRejection(callback) {
		return console.error("onUnhandledRejection暂不支持")
  }

  //////////////////////  界面  ///////////////////////////

  /////// 导航栏 /////
  static getTitleColor() {
		return console.error("getTitleColor暂不支持")
  }

  static hideBackHome() {
		return console.error("hideBackHome暂不支持")
  }

  static setNavigationBar(object) {
		return console.error("setNavigationBar暂不支持")
  }

  static hideNavigationBarLoading(object) {
		return uni.hideNavigationBarLoading(object)
	}


  static showNavigationBarLoading(object) {
		return uni.showNavigationBarLoading(object)
  }
  
  /////// tabBar /////
  static hideTabBar(object) {
		return uni.hideTabBar(object)
  }
  
  static hideTabBarRedDot(object) {
		return uni.hideTabBarRedDot(object)
  }
  
  static removeTabBarBadge(object) {
		return uni.removeTabBarBadge(object)
  }
  
  static setTabBarBadge(object) {
		return uni.setTabBarBadge(object)
  }
  
  static setTabBarItem(object) {
		return uni.setTabBarItem(object)
  }
  
  static setTabBarStyle(object) {
		return uni.setTabBarStyle(object)
  }
  
  static showTabBar(object) {
		return uni.showTabBar(object)
  }
  
	static showTabBarRedDot(object) {
		return uni.showTabBarRedDot(object)
  }
  
  ////////  路由  /////////

	static switchTab(object) {
		return uni.switchTab(object)
	}

	static reLaunch(object) {
		return uni.reLaunch(object)
	}

	static redirectTo(object) {
		return uni.redirectTo(object)
	}

	static navigateTo(object) {
		return uni.navigateTo(object)
	}

	static navigateBack(object) {
		return uni.navigateBack(object)
  }
  
  ////////  交互反馈  /////////
  static alert(object) {
		return console.error("alert暂不支持")
  }

  static confirm(object) {
		return console.error("confirm暂不支持")
  }

  static hideLoading(object) {
		return uni.hideLoading(object)
  }
  
  static hideToast(object) {
		return uni.hideToast(object)
  }

  static prompt(object) {
		return console.error("prompt暂不支持")
  }
  
  static showActionSheet(object) {
		return uni.showActionSheet(object)
  }
  
  static showLoading(object) {
		return uni.showLoading(object)
	}

  static showToast(object) {
		return uni.showToast(object)
  }
  
  ////////  下拉刷新  /////////
  static startPullDownRefresh(object) {
		return uni.startPullDownRefresh(object)
  }
  
  static stopPullDownRefresh(object) {
		return uni.stopPullDownRefresh(object)
  }
  
  ////////  联系人  /////////
  static chooseAlipayContact(object) {
		return console.error("chooseAlipayContact暂不支持")
  }

  static chooseContact(object) {
		return console.error("chooseContactt暂不支持")
  }

  static choosePhoneContact(object) {
		return console.error("choosePhoneContact暂不支持")
  }

	

	

	

	
	

	
	
	

	
	

	
	



	

	
  


	

	

	
}