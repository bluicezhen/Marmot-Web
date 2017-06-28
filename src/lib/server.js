import ajax from './ajax';

export default {
  user_qiniu_upload_token_get (file_name) {
    return ajax('GET', '/user/37/qiniu_upload_token', {
      url_params: {
        file_name
      }
    });
  }
}
