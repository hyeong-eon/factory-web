import { App } from "@capacitor/app";

App.addListener("appUrlOpen", function (event) {
  // event.url에 딥 링크 URL이 들어옴
  console.log("App opened with URL:", event.url);

  // URL 파싱
  const slug = event.url.split(".app").pop();

  if (slug) {
    // 페이지 라우팅
    if (slug === "//attendance/in") {
      window.location.href = "/main/in.html";
    } else if (slug === "//attendance/out") {
      window.location.href = "/main/out.html";
    } else if (slug === "//attendance/table") {
      window.location.href = "/main/table.html";
    }
  }
});
