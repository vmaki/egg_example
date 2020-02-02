/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580530032746_1249';

  // add your middleware config here
  config.middleware = [];

  config.logger = {
    dir: '/tmp',
  };

  config.alinode = {
    appid: '83581',
    secret: 'f9d2d05eb2dfa1c9626c09d2dd45e32eb67f6b1c',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
