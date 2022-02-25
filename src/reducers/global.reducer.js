import { createModule } from 'redux-modules'
import cloneDeep from 'lodash.clonedeep'
import { List, Map } from 'immutable'
import TransformModules from '../utils/transform-modules'

const DEFAULT_FIELDS = Map({
  isInitialized: false,
  chainId: null,
  exchangeRateETH: 0,
  minBidIncrement: 0,
  auctionContractAddress: null,
  bidWithdrawalLockTime: 0,
  contentUnlocked: false,
  monaPerEth: 0,
  viewMethod: 'magazineview',
  currentPage: 0,
  allUsers: List([])
})

export default createModule({
  name: 'global',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS))
})
