let path=require("path");
let webpack=require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
let fs=require("fs");
let entry={};
let files=fs.readdirSync("./src/entry");
//let commons=fs.readdirSync("./src/common");
let plugins=[];
let  reg=/\[.*\]/ig;
files.forEach(function(f,hash){
    entry[f.replace(/.ts$|.tsx$/,'').replace(reg,"")]="./src/entry/"+f;
    plugins.push( new HtmlWebpackPlugin({
        filename:'../'+f.replace(/.ts$|.tsx$/,'').replace(reg,"")+".html",
        template: './src/index.html',
       // javascripts:commons,
        title:f.match(reg)[0].slice(1,-1),
        chunks:[f.replace(/.ts$|.tsx$/,'').replace(reg,"")],
        minify:{
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
    }))
})
module.exports={
    entry:entry,
    output:{
        path:path.join(__dirname,"../dist/js"),
        filename:"[name].[hash].js"
    },
    mode:"development",
    module: {
        rules: [
                   { 
                       test: /\.css$/,  
                       use:["css-loader","style-loader"]
                   },
                   {
                       test:/\.ts$|.tsx$/,
                       use:[
                           "ts-loader"
                         ]
                   }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx','.tsx'],
    
      },
      plugins: [
       ...plugins,
       new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require("../dist/common/react-dll.json"),
        name: "reactdll",
      })
      ]
}