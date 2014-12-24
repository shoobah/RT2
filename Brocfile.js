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

// concat the JS
var scripts = concat('app/', {  
  inputFiles: ['**/*.js'],
  outputFile: '/assets/scripts.js'
});
// concat the CSS
var styles = concat('app/styles', {  
  inputFiles: ['**/*.css'],
  outputFile: '/assets/styles.css'
});
// grap any static assets
var public = pickFiles('public', {  
  srcDir: '.',
  destDir: '.'
});
var vendor = pickFiles('bower_components',{
    srcDir: '.',
    destDir: '/assets/vendor'
});
// and merge all the trees together
module.exports = mergeTrees([scripts, jsxs, styles, public, vendor]);  
