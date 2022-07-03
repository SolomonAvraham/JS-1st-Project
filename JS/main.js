function menuList() {
  let menuListBtn = document.getElementById("listForBtnClick");
  if (menuListBtn.style.display === "none") {
    menuListBtn.style.display = "flex";
    header_area_one.style.backgroundColor = "green";
  } else {
    header_area_one.style.backgroundColor = "transparent";
    menuListBtn.style.display = "none";
  }
}
