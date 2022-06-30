function menuList() {
  const MENU_LIST = document.getElementById("listForBtnClick");
  if (MENU_LIST.style.display === "none") {
    MENU_LIST.style.display = "flex";
  } else {
    MENU_LIST.style.display = "none";
  }
}
