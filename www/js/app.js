import { App } from "@capacitor/app";

App.addListener("appUrlOpen", (event) => {
  console.log("딥링크 실행됨:", event.url);

  const url = new URL(event.url);

  const pathname = url.pathname;
  // 예: "/main/in.html", "/main/out.html", "/main/table.html"

  console.log("pathname:", pathname);

  // 원하는 페이지로 직접 이동
  if (pathname === "/main/in.html") {
    window.location.href = "/main/in.html";
  } else if (pathname === "/main/out.html") {
    window.location.href = "/main/out.html";
  } else if (pathname === "/main/table.html") {
    window.location.href = "/main/table.html";
  }
});
