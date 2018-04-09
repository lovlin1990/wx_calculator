// pages/test/test.js
var rpn = require('../../utils/rpn.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '0',
    resultTop: '',
    pointNum: 0,
    numList: []
  },
  /**
   * 清空事件
   */
  clearClick: function(event) {
    this.setData({
      result: '0',
      resultTop: '',
      isNum: true
    })
  },
  /**
   * 键盘事件
   */
  numClick: function (event) {
    let flag = event.target.dataset.flag
    let formula = this.data.resultTop
    if (flag === '='){
      // ‘=’处理
      if (formula === ''){
        return
      } else {
        if ('+-*/.'.indexOf(formula.toString().slice(-1)) > -1) {
          return
        }
      }
      let res = rpn.calCommonExp(formula)
      this.setData({
        result: res
      })
    } else if (flag === '<'){
      // 删除一位字符
      let pointNumV = this.data.pointNum
      if (formula === ''){
        return
      }
      let lastNum = formula.toString().slice(-1)
      if (lastNum.indexOf('.') > -1){
        pointNumV = 0
      }
      let leftRes = formula.toString().substr(0, formula.length-1)
      this.setData({
        resultTop: leftRes,
        pointNum: pointNumV
      })
    } else if (flag === '-/+') {
      // 正负号
      if (formula === '') {
        formula = '-0'
      } else {
        let formulaStr = formula.toString()
        if (formulaStr.substr(0, 1) === '-') {
          formula = formulaStr.substr(1)
        } else {
          formula = '-' + formula
        }
      }
      
      let leftRes = formula
      this.setData({
        resultTop: leftRes
      })
    } else if (flag === '.') {
      // 小数点
      let pointNumV = this.data.pointNum
      if (formula === '') {
        formula = '0.'
      } else {
        if (pointNumV === 0){
          formula += flag
          ++pointNumV
        } else {
          return
        }
      }

      let leftRes = formula
      this.setData({
        resultTop: leftRes,
        pointNum: pointNumV
      })
    } else if (flag === '+' || flag === '-' || flag === '*' || flag === '/') {
      // +-*/
      if (formula === '') {
        formula = '0' + flag
      } else {
        if ('+-*/.'.indexOf(formula.toString().slice(-1)) > -1) {
          return
        } else {
          formula += flag
        }
      }

      let leftRes = formula
      this.setData({
        resultTop: leftRes,
        pointNum: 0
      })
    } else {
      let res = formula + flag
      this.setData({
        resultTop: res
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})