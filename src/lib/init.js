export default function (page) {
  if (!page.user.is_login) {
    page.$router.replace('/login');
  }
}
