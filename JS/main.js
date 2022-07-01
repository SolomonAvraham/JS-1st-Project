function menuList() {
  let menuListBtn = document.getElementById("listForBtnClick");
  if (menuListBtn.style.display === "none") {
    menuListBtn.style.display = "flex";
  } else {
    menuListBtn.style.display = "none";
  }
}
