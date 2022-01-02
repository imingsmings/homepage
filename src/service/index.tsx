import Request from './request'

// 注册登录相关接口
export const getLoginKey = () => Request.get('/login/qr/key')
export const getLoginQR = (data:API.QRLoginParams) => Request.get('/qr/create', data)
export const getResultQR = (data:API.QRLoginParams) => Request.get('/qr/check', data)
export const userNormalLogin = (data:API.NormalLoginParams) => Request.post('/login', data)
