({
    appDir: "./src",
    mainConfigFile : "src/app/main.js",
    baseUrl: "app",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "./build",
    wrap: true,
    optimize: "uglify",
    optimizeCss: 'standard',
    fileExclusionRegExp: /^\./,
    modules: [
        {
            name: "main",
            exclude: [
                "mobil/main",
                "motor/main",
                "rumah/main"
            ]
        },
        {
            name: 'mobil/main',
            exclude:[
                'jquery',
                'underscore',
                'backbone',
                'bootstrap',
                'text'
            ]
        },
        {
            name: 'motor/main',
            exclude:[
                'jquery',
                'underscore',
                'backbone',
                'bootstrap',
                'text'
            ]
        },
        {
            name: 'rumah/main',
            exclude:[
                'jquery',
                'underscore',
                'backbone',
                'bootstrap',
                'text'
            ]
        },
    ]
})
