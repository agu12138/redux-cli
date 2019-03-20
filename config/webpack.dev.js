let dll=require("./webpack.common");
let webpack =require("webpack");
let tools=require("../tools/nodeTools");
tools.deleteFolder("./dist");
webpack(dll,function(err,stat){
        if(err){ console.log(err);return}
        /*let build=require("./webpack.dev-server");
        webpack(build,function(err,stat){
            if(err){console.log("项目打包失败")}*/
            tools.copyFile("./src/static","./dist/common");
            var process = require('child_process');
            process.exec("webpack-dev-server --config ./config/webpack.dev-server.js",function (error, stdout, stderr) {
                if (error !== null) {
                  console.log('exec error: ' + error);
                }
                console.log(stdout)
        });
        //})
});

