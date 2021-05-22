export default {
  apiUrl: 'http://yoursite.com/api/',
  API_URL_S: 'https://localhost:5001/api',
  version: '2.0'
};

const siteConfig = {
  siteName: 'PROPILE',
  siteIcon: 'ion-flash',
  footerText: 'Nguyễn Lê Phong',
};

const jwtConfig = {
  host: 'http://127.0.0.1:5000',
  fetchUrl_TM: '/',
  fetchUrl: '/api/',
  secretKey: 'secretKey'
};

const language = 'english';
// let language = 'Vietnamese';

export {
  siteConfig,
  language,
  jwtConfig,
};

export const frontPageConfig = {
  baseUrl: '/front'
}