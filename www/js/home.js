$(document).ready(function () {
  $("#headers").load("../components/header.html");
  $("#navs").load("../components/nav.html");
});
function testDeeplink(page) {
  // 앱에서는 직접 페이지 이동
  if (window.Capacitor) {
    window.location.href = `./${page}.html`;
  } else {
    // 웹에서는 HTTPS 링크
    window.location.href = `https://factory-web-mu.vercel.app/main/${page}.html`;
  }
}
