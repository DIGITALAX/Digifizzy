import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import withRedux from 'next-redux-wrapper';
import { deserialize, serialize } from 'json-immutable/lib';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import Modals from '@containers/modals/index';
import Footer from '@components/layouts/footer';
import HeaderTopLine from '@components/layouts/header-top-line';
import globalActions from '@actions/global.actions';
import { getIsInitialized, getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { useRouter } from 'next/router';
import getOrCreateStore from '../lib/with-redux-store';

import config from '../utils/config';
import '../assets/scss/global.scss';
import styles from './styles.module.scss';

if (config.SENTRY_DSN) {
  Sentry.init({
    dsn: config.SENTRY_DSN,
    environment: config.ENVIRONMENT,
  });
}

const InitWrapper = (props) => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(getIsInitialized);

  useEffect(() => {
    dispatch(globalActions.initApp());
  }, []);

  if (!isInitialized) {
    return <InitLoader />;
  }

  return props.children;
};

const InitLoader = () => (
  <div className={styles.initLoaderWrapper}>
    <video autoPlay muted loop className={styles.loadingVideo}>
      <source src="/video/init-loading.mp4" type="video/mp4" />
    </video>
  </div>
);

const NetworkWrapper = (props) => {
  const chainId = useSelector(getChainId);
  const network = getEnabledNetworkByChainId(chainId);

  if (!network) {
    return null;
  }

  return props.children;
};

const MyApp = ({ Component, pageProps, store, err }) => {
  const router = useRouter();
  const { pathname } = router;
  const isMagazineContents = pathname.substr(0, 10) === '/magazines';
  // const width = window.innerWidth
  // const isMobile = width <= 768

  if (err) {
    Sentry.captureException(err, {
      extra: {},
    });
    return <Component {...pageProps} />;
  }

  return (
    <Provider store={store}>
      <Head>
        <title>First In-Depth NFT Metaverse Magazine</title>
        <meta
          name="description"
          content="DIGIFIZZY is the first in-depth Metaverse Magazine bringing together top voices and creators across digital fashion, gaming, modding, NFTs, web3, crypto, DeFi, music, art. We are proving out an entirely new publishing model through decentralized NFT unlockable content drops."
        />
        <link rel="icon" type="image/png" href="/images/icons/favicon-digitalax.ico" />
      </Head>
      <InitWrapper>
        <HeaderTopLine isMagazineContents={isMagazineContents} />
        <Modals />
        <NetworkWrapper>
          <Component {...pageProps} />
        </NetworkWrapper>
        <Footer isMagazineContents={isMagazineContents} />
      </InitWrapper>
      <ToastContainer />
    </Provider>
  );
};

MyApp.getInitialProps = async () => {};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
  store: PropTypes.object,
  err: PropTypes.any,
  backError: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
  store: {},
  err: undefined,
  backError: {},
};

const serializeWrapper = (value, cb) => {
  try {
    value = cb(value);
  } catch (e) {
    // eslint-disable no-empty
  }
  return value;
};

export default withRedux((initialState) => getOrCreateStore(initialState), {
  serializeState: (state = {}) => serializeWrapper(state, serialize),
  deserializeState: (state = serialize({})) => serializeWrapper(state, deserialize),
})(MyApp);
