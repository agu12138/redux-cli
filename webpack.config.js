const webpack=require('webpack');
const path=require('path');
module.exports={
    entry:{
        app:'./src/app.tsx'
    },
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"[name].js"
    },
    mode:"production",
    resolve:
    {
      extensions: ['.ts',".tsx",".js",".jsx"]
    },
    module:{
        rules: [
            {
                test: /\.ts(x)?$/,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/
            },
        ]
    }
}