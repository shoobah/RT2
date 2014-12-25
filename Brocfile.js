// Brocfile.js
var concat = require('broccoli-concat'),  
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees'),
    filterReact = require('broccoli-react');

// handle jsx files
var jsxs = concat('app/',{
    inputFiles: ['**/*.jsx'],
    outputFile: '/assets/reacts.js'
});
jsxs = filterReact(jsxs,{extensions: ['js'], transform: { harmony: true }});

// grab any static assets
var public = pickFiles('public', {  
  srcDir: '.',
  destDir: '.'
});
var vendor = pickFiles('bower_components',{
    srcDir: '.',
    destDir: '/assets/vendor'
});
// and merge all the trees together
module.exports = mergeTrees([jsxs, styles, public, vendor]);  
