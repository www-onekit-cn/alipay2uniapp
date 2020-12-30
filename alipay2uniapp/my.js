import PROMISE from '../node_modules/oneutil/PROMISE'
import TASK from '../node_modules/oneutil/TASK'

// import TheKit from './tools/TheKit'
export default class my {

  //////////////////////  基础  ///////////////////////////

	static canIUse(schema) {
		return uni.canIUse(schema);
  }
  
  static getAppIdSync() {
    const ali_accountInfo = uni.getAccountInfoSync()
    const uni_appID = ali_accountInfo.miniProgram.appId
    const ali_res = {
      appId: uni_appID
    }
    return ali_res
  }
  
  static getLaunchOptionsSync() {
		return console.error("TO DO ... WANGYEWEI")
  }
  
  static getRunScene(ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null

    PROMISE((SUCCESS) =>{
      const uni_accountInfo = uni.getAccountInfoSync()

      const ali_res = {
        envVersion: uni_accountInfo.miniProgram.envVersion
      }

      SUCCESS(ali_res)
    },ali_success, ali_fail, ali_complete)

  }
  
  static SDKVersion(ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
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
    },ali_success, ali_fail, ali_complete)  

  }
  
  //////////////////////  应用级事件  ///////////////////////////

  static get env() {
		const ali_res = {
      USER_DATA_PATH: 'https://usr'
    }
    return ali_res
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
		uni.onAppShow(uni_res => {
      const ali_res = {
        query: uni_res.query,
        scene: uni_res.scene
      }
      callback(ali_res)
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
    const ali_title = ali_object.title
    const ali_backgroundColor = ali_object.backgroundColor
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null

    PROMISE((SUCCESS) =>{ 
      const ali_res1 = {
        title : ali_title
      }
      const ali_res2 = {
        backgroundColor : ali_backgroundColor
      }
      uni.setNavigationBarTitle(ali_res1)
      uni.setNavigationBarColor(ali_res2)
      SUCCESS(ali_res1)
      SUCCESS(ali_res2)
      
    },ali_success, ali_fail, ali_complete)  
		
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
    return uni.showTabBarRedDot(ali_object)
	
  }
  
  ////////  路由  /////////

	static switchTab(ali_object) {
		return uni.switchTab(ali_object)
	}

	static reLaunch(ali_object) {
		return uni.reLaunch(ali_object)
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
    const ali_title = ali_object.title
    const ali_content = ali_object.content
    const ali_confirmText = ali_object.buttonText
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const title = ali_title
      const content = ali_content
      const confirmText = ali_confirmText
      uni.showModal({
        title,
        content,
        confirmText,
        success: () =>{
          const ali_res = {
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
  }

  static confirm(ali_object) {
    const ali_title = ali_object.title
    const ali_content = ali_object.content
    const ali_confirmText = ali_object.confirmButtonText
    const ali_cancelText = ali_object.cancelButtonText
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const title = ali_title
      const content = ali_content
      const confirmText = ali_confirmText
      const cancelText = ali_cancelText
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
    }, ali_success,ali_fail,ali_complete)
  }

  static hideLoading(ali_object) {
    return uni.hideLoading(ali_object)		
  }
  
  static hideToast(ali_object) {
    return uni.hideToast(ali_object)	
  }

  static prompt(ali_object) {
		return console.log("prompt暂不支持")
  }
  
  static showActionSheet(ali_object) {
    const ali_items = ali_object.items
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const itemList = ali_items
      uni.showActionSheet({
        itemList,
        success: res =>{
          const ali_res ={
            index: res.tapIndex,
            success: true
          }
          SUCCESS(ali_res)
        }
      })

    },ali_success,ali_fail,ali_complete)
  }
  
  static showLoading(ali_object) {
    const ali_title = ali_object.content
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const title = ali_title
      uni.showLoading({
        title,
        success: () =>{
          const ali_res ={
            success: true
          }
          SUCCESS(ali_res)
        }
      })
     
    },ali_success,ali_fail,ali_complete)
	}

  static showToast(ali_object) {
    const ali_title = ali_object.content
    const ali_duration = ali_object.duration
    const ali_icon = ali_object.type
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const title = ali_title
      const duration = ali_duration
      const icon = ali_icon
      uni.showToast({
        title,
        duration,
        icon,
        success: () =>{
          const ali_res = {}
          SUCCESS(ali_res)
        }
      })

    },ali_success,ali_fail,ali_complete)
  }
  
  ////////  下拉刷新  /////////
  static startPullDownRefresh(ali_object) {
		return uni.startPullDownRefresh(ali_object)
  }
  
  static stopPullDownRefresh(ali_object) {
		return uni.stopPullDownRefresh(ali_object)
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

  ////////  选择城市  /////////
  static chooseCity(object) {
		return console.error("chooseCity暂不支持")
  }

  static onLocatedComplete(object) {
		return console.error("onLocatedComplete暂不支持")
  }

  static setLocatedCity(object) {
		return console.error("setLocatedCity暂不支持")
  }

  static regionPicker(object) {
		return console.error("regionPicker暂不支持")
  }

  ////////  选择日期  /////////
  static datePicker(object) {
		return console.error("datePicker暂不支持")
  }

  ////////  动画  /////////
  static createAnimation(ali_object) {
    const uni_res = uni.createAnimation(ali_object)
    const ali_res = {
      animations: uni_res.actions,
      config: uni_res.option,
      currentAnimation: uni_res.currentStepAnimates
    }
    return ali_res
  }

  ////////  画布  /////////
  static createCanvasContext(canvasId) {
		return uni.createCanvasContext(canvasId)
  }

  ////////  地图  /////////
  static createMapContext(mapId) {
		return uni.createMapContext(mapId)
  }

  static getMapInfo(object) {
		return console.error("getMapInfo暂不支持")
  }

  ////////  计算路径  /////////
  static calculateRoute(object) {
		return console.error("calculateRoute暂不支持")
  }

  ////////  键盘  /////////
  static calculateRoute() {
		return uni.calculateRoute()
  }

  ////////  滚动  /////////
  static pageScrollTo(ali_object) {
    const ali_scrollTop = ali_object.scrollTop
    const ali_duration = ali_object.duration
    const ali_selector = ali_object.selector
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const scrollTop = ali_scrollTop
      const duration = ali_duration
      const selector = ali_selector
      uni.pageScrollTo({
        scrollTop,
        duration,
        selector,
        success: () =>{
          const ali_res ={
            success: true
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
  }

  ////////  节点查询  /////////
  static createIntersectionObserver(ali_object) {
   return uni.createIntersectionObserver(ali_object)
  }

  static createSelectorQuery() {
    return uni.createSelectorQuery()
  }

  ////////  选项选择器  /////////
  static optionsSelect(ali_object) {
    return console.error("optionsSelect暂不支持")
  }

  ////////  级联选择  /////////
  static optionsSelect(ali_object) {
    return console.error("multiLevelSelect暂不支持")
  }

  ////////  设置窗口背景  /////////
  static setBackgroundColor(ali_object) {
    const ali_backgroundColor = ali_object.backgroundColor
    const ali_backgroundColorTop = ali_object.backgroundColorTop
    const ali_backgroundColorBottom = ali_object.backgroundColorBottom
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const backgroundColor = ali_backgroundColor
      const backgroundColorTop = ali_backgroundColorTop
      const backgroundColorBottom = ali_backgroundColorBottom
      uni.setBackgroundColor({
        backgroundColor,
        backgroundColorTop,
        backgroundColorBottom,
        success: () =>{
          const ali_res ={
            success: true
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
  }

  static setBackgroundTextStyle(ali_object) {
    return uni.setBackgroundTextStyle(ali_object)
  }

  ////////  设置页面是否支持下拉  /////////
  static setCanPullDown(ali_object) {
    return coonsole.error("setCanPullDown暂不支持")
  }

  ////////  字体  /////////
  static loadFontFace(ali_object) {
    return uni.loadFontFace(ali_object)
  }

  //////////////////////  多媒体  ///////////////////////////

  ////////  图片  /////////
  static chooseImage(ali_object) {
    const ali_count = ali_object.count
    const ali_sizeType = ali_object.sizeType
    const ali_sourceType = ali_object.sourceType
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      const uni_count = ali_count
      const uni_sizeType = ali_sizeType
      const uni_sourceType = ali_sourceType
      uni.chooseImage({
        uni_count,
        uni_count,
        uni_sourceType,
        success: (res) =>{
          const ali_res = {
            tempFiles: res.tempFiles,
            apFilePaths: res.tempFilePaths
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
  }

  static compressImage(ali_object) {
    const ali_apFilePaths = ali_object.apFilePaths
    const ali_compressLevel = ali_object.compressLevel || 4
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) => {
      let uni_quality
      if(ali_compressLevel){
        uni_quality = 80
      }else{
        uni_quality = (ali_compressLevel+1)*25
      }
    
      TASK(ali_apFilePaths, (ali_apFilePath,callback)=>{
        const uni_src = ali_apFilePath
        uni.compressImage({
          src: uni_src,
          quality: uni_quality,
          success: (res) =>{
            const apFilePath = res.tempFilePath
            callback(apFilePath)
          }
        })
      }, (apFilePaths)=>{
        const ali_res ={
          apFilePaths
        }
        SUCCESS(ali_res)
      })
    },ali_success,ali_fail,ali_complete)
  }

  static getImageInfo(ali_object) {
    return uni.getImageInfo(ali_object)
  }

  static previewImage(ali_object) {
    return uni.previewImage(ali_object)
  }

  static saveImage(ali_object) {
    const ali_url = ali_object.url
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS)=>{
      const filpath = ali_url
      uni.saveImageToPhotosAlbum({
        filpath,
        success:() =>{
          const ali_res = {
            succcess: true
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
   
  }

  ////////  视频播放  /////////
  static createVideoContext(videoId) {
    return uni.createVideoContext(videoId)
  }

  ////////  音频播放  /////////
  static createInnerAudioContext() {
    return uni.createInnerAudioContext()
  }

  static getAvailableAudioSources(ali_object) {
    return console.log("getAvailableAudioSources暂不支持")
  }

  static getBackgroundAudioManager() {
    return uni.getBackgroundAudioManager()
  }

  static offAudioInterruptionBegin(ali_object) {
    return console.log("offAudioInterruptionBegin暂不支持")
  }

  static offAudioInterruptionEnd(ali_object) {
    return console.log("offAudioInterruptionEnd暂不支持")
  }

  static onAudioInterruptionBegin(ali_object) {
    return console.log("onAudioInterruptionBegin暂不支持")
  }

  static onAudioInterruptionEnd(ali_object) {
    return console.log("onAudioInterruptionEnd暂不支持")
  }

  //////////////////////  缓存  ///////////////////////////

  static clearStorage() {
    return uni.clearStorage()
  }

  static clearStorageSync() {
    return uni.clearStorageSync()
  }

  static getStorage(ali_object) {
    return uni.getStorage(ali_object)
  }

  static getStorageInfo(ali_object) {
    return uni.getStorageInfo(ali_object)
  }

  static getStorageInfoSync() {
    return uni.getStorageInfoSync()
  }

  static getStorageSync(ali_object) {
    const ali_key = ali_object.key
    ali_object = null
    const uni_res = uni.getStorageSync(ali_key)
    const ali_res = {
      success: true,
      data: uni_res
    }
    return ali_res
  }

  static removeStorage(ali_object) {
    return uni.removeStorage(ali_object)
  }

  static removeStorageSync(ali_object) {
    const ali_key = ali_object.key
    ali_object = null
    return uni.removeStorageSync(ali_key)
  }

  static setStorage(ali_object) {
    return uni.setStorage(ali_object)
  }

  static setStorageSync(ali_object) {
    const ali_key = ali_object.key
    const ali_data = ali_object.data
    ali_object = null
    return uni.setStorageSync(ali_key,ali_data)
  }

  

 
  

  
  



	

	

	

	
	

	
	
	

	
	

	
	



	

	
  


	

	

	
}