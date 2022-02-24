const {
  CLIENT_URL,
  BACKEND_API,
  STATIC_DOMAIN,
  IS_PROD,
  ENVIRONMENT,
  SENTRY_DSN,
  NETWORKS,
  EXPLORER_URLS,
  API_URLS,
  DEFAULT_NETWORK,
  EXCHANGE_API,
  IMGIX_URL,
  DEFAULT_WEB3_URL,
  WEB3_URLS,
  MONA_TOKEN_ADDRESSES,
  DIGITAL_MARKETPLACE_ADDRESSES,
  TIME_INTERVAL,
  USDT_ADDRESS,
  QUICKSWAP_ROUTER,
  DIGITALAX_SUBSCRIPTION_MARKETPLACE,
  DIGITALAX_SUBSCRIPTION_NFT,
  DTX_ADDRESSES,
  API_DLTA_URL
} = require('config')
const withImages = require('next-images')

const webpack = require('webpack')

const env = {
  INFURA_API_KEY: process.env.INFURA_API_KEY
};

module.exports = withImages({
  publicRuntimeConfig: {
    BACKEND_API,
    STATIC_DOMAIN,
    CLIENT_URL,
    IS_PROD,
    ENVIRONMENT,
    SENTRY_DSN,
    NETWORKS,
    EXPLORER_URLS,
    API_URLS,
    DEFAULT_NETWORK,
    EXCHANGE_API,
    IMGIX_URL,
    DEFAULT_WEB3_URL,
    WEB3_URLS,
    MONA_TOKEN_ADDRESSES,
    DIGITAL_MARKETPLACE_ADDRESSES,
    TIME_INTERVAL,
    USDT_ADDRESS,
    QUICKSWAP_ROUTER,
    DIGITALAX_SUBSCRIPTION_NFT,
    DIGITALAX_SUBSCRIPTION_MARKETPLACE,
    DTX_ADDRESSES,
    API_DLTA_URL
  },
  trailingSlash: true,
  assetPrefix: './',
  images: {
    domains: ['digitalax.mypinata.cloud', 'espa.s3.eu-central-1.amazonaws.com', 'digifizzy.s3.amazonaws.com'],
  },
  webpack(cfg, { isServer }) {
    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = await originalEntry()
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js')
      }
      return entries
    }

    if (!isServer) {
      cfg.node = {
        ws: 'empty'
      }
    }

    cfg.plugins.push(new webpack.EnvironmentPlugin(env))

    return cfg
  }
})
