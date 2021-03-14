const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const fs = require("fs");
const path = require("path");
const argv = require("yargs").argv;
let env = argv.env || "dev";
let pageName = "index";
let pagePath = "./src"
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

function getEntry() {
  return `./src/${pageName}.js`;
}

function getReactScriptTag() {
  return `<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>`;
}

function getDistPath() {
  return env == "dev" ? "dev" : "dist";
}

function buildjs() {
  console.log("buildjs....")
  let config = webpackConfig(null, {
    mode: "development",
    watch: false,
  });
  config.mode = env == "dev" ? "development" : "production";
  // config.devServer.contentBase = path.join(__dirname, env == "dev" ? "dev" : "dist");
  config.output.path = path.join(__dirname, env == "dev" ? "dev" : "dist");
  config.entry = getEntry();

  console.log(config);
  return new Promise(resolve => {
    webpack(config, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stats.toString({
        chunks: false,  // Makes the build much quieter
        colors: true    // Shows colors in the console
      }));
      resolve();
    });
  })
}

function buildhtml() {
  console.log("building...");
  let distPath = getDistPath();
  let fileContent = fs.readFileSync(path.join(pagePath, `${pageName}.html`), "utf-8");
  let htmlFileContent = fileContent.replace("{{{script}}}",
    ` 
      ${getReactScriptTag()}
      <script src="${pageName}.js"></script>
      `);
  fs.writeFileSync(path.join(distPath, `${pageName}.html`), htmlFileContent, "utf-8");

  return Promise.resolve();
}

function build() {
  return buildjs()
    .then(buildhtml)
}

gulp.task("serve", function () {
  build().then(() => {
    browserSync.init({
      server: {
        baseDir: "dev",
        index: pageName + ".html"
      }
    });
    gulp.watch([
      "src"
    ]).on("change", () => {
      build().then(() => {
        browserSync.reload();
      });
    });
  })
});

gulp.task("build", function () {
  return build()
});