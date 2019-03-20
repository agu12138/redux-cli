let path=require("path");
let webpack=require('webpack');
module.exports={
    entry:[
        "react",
        "redux",
        "react-dom",
        "react-redux"
    ],
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"js/react-dll.js",
        library: "reactdll"
    },
    resolve: {
        extensions: ['.js', '.jsx','.tsx'],
    
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
    plugins:[
        new webpack.DllPlugin({
            context: __dirname,
            name: "reactdll",
            path: path.join(__dirname, "../dist/common/react-dll.json"),
          })
    ]
}