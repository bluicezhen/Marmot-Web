import ajax from './ajax';

export default {
  user_qiniu_upload_token_get(file_name) {
    return ajax('GET', '/user/37/qiniu_upload_token', {url_params: {file_name}});
  },
  user_post(user_info) {
    return ajax('POST', '/user', {body_params: user_info});
  },
  user_token_post(login_info) {
    return ajax('POST', '/user_token', {body_params: login_info});
  }
}
