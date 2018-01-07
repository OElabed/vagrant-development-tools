import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
    'node_modules/font-awesome/fonts/**',
    'node_modules/rdash-ui/fonts/**',
    'node_modules/bootstrap/dist/fonts/**',
  ];

  constructor() {
    super();
    this.APP_TITLE = 'Fix-';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    this.ENABLE_SCSS = true;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'moment/moment.js', inject: 'libs' },
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'codemirror/lib/codemirror.js', inject: 'libs' },
      { src: 'bootstrap-select/dist/js/bootstrap-select.min.js', inject: 'libs' },

      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'rdash-ui/dist/css/rdash.min.css', inject: true },
      { src: 'codemirror/lib/codemirror.css', inject: true },
      { src: 'bootstrap-select/dist/css/bootstrap-select.min.css', inject: true },
      { src: 'animate.css/animate.min.css', inject: true },
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    this.addPackageBundles({
      name: 'moment',
      packageMeta: {
        main: './moment.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'codemirror',
      path: 'node_modules/codemirror',
      packageMeta: {
        main: 'lib/codemirror',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'ng2-codemirror',
      path: 'node_modules/ng2-codemirror',
      packageMeta: {
        main: 'lib/index',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'ng2-file-upload',
      path: 'node_modules/ng2-file-upload',
      packageMeta: {
        main: './index',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'angular2-uuid',
      path: 'node_modules/angular2-uuid',
      packageMeta: {
        main: './index',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'ngx-cookie-service',
      path: 'node_modules/ngx-cookie-service',
      packageMeta: {
        main: './index',
        defaultExtension: 'js'
      }
    });

    // Add packages (e.g. ng2-translate)
    // const additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
