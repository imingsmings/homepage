// eslint-disable-next-line no-unused-vars
declare namespace Account {
  // 手机邮箱登录
  export interface NormalLoginParams {
    phone?: string,
    email?: string,
    password?: string,
    countryCode?: string,
    md5Password?: string,
    captcha?: string,
  }
  // 二维码登录
  export interface QRLoginParams {
    key: string,
    qrimg?: string,
  }
}
