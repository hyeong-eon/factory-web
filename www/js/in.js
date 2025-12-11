$(document).ready(function () {
  $("#headers").load("../components/header.html");
  $("#navs").load("../components/nav.html");
});

// in.js
// CDN 방식으로 임포트
const showToast = async (message) => {
  try {
    // Capacitor가 있는지 확인
    if (window.Capacitor && window.Capacitor.isNativePlatform()) {
      // 앱일 때: 토스트
      const { Toast } = window.Capacitor.Plugins;
      await Toast.show({
        text: message,
        duration: "short",
        position: "bottom",
      });
    } else {
      // 웹일 때: alert
      alert(message);
    }
  } catch (error) {
    // 에러 시 alert으로 대체
    alert(message);
  }
};

async function submitForm() {
  const name = document.getElementById("name").value;
  const time = document.getElementById("time").value;
  const note = document.getElementById("note").value;

  if (!name || !time) {
    await showToast("이름과 출근시각을 입력해주세요.");
    return;
  }

  await showToast(
    `출근 정보가 제출되었습니다.\n이름: ${name}\n출근시각: ${time}`
  );
  resetForm();
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("time").value = "";
  document.getElementById("note").value = "";
}
