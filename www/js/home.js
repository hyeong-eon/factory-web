$(document).ready(function () {
  $("#headers").load("../components/header.html");
  $("#navs").load("../components/nav.html");
});
function testDeeplink(page) {
  const url = `factoryapp://attendance/${page}`;
  console.log("딥 링크 호출:", url);
  window.location.href = url;
}
