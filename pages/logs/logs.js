/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 语云博客  www.eyuyun.com
 * github:    https://github.com/iamxjb/winxin-app-eyuyun.com
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.eyuyun.com All rights reserved.
 * 
 */

var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
