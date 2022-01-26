import modalsReducer from '../reducers/modals.reducer'

const { actions } = modalsReducer

const hideScroll = (scroll) => {
  const widthScroll = window.innerWidth - document.documentElement.clientWidth
  if (scroll === 'hideScroll') {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${widthScroll}px`
  }
}

const showScroll = (scroll) => {
  if (scroll === 'addScroll') {
    document.body.style.overflow = 'initial'
    document.body.style.paddingRight = '0px'
  }
}

export const openModal = (modalNameInReducer, statusScroll, params) => (dispatch) => {
  dispatch(actions.setValue({ field: 'params', value: params }))
  dispatch(actions.setValue({ field: modalNameInReducer, value: true }))
  hideScroll(statusScroll)
}

export const closeModal = (modalNameInReducer, statusScroll) => (dispatch) => {
  dispatch(actions.setValue({ field: modalNameInReducer, value: false }))
  dispatch(actions.setValue({ field: 'params', value: null }))
  showScroll(statusScroll)
}

export const openConnectMetamaskModal = () => (dispatch) => dispatch(openModal('isShowModalConnectMetamask', 'hideScroll'))
export const closeConnectMetamaskModal = () => (dispatch) => dispatch(closeModal('isShowModalConnectMetamask', 'addScroll'))

export const openNotInstalledMetamask = () => (dispatch) => dispatch(openModal('isShowNotificationConnectMetamask'))
export const closeNotInstalledMetamask = () => (dispatch) => dispatch(closeModal('isShowNotificationConnectMetamask'))

export const openSignupModal = (params) => (dispatch) => dispatch(openModal('isShowModalSignup', 'hideScroll', params))
export const closeSignupModal = () => (dispatch) => dispatch(closeModal('isShowModalSignup', 'addScroll'))

export const openNftSubscriptionReadyModal = (params) => (dispatch) => dispatch(openModal('isNftSubscriptionReady', 'hideScroll', params))
export const closeNftSubscriptionReadyModal = () => (dispatch) => dispatch(closeModal('isNftSubscriptionReady', 'addScroll'))

export const openConnectMaticModal = (params) => (dispatch) => dispatch(openModal('isShowModalConnectMatic', 'hideScroll', params))
export const closeConnectMaticModal = () => (dispatch) => dispatch(closeModal('isShowModalConnectMatic', 'addScroll'))

export const openBuynowNftSubscriptionModal = (params) => (dispatch) => dispatch(openModal('isShowBuyNowNftSubscription', 'hideScroll', params))
export const closeBuynowNftSubscriptionModal = () => (dispatch) => dispatch(closeModal('isShowBuyNowNftSubscription', 'addScroll'))

export const openBuynowNftCoolDownModal = (params) => (dispatch) => dispatch(openModal('isShowBuyNowNftCooldown', 'hideScroll', params))
export const closeBuynowNftCoolDownModal = () => (dispatch) => dispatch(closeModal('isShowBuyNowNftCooldown', 'addScroll'))

export const openBuynowNftLimitModal = (params) => (dispatch) => dispatch(openModal('isShowBuyNowNftLimit', 'hideScroll', params))
export const closeBuynowNftLimitModal = () => (dispatch) => dispatch(closeModal('isShowBuyNowNftLimit', 'addScroll'))

export const openUnlockModal = (params) => (dispatch) => dispatch(openModal('isShowModalUnlock', 'hideScroll', params))
export const closeUnlockModal = () => (dispatch) => dispatch(closeModal('isShowModalUnlock', 'addScroll'))
