// export const baseurl = "http://172.16.1.132:1975/"; //local URL
export const baseurl = "https://node-hummingbot.mobiloitte.io/"; // stagin
let user = `${baseurl}api/v1/user`;
let admin = `${baseurl}api/v1/admin`;
let staticContent = `${baseurl}api/v1/static`;
let notification = `${baseurl}api/v1/notification`;
let DirectArb = `${baseurl}api/v1/directArbitrage`;
let IntraArb = `${baseurl}api/v1/intraArbitrage`;
let analytics = `${baseurl}api/v1/analytics`;
let wallet = `${baseurl}api/v1/wallet`;

const apiConfigs = {
  // -------------------Auth---------------------

  // admin Login
  forgotPassword: `${admin}/forgotPassword`,
  changePassword: `${admin}/changePassword`,
  login: `${admin}/login`,
  verifyOTP: `${admin}/verifyOTP`,
  resetPassword: `${admin}/resetPassword`,
  resendOTP: `${admin}/resendOTP`,
  getProfile: `${admin}/getProfile`,
  editProfile: `${admin}/editProfile`,
  inviteUser: `${admin}/inviteUser`,
  subscriptionPlanList: `${admin}/subscriptionPlanList`,
  inviteUserList: `${admin}/inviteUserList`,
  inviteUserView: `${admin}/inviteUserView`,
  updatePermissions: `${admin}/updatePermissions`,
  subscriptionPlanListWithFilter: `${admin}/subscriptionPlanListWithFilter`,
  addSubscription: `${admin}/addSubscription`,
  editSubscription: `${admin}/editSubscription`,
  viewSubscription: `${admin}/viewSubscription`,
  blockUnblockSubscriptionPlan: `${admin}/blockUnblockSubscriptionPlan`,
  deleteInviteUser: `${admin}/deleteInviteUser`,
  blockUnblockInvitedUser: `${admin}/blockUnblockInvitedUser`,

  //staticContent
  listStaticContent: `${staticContent}/listStaticContent`,
  editStaticContent: `${staticContent}/editStaticContent`,
  viewStaticContent: `${staticContent}/viewStaticContent`,
  faqList: `${staticContent}/faqList`,
  deleteFAQ: `${staticContent}/deleteFAQ`,
  addFAQ: `${staticContent}/addFAQ`,
  editFAQ: `${staticContent}/editFAQ`,
  viewFAQ: `${staticContent}/viewFAQ`,
  signUpEmail: `${user}/signUpEmail`,
  verifyOTPEmail: `${user}/verifyOTPEmail`,
  resendOTPEmail: `${user}/resendOTPEmail`,
  signUpMobileNo: `${user}/signUpMobileNo`,
  verifyOTPMobileNo: `${user}/verifyOTPMobileNo`,
  resendOTPMobileNo: `${user}/resendOTPMobileNo`,
  loginEmail: `${user}/loginEmail`,
  loginMobileNo: `${user}/loginMobileNo`,
  viewMyProfile: `${user}/viewMyProfile`,
  forgotPasswordEmail: `${user}/forgotPasswordEmail`,
  forgotPasswordMobileNo: `${user}/forgotPasswordMobileNo`,

  //notification
  listNotification: `${notification}/listNotification`,
  readNotification: `${notification}/readNotification`,
  clearNotification: `${notification}/clearNotification`,

  //DirectArb
  profitPathsDirectArb: `${DirectArb}/profitPaths`,
  filterProfitPathsDirectArb: `${DirectArb}/filterProfitPaths`,
  autoTradeOnOffDirectArb: `${DirectArb}/autoTradeOnOff`,
  tradeProfitPathsDirectArb: `${DirectArb}/tradeProfitPaths`,
  listPlacedTradeDirectArb: `${DirectArb}/listPlacedTrade`,
  viewPlacedTradeDirectArb: `${DirectArb}/viewPlacedTrade/`,
  activeBlockvPlacedTradeDirectArb: `${DirectArb}/activeBlockvPlacedTrade`,
  deletePlacedTradeDirectArb: `${DirectArb}/deletePlacedTrade`,
  cancelledOrderDirectArb: `${DirectArb}/cancelledOrder/`,

  //IntraArb
  profitPathsIntraArb: `${IntraArb}/profitPaths`,
  filterProfitPathsIntraArb: `${IntraArb}/filterProfitPaths`,
  autoTradeOnOffIntraArb: `${IntraArb}/autoTradeOnOff`,
  tradeProfitPathsIntraArb: `${IntraArb}/tradeProfitPaths`,
  listPlacedTradeIntraArb: `${IntraArb}/listPlacedTrade`,
  viewPlacedTradeIntraArb: `${IntraArb}/viewPlacedTrade/`,
  activeBlockvPlacedTradeIntraArb: `${IntraArb}/activeBlockvPlacedTrade`,
  deletePlacedTradeIntraArb: `${IntraArb}/deletePlacedTrade`,
  cancelledOrderIntraArb: `${IntraArb}/cancelledOrder/`,

  //analytics
  arbitrageData: `${analytics}/arbitrageData`,
  tradingDetails: `${analytics}/tradingDetails`,
  tradingView: `${analytics}/tradingView`,

  //wallet
  connectedExchangeList: `${wallet}/connectedExchangeList`,
  exchangeBalance: `${wallet}/exchangeBalance`,
  listExchange: `${wallet}/listExchange`,
  serverIPAddress: `${wallet}/serverIPAddress`,
  connectExchange: `${wallet}/connectExchange`,
  exchangeCoins: `${wallet}/exchangeCoins`,
  removeConnectedExchange: `${wallet}/removeConnectedExchange`,
  asks_bids_prices: `${wallet}/asks_bids_prices`,
};
export default apiConfigs;
