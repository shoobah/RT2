var compileSass = require('broccoli-sass'),
    concatenate = require('broccoli-concat'),
    mergeTrees = require('broccoli-merge-trees'),
    pickFiles = require('broccoli-static-compiler'),
    uglifyJs = require('broccoli-uglify-js'),
    filterReact = require('broccoli-react'),
    app = 'app',
    appCss,
    appHtml,
    appJs;

/** 
 * move the index.html file from the project /app folder
 * into the build production folder
 */
appHtml = pickFiles(app, {
    srcDir: '/',
    files: ['index.html'],
    destDir: '/production'
});

/**
 * concatenate and compress all of our JavaScript files in
 * the project /app folder into a single app.js file in
 * the build production folder
 */
appJs = filterReact(appJs,{extensions: ['js'], transform: { harmony: true }});
appJs = concatenate(app, {
    inputFiles: ['**/*.js'],
    outputFile: '/production/app.js',
    header: '/** Copyright shoobah. 2014 **/'
});
appJs = uglifyJs(appJs, {
    compress: true
});

/**
 * compile all of the SASS in the project /resources folder into
 * a single app.css file in the build production/resources folder
 */
appCss = compileSass(
    ['resources/sass'],
    '/app.scss',
    'production/resources/app.css'
);

// merge HTML, JavaScript and CSS trees into a single tree and export it
module.exports = mergeTrees([appHtml, appJs, appCss]);
