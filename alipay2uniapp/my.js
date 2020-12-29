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
		return uni.setTabBarStyle(ali_object)
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

	static switchTab(ali_object) {
		return uni.switchTab(ali_object)
	}

	static reLaunch(ali_object) {
		return uni.reLaunch(object)
	}

	static redirectTo(ali_object) {
		return uni.redirectTo(ali_object)
	}

	static navigateTo(ali_object) {
   return uni.navigateTo(ali_object)
	}

	static navigateBack(ali_object) {
		return uni.navigateBack(ali_object)
  }
  
  ////////  交互反馈  /////////
  static alert(ali_object) {
    const uni_title = ali_object.title
    const uni_content = ali_object.content
    const uni_confirmText = ali_object.buttonText
		const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    
    PROMISE((SUCCESS) => {
      const uni_object = {
        title: uni_title,
        content: uni_content,
        confirmText: uni_confirmText,
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#000000",
        confirmColor: "#007aff"
      }
      uni.showModal(uni_object)
      const ali_res = {

      }
      SUCCESS(ali_res)
    },uni_success,uni_fail,uni_complete)
  }

  static confirm(ali_object) {
    const uni_title = ali_object.title
    const uni_content = ali_object.content
    const uni_confirmText = ali_object.confirmButtonText
    const uni_cancelText = ali_object.cancelButtonText
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const title = uni_title
      const content = uni_content
      const confirmText = uni_confirmText
      const cancelText = uni_cancelText
      uni.showModal({
        title,
        content,
        confirmText,
        cancelText,
        success: res => {
          if(res.confirm) {
            const res = {
              confirm: true
            }
            SUCCESS(res)
          } else if (res.cancel) {
            const res = {
              confirm: false
            }
            SUCCESS(res)
          }
        }
      })
    }, uni_success,uni_fail,uni_complete)
  }

  static hideLoading(ali_object) {
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      uni.hideLoading({
        success: () =>{
          const uni_res ={
            success: true
          }
          SUCCESS(uni_res)
        }
      })
    },uni_success,uni_fail,uni_complete)
		
  }
  
  static hideToast(ali_object) {
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object =null
    PROMISE((SUCCESS) =>{
      uni.hideToast({
        success:() =>{
          const uni_res = {}
          SUCCESS(uni_res)
        }
      })
    },uni_success,uni_fail,uni_complete)
		
  }

  static prompt(ali_object) {
		return console.error("prompt暂不支持")
  }
  
  static showActionSheet(ali_object) {
    const uni_itemList = ali_object.items
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const itemList = uni_itemList
      uni.showActionSheet({
        itemList,
        success: res =>{
          const uni_res ={
            index: res.tapIndex,
            success: true
          }
          SUCCESS(uni_res)
        }
      })

    },uni_success,uni_fail,uni_complete)
  }
  
  static showLoading(ali_object) {
    const uni_title = ali_object.content
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const title = uni_title
      uni.showLoading({
        title,
        success: () =>{
          const uni_res ={
            success: true
          }
          SUCCESS(uni_res)
        }
      })
     
    },uni_success,uni_fail,uni_complete)
	}

  static showToast(ali_object) {
    const uni_title = ali_object.content
    const uni_duration = ali_object.duration
    const uni_icon = ali_object.type
    const uni_success = ali_object.success
    const uni_fail = ali_object.fail
    const uni_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const title = uni_title
      const duration = uni_duration
      const icon = uni_icon
      uni.showToast({
        title,
        duration,
        icon,
        success: () =>{
          const uni_res = {}
          SUCCESS(uni_res)
        }
      })

    },uni_success,uni_fail,uni_complete)
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