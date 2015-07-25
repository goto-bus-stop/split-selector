// attr regex, from Sizzle via css-what:
// https://github.com/fb55/css-what/blob/3083ac06/index.js#L8
// https://github.com/jquery/sizzle/blob/a7020477/src/sizzle.js#L84
var attr = /^\s*((?:\\.|[\w\u00c0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])(.*?)\3|(#?(?:\\.|[\w\u00c0-\uFFFF\-])*)|)|)\s*(i)?\]/
// all the non-attr things
var normalBits = /^([^\[\],]+)/

module.exports = function splitSelector(selector) {
  var i = 0
  var chunk = selector
  var parts = []
  var current = ''
  var match

  while (chunk = chunk.slice(i)) {
    if (match = normalBits.exec(chunk)) {
      i = match[0].length
      current += match[0]
    }
    else if (chunk[0] === ',') {
      parts.push(current.trim())
      current = ''
      i = 1
    }
    else if (chunk[0] === '[') {
      match = attr.exec(chunk.slice(1))
      if (match) {
        current += '[' + match[0]
        i = 1 + match[0].length
      }
    }
    else {
      throw new Error('Could not parse: ' + chunk)
    }
  }

  if (current) parts.push(current.trim())

  return parts
}