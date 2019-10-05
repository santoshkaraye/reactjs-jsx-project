const path = require("path");

const config = {

    entry: "./main.js",

    output: {

        path: path.resolve(__dirname, "dist"),

        filename: "index.js"

    },


        module: {
            rules: [

                {
                    test: /\.jsx?$/,         // Match both .js and .jsx files
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query:
                        {
                            presets: ['@babel/react', '@babel/env']
                        }
                }
            ]
        }


};



module.exports = config;