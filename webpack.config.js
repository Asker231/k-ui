const path = require('path')

module.exports = {
    mode:"production",
    entry:path.resolve(__dirname,'./src/index.ts'),
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,'dist'),
        clean:true,
        libraryTarget:'umd'

    },
    externals:{react:'react'},
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    module:{
        rules:[
            {
                test:/\.(ts|tsx)/,
                use:["ts-loader"],
                exclude:/'node_modules'/
            },
            {
                test:/\.css/,
                use:['style-loader','css-loader'],
                exclude:/'node_modules'/
            }
        ]
    }
}