import PROMISE from '../node_modules/oneutil/PROMISE'
// import TheKit from './tools/TheKit'
export default class my {

  //////////////////////  基础  ///////////////////////////

	static canIUse(schema) {
		return uni.canIUse(schema);
  }
  
  static getAppIdSync() {
    const uni_accountInfo = uni.getAccountInfoSync()
    const uni_appID = uni_accountInfo.miniProgram.appId
    const uni_res = {
      appId: uni_appID
    }
    return uni_res
  }
  
  static getLaunchOptionsSync() {
		return console.error("TO DO ... WANGYEWEI")
  }
  
  static getRunScene(ali_object) {
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null

    PROMISE((SUCCESS) =>{
      const uni_accountInfo = uni.getAccountInfoSync()

      const res = {
        envVersion: uni_accountInfo.miniProgram.envVersion
      }

      SUCCESS(res)
    },uni_success, uni_fail, uni_complete)

  }
  
  static SDKVersion(ali_object) {
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null

    PROMISE((SUCCESS) =>{
      uni.getSystemInfo({
        success: uni_res => {
          const ali_res = {
            SDKVersion : uni_res.SDKVersion
          }
          SUCCESS(ali_res)
        }
      })
    },uni_success, uni_fail, uni_complete)  

  }
  
  //////////////////////  应用级事件  ///////////////////////////

  static get env() {
		const res = {
      USER_DATA_PATH: 'https://usr'
    }
    return res
  }

  static offAppHide(callback) {
		return uni.offAppHide(callback)
  }
  
  static offAppShow(callback) {
		return uni.offAppShow(callback)
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
		uni.onAppShow(res => {
      const resu = {
        query: res.query,
        scene: res.scene
      }
      callback(resu)
    })
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
  static getTitleColor(ali_object) {
		return console.error("getTitleColor暂不支持")
  }

  static hideBackHome() {
		return uni.hideHomeButton();
  }

  static setNavigationBar(ali_object) {
    const uni_title = ali_object.title
    const uni_backgroundColor = ali_object.backgroundColor
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null

    PROMISE((SUCCESS) =>{ 
      const ali_res1 = {
        title : uni_title
      }
      const ali_res2 = {
        backgroundColor : uni_backgroundColor
      }
      uni.setNavigationBarTitle(ali_res1)
      uni.setNavigationBarColor(ali_res2)
      SUCCESS(ali_res1)
      SUCCESS(ali_res2)
      
    },uni_success, uni_fail, uni_complete)  
		
  }

  static hideNavigationBarLoading() {
		return uni.hideNavigationBarLoading()
	}


  static showNavigationBarLoading() {
		return uni.showNavigationBarLoading()
  }
  
  /////// tabBar /////
  static hideTabBar(ali_object) {
    return uni.hideTabBar(ali_object)
  }
  
  static hideTabBarRedDot(ali_object) {
    return uni.hideTabBarRedDot(ali_object)
  }
  
  static removeTabBarBadge(ali_object) {
    return uni.removeTabBarBadge(ali_object)
  }
  
  static setTabBarBadge(ali_object) {
    return uni.setTabBarBadge(ali_object)		
  }
  
  static setTabBarItem(ali_object) {
   return uni.setTabBarItem(ali_object)		
  }
  
  static setTabBarStyle(ali_object) {
		const uni_color = ali_object.color
    const uni_selectedColor = ali_object.selectedColor
    const uni_backgroundColor = ali_object.backgroundColor
    const uni_borderStyle = ali_object.borderStyle
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const ali_res = {
        color: uni_color,
        selectedColor: uni_selectedColor,
        backgroundColor: uni_backgroundColor,
        borderStyle: uni_borderStyle,
        backgroundImage: "",
        backgroundRepeat: "no-repeat"
      }
      uni.setTabBarStyle(ali_res)
      SUCCESS(ali_res)
    },uni_success,uni_fail,uni_complete)
  }
  
  static showTabBar(ali_object) {
   return uni.showTabBar(ali_object)
  }
  
	static showTabBarRedDot(ali_object) {
    const uni_index = ali_object.index
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const ali_res = {
        index: uni_index
      }
      uni.showTabBarRedDot(ali_res)
      SUCCESS(ali_res)
    },uni_success,uni_fail,uni_complete)
	
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