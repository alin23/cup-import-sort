importSort = require('import-sort').default
babylonParser = require 'import-sort-parser-babylon'
styleStructured = require('import-sort-style-structured').default

buffers = []
process.stdin.on 'data', (buffer) ->
    buffers.push buffer if buffer
process.stdin.on 'end', ->
    console.log importSort(Buffer.concat(buffers).toString(), babylonParser, styleStructured).code
