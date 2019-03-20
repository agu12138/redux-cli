let dll=require("./webpack.common");
let webpack =require("webpack");
let tools=require("../tools/nodeTools");
tools.deleteFolder("./dist");
tools.copyFile("./src/static","./dist/common");
webpack(dll,function(err,stat){
        if(err){ console.log(err);return}
        let build=require("./webpack.config");
        webpack(build,function(err,stat){
            if(err){console.log("项目打包失败")}
            console.log("编译成功")
        })
});

