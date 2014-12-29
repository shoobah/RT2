// Brocfile.js
var concat = require('broccoli-concat'),
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees'),
    filterReact = require('broccoli-react'),
    browserify = require('broccoli-browserify');

var appJsFiles = pickFiles('app', {
    srcDir: '.',
    files: ['**/*.js'],
    destDir: '/assets/js'
});

jsxs = filterReact(appJsFiles, {
    extensions: ['js'],
    transform: {
        harmony: true
    }
});

// handle jsx files
var browserified = browserify(jsxs, {
    entries: ['./assets/js/main.js']
});

// grab any static assets
var public = pickFiles('public', {
    srcDir: '.',
    destDir: '.'
});

var bootstrap = pickFiles('./node_modules/bootstrap/dist', {
    srcDir: '.',
    destDir: '/assets/bootstrap'
});

var jQuery = pickFiles('./node_modules/jquery/dist', {
    srcDir: '.',
    destDir: '/assets/jquery'
});

// and merge all the trees together
module.exports = mergeTrees([
    appJsFiles,
    browserified,
    public,
    bootstrap,
    jQuery
], {
    overwrite: true
});
