import { config as baseConfig } from './wdio.base.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,

  runner: 'local',

  specs: ['../test/specs/api/**/*.ts'],

  services: [],

  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
      },
      pageLoadStrategy: 'eager',
    },
  ],

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: 'junit-report',
        outputFileFormat: (opts: any) => `api-${opts.cid}.xml`,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60_000,
  },

  baseUrl: 'https://demoqa.com/',
};
