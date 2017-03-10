import $ from 'jquery'
import parseUrl from './url.js'

export const getUserList = () => {
  let baseApiUrl = ''
  if (baseApiUrl === '') {
    baseApiUrl = parseUrl(window.location.href)
  }
  let api = 'login'
  let apiUrl = baseApiUrl + 'integratest/' + api
  $.ajax({
    url: apiUrl,
    type: 'POST',
    data: {
      username: 'yjf@spacetech.com.cn',
      password: 'zaq1234'
    },
    success: function (data) {
      console.log(data)
    },
    error: function () {
      console.log('出错了！')
    }
  })
}
