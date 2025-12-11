import { App } from "@capacitor/app";

App.addListener("appUrlOpen", (event) => {
  console.log("딥링크 호출됨:", event.url);

  try {
    const url = new URL(event.url);
    const path = url.pathname; // "/main/in.html"

    if (path.endsWith("in.html")) {
      window.location.href = "/main/in.html";
    } else if (path.endsWith("out.html")) {
      window.location.href = "/main/out.html";
    } else if (path.endsWith("table.html")) {
      window.location.href = "/main/table.html";
    }
  } catch (e) {
    console.error("딥링크 파싱 오류:", e);
  }
});
