import PROMISE from '../node_modules/oneutil/PROMISE'
import TASK from '../node_modules/oneutil/TASK'
import serverless from './serverless/serverless'

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
		return console.warn("TO DO ... WANGYEWEI")
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
		return console.warn("offComponentError暂不支持")
  }
  
  static offError(callback) {
		return uni.offError(callback)
  }
  
  static offUnhandledRejection(callback) {
		return console.warn("offUnhandledRejection暂不支持")
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
		return console.warn("onComponentError暂不支持")
  }

  static onError(callback) {
		return uni.onError(callback)
  }
  
  static onUnhandledRejection(callback) {
		return console.warn("onUnhandledRejection暂不支持")
  }

  //////////////////////  界面  ///////////////////////////

  /////// 导航栏 /////
  static getTitleColor(ali_object) {
		return console.warn("getTitleColor暂不支持")
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
    const title = ali_title
    const backgroundColor = ali_backgroundColor
    const frontColor = "#ffffff"
    const uni_object1 ={ title }
    const uni_object2 ={ frontColor,backgroundColor }

    PROMISE((SUCCESS) => {
      uni.setNavigationBarTitle(uni_object1)
      uni.setNavigationBarColor(uni_object2)

      const result = {
        errMsg: 'setNavigationBar: ok'
      }

      SUCCESS(result)
    },ali_success,ali_fail,ali_complete)
    
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
        success: uni_res =>{
          const ali_res ={
            index: uni_res.tapIndex
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
		return console.warn("chooseAlipayContact暂不支持")
  }

  static chooseContact(object) {
		return console.warn("chooseContactt暂不支持")
  }

  static choosePhoneContact(object) {
		return console.warn("choosePhoneContact暂不支持")
  }

  ////////  选择城市  /////////
  static chooseCity(object) {
		return console.warn("chooseCity暂不支持")
  }

  static onLocatedComplete(object) {
		return console.warn("onLocatedComplete暂不支持")
  }

  static setLocatedCity(object) {
		return console.warn("setLocatedCity暂不支持")
  }

  static regionPicker(object) {
		return console.warn("regionPicker暂不支持")
  }

  ////////  选择日期  /////////
  static datePicker(object) {
		return console.warn("datePicker暂不支持")
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
		return console.warn("getMapInfo暂不支持")
  }

  ////////  计算路径  /////////
  static calculateRoute(object) {
		return console.warn("calculateRoute暂不支持")
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
    return console.warn("optionsSelect暂不支持")
  }

  ////////  级联选择  /////////
  static optionsSelect(ali_object) {
    return console.warn("multiLevelSelect暂不支持")
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
      const count = ali_count
      const sizeType = ali_sizeType
      const sourceType = ali_sourceType
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
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

  //////////////////////  文件  ///////////////////////////

  static getFileInfo(ali_object) {
    const ali_apFilePath = ali_object.apFilePath
    const ali_digestAlgorithm = ali_object.digestAlgorithm || "md5"
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const filePath = ali_apFilePath
      const digestAlgorithm = ali_digestAlgorithm
      uni.getFileInfo({
        filePath,
        digestAlgorithm,
        success: uni_res =>{
          const ali_res ={
            size: uni_res.size,
            digest: uni_res.digest
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
    
  }

  static getSavedFileInfo(ali_object) {
    const ali_apFilePath = ali_object.apFilePath
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const filePath = ali_apFilePath
      uni.getSavedFileInfo({
        filePath,
        success: uni_res =>{ 
          const ali_res = {
            size: uni_res.size,
            createTime: uni_res.createTime
          }
          SUCCESS(ali_res)
        }
      })
      
    },ali_success,ali_fail,ali_complete)
    
  }

  static getSavedFileList(ali_object) {
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      uni.getSavedFileList({
        success: uni_res =>{ 
          const ali_fileList = uni_res.fileList.map(file =>{ 
            return {
              size: file.size,
              createTime: file.createTime,
              apFilePath: file.filePath
            }
          })
          const ali_res = {
            fileList: ali_fileList
          }
          SUCCESS(ali_res)
        }
      })
      
    },ali_success,ali_fail,ali_complete)
    
  }

  static openDocument(ali_object) {
     return uni.openDocument(ali_object)
  }

  static removeSavedFile(ali_object) {
    const ali_apFilePath = ali_object.apFilePath
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    const filePath = ali_apFilePath
    const success = ali_success
    const fail = ali_fail
    const complete = ali_complete
    const uni_object = {
      filePath,
      success,
      fail,
      complete
    }
    return uni.removeSavedFile(uni_object)
  }

  static saveFile(ali_object) {
    const ali_apFilePath = ali_object.apFilePath
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const tempFilePath = ali_apFilePath
      uni.saveFile({
        tempFilePath,
        success: uni_res =>{
          const ali_res ={
            apFilePath: uni_res.savedFilePath
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
    
  }

  //////////////////////  位置  ///////////////////////////
  static chooseLocation(ali_object) {
		return uni.chooseLocation(ali_object) 
  }

  static getLocation(ali_object) {
    const ali_type = ali_object.type || 0
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    let uni_type = null
    if(ali_type == 0){
      uni_type = "wgs84"
    }else{
      uni_type = "gcj02"
    }
    PROMISE((SUCCESS) =>{
      const type = uni_type
      uni.getLocation({
        type,
        success: uni_res =>{ 
          const ali_res = {
            longitude: uni_res.longitude,
            latitude: uni_res.latitude,
            accuracy: uni_res.accuracy,
            horizontalAccuracy: uni_res.horizontalAccuracy,
          }
          SUCCESS(ali_res)
        }
      })
      
    },ali_success,ali_fail,ali_complete)
    
  }

  static openLocation(ali_object) {
    const ali_longitude = ali_object.longitude
    const ali_latitude = ali_object.latitude
    const ali_keyword = ali_object.name
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    const longitude = ali_longitude
    const latitude = ali_latitude
    const name = ali_keyword
    const success = ali_success
    const fail = ali_fail
    const complete = ali_complete
    const uni_object = {
      longitude,
      latitude,
      name,
      success,
      fail,
      complete
    }

		return uni.openLocation(uni_object) 
  }

  //////////////////////  网络  ///////////////////////////

  ////////  发起请求  /////////
  static request(ali_object) {
    const ali_url = ali_object.url
    const ali_headers = ali_object.headers
    const ali_method = ali_object.method || "GET"
    const ali_data = ali_object.data
    const ali_timeout = ali_object.timeout || 30000
    const ali_dataType = ali_object.dataType || "JSON"
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const url = ali_url
      const header = ali_headers
      const method = ali_method
      const data = ali_data
      const timeout = ali_timeout
      const dataType = ali_dataType
      uni.request({
        url,
        header,
        method,
        data,
        timeout,
        dataType,
        success: uni_res =>{ 
          const ali_res = {
            data: uni_res.data,
            statusCode: uni_res.statusCode,
            headers: uni_res.header,
            cookies: uni_res.cookies,
          }
          SUCCESS(ali_res)
        }
      })
      
    },ali_success,ali_fail,ali_complete)
  }

  ////////  上传、下载  /////////
  static downloadFile(ali_object) {
		const ali_url = ali_object.url
    const ali_header = ali_object.header
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const url = ali_url
      const header = ali_header
      uni.downloadFile({
        url,
        header,
        success: uni_res =>{ 
          const ali_res = {
            apFilePath: uni_res.tempFilePath,
            statusCode: uni_res.statusCode, 
          }
          SUCCESS(ali_res)
        }
      })
      
    },ali_success,ali_fail,ali_complete)
  }

  static uploadFile(ali_object) {
		const ali_url = ali_object.url
    const ali_filePath = ali_object.filePath
    const ali_fileName = ali_object.fileName
    const ali_fileType = ali_object.fileType
    const ali_header = ali_object.header
    const ali_formData = ali_object.formData
		const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      const url = ali_url
      const header = ali_header
      const filePath = ali_filePath
      const fileType = ali_fileType
      const name = ali_fileName
      const formData = ali_formData
      uni.uploadFile({
        url,
        header,
        filePath,
        fileType,
        name,
        formData,
        success: uni_res =>{ 
          const ali_res = {
            statusCode: uni_res.statusCode,
            data: uni_res.data, 
            header:{}
          }
          SUCCESS(ali_res)
        }
      })
      
    },ali_success,ali_fail,ali_complete)
  }

  ////////  webScoket  /////////
  static connectSocket(ali_object) {
		return uni.connectSocket(ali_object)
  }

  static onSocketOpen(callback) {
		return uni.onSocketOpen(callback)
  }

  static onSocketError(callback) {
		return uni.onSocketError(callback)
  }

  static sendSocketMessage(ali_object) {
		return uni.sendSocketMessage(ali_object)
  }

  static onSocketMessage(callback) {
		return uni.onSocketMessage(callback)
  }

  static closeSocket(ali_object) {
		return uni.closeSocket(ali_object)
  }

  static onSocketClose(callback) {
		return uni.onSocketClose(callback)
  }

  static offSocketClose(callback) {
		return console.log("offSocketClose暂不支持")
  }

  static offSocketMessage(callback) {
		return console.log("offSocketMessage暂不支持")
  }

  static offSocketOpen(ali_object) {
		return console.log("offSocketOpen暂不支持")
  }

  static offSocketError(callback) {
		return console.log("offSocketError暂不支持")
  }

  //////////////////////  设备  ///////////////////////////

  ////////  系统消息  /////////
  static getSystemInfo(ali_object) {
		return uni.getSystemInfo(ali_object)
  }

  static getSystemInfoSync() {
		return uni.getSystemInfoSync()
  }

  ////////  网络状态  /////////
  static getNetworkType(ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      uni.getNetworkType({
        success: uni_res =>{
          const ali_res = {
            networkType: uni_res.networkType,
            networkAvailable: true
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
		
  }

  static onNetworkStatusChange(callback) {
    return uni.onNetworkStatusChange(callback)	
  }

  static offNetworkStatusChange(callback) {
    return console.log("offNetworkStatusChange暂不支持")
  }

  ////////  摇一摇  /////////
  static watchShake(ali_object) {
    return console.log("watchShake暂不支持")
  }

  ////////  震动  /////////
  static vibrate(ali_object) {
    return console.log("vibrate暂不支持")	
  }

  static vibrateLong(ali_object) {
    return uni.vibrateLong(ali_object)	
  }

  static vibrateShort(ali_object) {
    return uni.vibrateShort(ali_object)	
  }

  ////////  加速度计  /////////
  static onAccelerometerChange(callback) {
    return uni.onAccelerometerChange(callback)	
  }

  static offAccelerometerChange(callback) {
    return uni.offAccelerometerChange(callback)	
  }

  ////////  陀螺仪  /////////
  static onGyroscopeChange(callback) {
    return uni.onGyroscopeChange(callback)	
  }

  static offGyroscopeChange(callback) {
    return console.log("offGyroscopeChange暂不支持")	
  }

  ////////  罗盘  /////////
  static onCompassChange(callback) {
    return uni.onCompassChange(callback)	
  }

  static offCompassChange(callback) {
    return uni.offCompassChange(callback)	
  }

  ////////  拨打电话  /////////
  static makePhoneCall(ali_object) {
    return uni.makePhoneCall(ali_object)	
  }

  ////////  获取服务器时间  /////////
  static getServerTime(ali_object) {
    return console.log("getServerTime暂不支持")	
  }

  ////////  用户截屏事件  /////////
  static onUserCaptureScreen(callback) {
    return uni.onUserCaptureScreen(callback)	
  }

  static offUserCaptureScreen(callback) {
    return console.log("offUserCaptureScreen暂不支持")	
  }

  ////////  屏幕亮度  /////////
  static getScreenBrightness(ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      uni.getScreenBrightness({
        success: uni_res =>{
          const ali_res = {
            brightnes: uni_res.value,
          }
          SUCCESS(ali_res)
        }
      })
    },ali_success,ali_fail,ali_complete)
    
  }

  static setScreenBrightness(ali_object) {
    const ali_brightness = ali_object.brightness
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    const value = ali_brightness
    const success = ali_success
    const fail = ali_fail
    const complete = ali_complete
    const uni_object = {
      value,
      success,
      fail,
      complete
    }
    return uni.setScreenBrightness(uni_object)
  }

  static setKeepScreenOn(ali_object) {
    return uni.setKeepScreenOn(ali_object)	
  }

  ////////  设置  /////////
  static getSetting(ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      uni.getSetting({
        success: uni_res =>{
          const ali_res = {
            authSetting: {
              location: uni_res.authSetting['scope.userLocation'],
              album: uni_res.authSetting['scope.writePhotosAlbum'],
              camera: uni_res.authSetting['scope.camera'],
              alipaysports: uni_res.authSetting['scope.werun'],
              phoneNumber: "000000",
              aliaddress: uni_res.authSetting['scope.address'],
              userinfo: uni_res.authSetting['scope.userInfo'],
              userLocationBackground: uni_res.authSetting['scope.userLocationBackground'],
              record: uni_res.authSetting['scope.record'],
              invoice: uni_res.authSetting['scope.invoice'],
              invoiceTitle: uni_res.authSetting['scope.invoiceTitle'],
              _RVA_APPID: null
            }
          }
          SUCCESS(ali_res)
        }
      })

    },ali_success,ali_fail,ali_complete)
    
  }

  static openSetting(ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      uni.openSetting({
        success: uni_res =>{
          const ali_res = {
            authSetting: {
              location: uni_res.authSetting['scope.userLocation'],
              album: uni_res.authSetting['scope.writePhotosAlbum'],
              camera: uni_res.authSetting['scope.camera'],
              werun: uni_res.authSetting['scope.werun'],
              address: uni_res.authSetting['scope.address'],
              userinfo: uni_res.authSetting['scope.userInfo'],
              userLocationBackground: uni_res.authSetting['scope.userLocationBackground'],
              record: uni_res.authSetting['scope.record'],
              invoice: uni_res.authSetting['scope.invoice'],
              invoiceTitle: uni_res.authSetting['scope.invoiceTitle']
            }
          }
          SUCCESS(ali_res)
        }
      })

    },ali_success,ali_fail,ali_complete)
    
  }

  ////////  添加手机联系人  /////////
  static addPhoneContact(ali_object) {
    return uni.addPhoneContact(ali_object)	
  }

  ////////  权限引导  /////////
  static showAuthGuide (ali_object) {
    return console.log("showAuthGuide暂不支持")
  }

  ////////  扫码  /////////
  static scan(ali_object) {
    const ali_scanType = ali_object.scanType || ['qrCode','barCode']
    const ali_hideAlbum = ali_object.hideAlbum || false
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    const scanType = ali_scanType
    const onlyFromCamera = ali_hideAlbum
    PROMISE((SUCCESS) =>{
      uni.scanCode({
        scanType,
        onlyFromCamera,
        success: uni_res =>{
          const ali_res = {
            code: "code data",
            qrCode: "qrCode data",
            barCode: "barCode data",
            codeContent: uni_res.result,
            imageChannel: "",
            rawData: "",
            charSet:uni_res.charSet,
            path: uni_res.path
          }
          SUCCESS(ali_res)
        }
      })

    },ali_success,ali_fail,ali_complete)
  }

  ////////  内存不足警告  /////////
  static onMemoryWarning (callback) {
    return uni.onMemoryWarning (callback)	
  }

  static offMemoryWarning (callback) {
    return console.log("offMemoryWarning暂不支持")
  }

  ////////  获取设备电量  /////////
  static getBatteryInfo (ali_object) {
    return console.log("getBatteryInfo暂不支持")	
  }

  static getBatteryInfoSync (ali_object) {
    return console.log("getBatteryInfoSync暂不支持")	
  }

  ////////  传统蓝牙  /////////
  static openBluetoothAdapter (ali_object) {
    return uni.openBluetoothAdapter (ali_object)	
  }

  static startBluetoothDevicesDiscovery (ali_object) {
    return uni.startBluetoothDevicesDiscovery (ali_object)	
  }

  static onBluetoothDeviceFound (callback) {
    uni.onBluetoothDeviceFound (uni_res =>{
      const ali_devices = uni_res.devices.map(device =>{ 
        return {
          name: device.name,
          deviceName: device.name,
          deviceId: device.deviceId,
          localName: device.localName,
          RSSI: device.RSSI,
          advertisData: device.advertisData,
          advertisServiceUUIDs: device.advertisServiceUUIDs,
          serviceData: device.serviceData
        }
      })
      const ali_res = {
        devices:ali_devices
      }
      callback(ali_res)
    })	
  }

  static stopBluetoothDevicesDiscovery (ali_object) {
    return uni.stopBluetoothDevicesDiscovery (ali_object)	
  }

  static onBluetoothAdapterStateChange (callback) {
    return uni.onBluetoothAdapterStateChange (callback)	
  }

  static getConnectedBluetoothDevices (ali_object) {
    const ali_deviceId = ali_object.deviceId
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    const services = [ali_deviceId]
    const success = ali_success
    const fail = ali_fail
    const complete = ali_complete
    const uni_object = {
      services,
      success,
      fail,
      complete
    }
    return uni.getConnectedBluetoothDevices (uni_object)	
  }

  static getBluetoothDevices (ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      uni.getBluetoothDevices ({
        success:uni_res =>{
        const ali_devices = uni_res.devices.map(device =>{ 
          return {
            name: device.name,
            deviceName: device.name,
            deviceId: device.deviceId,
            localName: device.localName,
            RSSI: device.RSSI,
            manufacturerData: device.advertisData,
            advertisServiceUUIDs: device.advertisServiceUUIDs,
            serviceData: device.serviceData
          }
        })
        const ali_res = {
          devices: ali_devices
        }
        SUCCESS(ali_res)
      }
      })	

    },ali_success,ali_fail,ali_complete)
    
  }

  static getBluetoothAdapterState (ali_object) {
    return uni.getBluetoothAdapterState(ali_object)
  }

  static closeBluetoothAdapter (ali_object) {
    return uni.closeBluetoothAdapter(ali_object)
  }

  static offBluetoothAdapterStateChange (callback) {
    return console.log("offBluetoothAdapterStateChange暂不支持")	
  }

  static offBluetoothDeviceFound (callback) {
    return console.log("getBatteryInfoSync暂不支持")	
  }

  ////////  低功耗蓝牙  /////////
  static connectBLEDevice (ali_object) {
    return uni.createBLEConnection(ali_object)	
  }

  static disconnectBLEDevice (ali_object) {
    return uni.closeBLEConnection(ali_object)	
  }

  static getBLEDeviceCharacteristics (ali_object) {
    const uni_res = uni.getBLEDeviceCharacteristics(ali_object)	
    const ali_characteristics = uni_res.characteristics.map(characteristic =>{ 
      return {
        characteristicId: characteristic.uuid,
        properties: characteristic.properties,
        value: "",
        localName: "",
      }
    })
    const ali_res = {
      characteristics: ali_characteristics 
    }
    return ali_res
  }

  static getBLEDeviceServices (ali_object) {
    const uni_res = uni.getBLEDeviceServices(ali_object)	
    const ali_services = uni_res.services.map(service =>{ 
      return {
        serviceId: service.uuid,
        isPrimary: service.isPrimary,
      }
    })
    const ali_res = {
      services: ali_services 
    }
    return ali_res 
  }

  static notifyBLECharacteristicValueChange (ali_object) {
    return uni.notifyBLECharacteristicValueChange(ali_object)	
  }

  static onBLECharacteristicValueChange (callback) {
    uni.onBLECharacteristicValueChange(uni_res =>{
      const ali_res = {
        deviceId: uni_res.deviceId,
        serviceId: uni_res.serviceId,
        characteristicId: uni_res.characteristicId,
        value: uni_res.value,
        connected: true
      }
      callback(ali_res)
    })	
  }

  static onBLEConnectionStateChange (callback) {
    return uni.onBLEConnectionStateChange(callback)	
  }

  static readBLECharacteristicValue (ali_object) {
    const uni_res =  uni.readBLECharacteristicValue(ali_object)	
    const ali_res = {
      deviceId: uni_res.deviceId,
      serviceId: uni_res.serviceId,
      characteristicId: uni_res.characteristicId,
      value: uni_res.value,
    }
    return ali_res
  }

  static writeBLECharacteristicValue (ali_object) {
    const ali_deviceId = ali_object.deviceId
    const ali_serviceId = ali_object.serviceId
    const ali_characteristicId = ali_object.characteristicId
    const ali_value = ali_object.value
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    const deviceId = ali_deviceId
    const serviceId = ali_serviceId
    const characteristicId = ali_characteristicId
    const value = [ali_value]
    const success = ali_success
    const fail = ali_fail
    const complete = ali_complete
    const uni_object = {
      deviceId,
      serviceId,
      characteristicId,
      value,
      success,
      fail,
      complete,
    }
    return uni.writeBLECharacteristicValue(uni_object)
  }

  static offBluetoothAdapterStateChange (callback) {
    return console.log("offBluetoothAdapterStateChange暂不支持")	
  }

  static offBluetoothDeviceFound (callback) {
    return console.log("offBluetoothDeviceFound暂不支持")	
  }

  ////////  iBeacon  /////////
  static getBeacons (ali_object) {
    const ali_success = ali_object.success
    const ali_fail = ali_object.fail
    const ali_complete = ali_object.complete
    ali_object = null
    PROMISE((SUCCESS) =>{
      uni.getBeacons({
        success: uni_res =>{
          const ali_res = {
            beacons: uni_res.beacons,
            errCode: "0",
            errorMsg: "ok"
          }
          SUCCESS(ali_res)
        }
      })

    },ali_success,ali_fail,ali_complete)
  }

  static startBeaconDiscovery (ali_object) {
    return uni.startBeaconDiscovery (ali_object)
  }

  static stopBeaconDiscovery (ali_object) {
    return uni.stopBeaconDiscovery (ali_object)
  }

  static onBeaconServiceChange (ali_object) {
    const ali_success = ali_object.success
    ali_object = null
    return uni.onBeaconServiceChange (ali_success)
  }

  static onBeaconUpdate (ali_object) {
    const ali_success = ali_object.success
    ali_object = null
    return uni.onBeaconUpdate (ali_success)
  }

  //////////////////////  数据安全  ///////////////////////////
  static getBeacons (ali_object) {
    console.log("getBeacons暂不支持")	
  }

  //////////////////////  分享  ///////////////////////////
  static showSharePanel () {
    return uni.showShareMenu()
  }

  static hideShareMenu (ali_object) {
    return uni.hideShareMenu(ali_object)
  }

  

  ////////////////////////// serverless ///////////////////////////

  static get serverless() {
    return serverless
  }


	

	
}