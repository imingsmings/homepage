declare namespace API {
  // 手机邮箱登录
  interface NormalLoginParams {
    phone?: string,
    email?: string,
    password?: string,
    countryCode?: string,
    md5Password?: string,
    captcha?: string,
  }
  // 二维码登录
  interface QRLoginParams {
    key: string,
    qrimg?: string,
  }
}
