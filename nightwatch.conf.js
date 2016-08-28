'use strict';

module.exports = {
  src_folders: ['tasks/06-nightwatch'],
  output_folder: 'tasks/06-nightwatch/test_output',

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar',
    cli_args: {
      'webdriver.chrome.driver': './node_modules/selenium-standalone/.selenium/chromedriver/2.23-x64-chromedriver'
    }
  },

  test_settings: {
    default: {
      silent: true,
      end_session_on_fail: !process.env.LEAVE_BROWSER_OPEN,
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      launch_url: 'http://127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        acceptSslCerts: true
      }
    },
  }
};
