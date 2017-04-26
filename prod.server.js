
var express = require('express');
var path = require('path')
var config = require('./config/index');
var webpack = require('webpack')
var webpackConfig = require('./build/webpack.prod.conf')

var opn = require('opn')
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

var appData = require('./data.json');
var about = appData.about;
var assistance = appData.assistance;
var saveLove = appData.saveLove;
var keepLove = appData.keepLove;
var division = appData.divisionOthers;

var apiRoutes = express.Router();

apiRoutes.get('/home', function (req, res) {
  res.json({
    errno: 0,
    data: appData
  });
});
apiRoutes.get('/about', function (req, res) {
  res.json({
    errno: 0,
    data: about
  });
});
apiRoutes.get('/assistance', function (req, res) {
  res.json({
    errno: 0,
    data: assistance
  });
});
apiRoutes.get('/saveLove', function (req, res) {
  res.json({
    errno: 0,
    data: saveLove
  });
});
apiRoutes.get('/keepLove', function (req, res) {
  res.json({
    errno: 0,
    data: keepLove
  });
});
apiRoutes.get('/division', function (req, res) {
  res.json({
    errno: 0,
    data: division
  });
});

app.use('/api', apiRoutes);

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.use(express.static('./dist'));

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve;
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri);
  }
  _resolve();
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
}

