/* global Account */
import Request from './request'

// 注册登录相关接口
export const getLoginCaptcha = () => Request.get('/api/qr/key')
export const getLoginQR = (data:Account.QRLoginParams) => Request.get('/api/qr/create')
export const getResultQR = (data:Account.QRLoginParams) => Request.get('/api/qr/check')
export const userNormalLogin = (data:Account.NormalLoginParams) => Request.post('/api/login', data)
