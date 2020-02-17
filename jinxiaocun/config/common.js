export const api = {
	// baseUrl: 'https://test.saas.yunmengzhu.com',
	baseUrl:'https://saas.yunmengzhu.com',
	//正式 wxa9c130058c8210a1 测试:
	
	contactUnit: '/api/ContactUnit',
	baseArea: '/api/BseArea',
	baseProduct: '/api/BseProduct',
	baseUser: '/api/BaseUser',
	capFee: '/api/CapFee',
	capPayment: '/api/CapPayment',
	capreceipt: '/api/Capreceipt',
	cashAccount: '/api/CashAccount',
	dept: '/api/Dept',
	purPurchaseOrder: '/api/PurPurchaseOrder',
	report: '/api/Report',
	salesOrder: '/api/SalesOrder',
	stkStock: '/api/StkStock',
	QueryWarningStock:'/api/StkStock/QueryWarningStock',
	QueryInit:'/api/StkStock/QueryInit',
	QueryInventory:'/api/StkStock/QueryInventory',
	token: '/api/Token',
	tokenRefresh:'/api/BseUser/RefreshToken',
	login: '/api/BseUser/Login',
	ChangePassword:'/api/BseUser/ChangePassword',
	ResetPassword:'/api/BseUser/ResetPassword',
	Regist:'/api/BseUser/Regist',
	GetUserInfo:'/api/BseUser/GetUserInfo',
	GetUserInfoByUserId:'/api/BseUser/GetUserInfoByUserId',
	SaveUserInfo:'/api/BseUser/SaveUserInfo',
	SaveUserStatus:'/api/BseUser/SaveUserStatus',
	GetUserList:'/api/BseUser/GetUserList',
	GetRoleList:'api/BseRole/GetRoleList',
	SaveUser:'/api/BseUser/SaveUser',
	CustomerSave:'/api/Customer/SaveCustomer',
	MyCashAccount: '/api/CashAccount/Query',
	MyCashAccountCreate: '/api/CashAccount/Create',
	MyCashAccountGet: '/api/CashAccount/Get/',
	MyCashAccountUpdate: '/api/CashAccount/Update',
	UploadImg:'/api/BseUser/UploadImg',
	GetMyDayLogList:'/api/BseUser/GetMyDayLogList',
	GetOrderList:'/api/SysOrder/GetMyOrderList',
	IntegralExchange:'/api/BseUser/IntegralExchange',
	AddOrder:'/api/SysOrder/AddOrder',
	GetCurrentActivity:'/api/SysActivity/GetCurrentActivity',
	GetMyPromotIntegralList :'/api/BseUser/GetMyPromotIntegralList',
	GetSmsCode:'/api/SysMessage/SendVerificationCode',
	GetProductList:'/api/SysProduct/GetProductList',
	Orderypay:'/api/WeChartPay/OrderPay'
	
}