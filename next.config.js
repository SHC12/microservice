const withPlugins = require("next-compose-plugins")
const withCss = require("@zeit/next-css")
const withImages = require("next-images")
const withSvg = require("next-react-svg")

const path = require("path")
const { CONFIG_FILES } = require("next/dist/shared/lib/constants")

module.exports = withPlugins(
  [
    withCss({}),
    withImages({}),
    withSvg({
      include: path.resolve(__dirname, "public/images"),
      webpack(config,options){
        return config;
      }
    }),
  ]
)