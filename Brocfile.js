// Brocfile.js
var concat = require('broccoli-concat'),  
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees'),
    instrument = require('broccoli-debug').instrument,
    filterReact = require('broccoli-react'),
    browserify = require('broccoli-browserify');

var jox = pickFiles('app',{
    srcDir: '.',
   	files:['**/*.js'],
    destDir: '/assets/js'
});

jox = instrument.print(jox);

jsxs = filterReact(jox,{extensions: ['js'], transform: { harmony: true }});
jsxs = instrument.print(jsxs);

// handle jsx files
var browserified = browserify(jsxs,{
	entries: ['./assets/js/main.js']
});

browserified = instrument.print(browserified);

// grab any static assets
var public = pickFiles('public', {  
  srcDir: '.',
  destDir: '.'
});

public = instrument.print(public);

// and merge all the trees together
module.exports = mergeTrees([jox, browserified, public], {overwrite: true});  
