const r = {
  protocol: /([^\/]+:)\/\/(.*)/i,
  host: /(^[^\:\/]+)((?:\/|:|$)?.*)/,
  port: /\:?([^\/]*)(\/?.*)/,
  pathname: /([^\?#]+)(\??[^#]*)(#?.*)/
}

const apiurl = parseUrl(window.location.href)

export function parseUrl (url) {
  var tmp = {}
  var res = {}
  let result = ''
  res['href'] = url
  for (let p in r) {
    tmp = r[p].exec(url)
    res[p] = tmp[1]
    url = tmp[2]
    if (url === '') {
      url = '/'
    }
    if (p === 'pathname') {
      res['pathname'] = tmp[1]
      res['search'] = tmp[2]
      res['hash'] = tmp[3]
      result = tmp[1]
    }
  }

  let result1 = result.substring(1, result.length)
  if (result1.indexOf('/') > -1) {
    result = result.substring(0, result1.indexOf('/') + 2)
  }

  if (result.substring(result.length - 1) !== '/') {
    result += '/'
  }

  return 'http://' + window.location.host + result
}

export default {apiurl}
