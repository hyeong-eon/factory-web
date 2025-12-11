$(document).ready(function () {
  $("#headers").load("../components/header.html");
  $("#navs").load("../components/nav.html");
});
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("time").value = "";
  document.getElementById("note").value = "";
}

function submitForm() {
  const name = document.getElementById("name").value;
  const time = document.getElementById("time").value;
  const note = document.getElementById("note").value;

  if (!name || !time) {
    alert("이름과 퇴근시각을 입력해주세요.");
    return;
  }

  alert(
    `퇴근 정보가 제출되었습니다.\n이름: ${name}\n퇴근시각: ${time}\n기타사항: ${
      note || "없음"
    }`
  );
  // 여기에 실제 제출 로직 추가 (예: AJAX 요청)
}
