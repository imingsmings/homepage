import Request from './request'

// 注册登录相关接口
export const getLoginCaptcha = () => Request.get('/login/qr/key')
export const getLoginQR = (data:AccountAPI.QRLoginParams) => Request.get('/qr/create', data)
export const getResultQR = (data:AccountAPI.QRLoginParams) => Request.get('/qr/check', data)
export const userNormalLogin = (data:AccountAPI.NormalLoginParams) => Request.post('/login', data)
