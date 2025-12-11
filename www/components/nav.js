const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

if (menuBtn && sideMenu && overlay) {
  // 메뉴 토글
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // 오버레이 클릭 시 메뉴 닫기
  overlay.addEventListener("click", function () {
    menuBtn.classList.remove("active");
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // 현재 페이지 활성화 표시
  const currentPage = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href) {
      const pageName = href.split("/").pop();
      if (currentPage === pageName) {
        item.classList.add("active");
      }
    }
  });
}
