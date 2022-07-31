import loadable from '@loadable/component';

const CoverPage = loadable(() => import('./CoverPage'));
const Page12 = loadable(() => import('./Page12'));
const Page34 = loadable(() => import('./Page34'));
const Page56 = loadable(() => import('./Page56'));
const Page78 = loadable(() => import('./Page78'));
const Page0910 = loadable(() => import('./Page0910'));
const Page1112 = loadable(() => import('./Page1112'));
const Page1314 = loadable(() => import('./Page1314'));
const Page1516 = loadable(() => import('./Page1516'));
const Page1718 = loadable(() => import('./Page1718'));
const Page1920 = loadable(() => import('./Page1920'));
const Page2122 = loadable(() => import('./Page2122'));
const Page2324 = loadable(() => import('./Page2324'));
const Page2526 = loadable(() => import('./Page2526'));
const Page2728 = loadable(() => import('./Page2728'));
const Page2930 = loadable(() => import('./Page2930'));
const Page3132 = loadable(() => import('./Page3132'));
const Page3334 = loadable(() => import('./Page3334'));
const Page3536 = loadable(() => import('./Page3536'));
const Backcover = loadable(() => import('./Backcover'));
const PageList = [
  <CoverPage />,
  <Page12 />,
  <Page34 />,
  <Page56 />,
  <Page78 />,
  <Page0910 />,
  <Page1112 />,
  <Page1314 />,
  <Page1516 />,
  <Page1718 />,
  <Page1920 />,
  <Page2122 />,
  <Page2324 />,
  <Page2526 />,
  <Page2728 />,
  <Page2930 />,
  <Page3132 />,
  <Page3334 />,
  <Page3536 />,
  <Backcover />,
];

export default PageList;
