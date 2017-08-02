export default function (e, page) {
  if (e.response && e.response.data && e.response.data.msg) {
    page.$message({
      showClose: true,
      message: e.response.data.msg,
      type: 'error'
    });
  } else if (e.response) {
    page.$message({
      showClose: true,
      message: 'Unknown Network Error!',
      type: 'error'
    });
  } else {
    page.$message({
      showClose: true,
      message: 'Unknown Error!',
      type: 'error'
    });
  }
};
