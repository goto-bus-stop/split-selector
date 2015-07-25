var eq = require('assert').deepEqual
var split = require('./')
var read = require('fs').readFileSync

var cases = read('./test.txt', 'utf8').trim().split('\n\n')

cases.forEach(function (test) {
  var output = test.split('\n')
  var input = output.shift()

  eq(split(input), output.map(function (s) { return s.trim() }))
})

console.log('ok')
