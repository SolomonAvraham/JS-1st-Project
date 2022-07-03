async function cards() {
  let brandValue = document.getElementById("card_brand");
  let creatAtValue = document.getElementById("card_createdAt");
  let colorValue = document.getElementById("card_color");
  let ramValue = document.getElementById("card_ram");
  let isAvailableValue = document.getElementById("card_isAvailable");
  let priceValue = document.getElementById("card_price");
  let picValue = document.getElementById("card_pic");
  const BASIC_API =
    "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
  try {
    return await fetch(BASIC_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          console.log(item.price);
          brandValue.innerHTML = `${item.brand}`;
          creatAtValue.innerHTML = `${item.createdAt}`;
          colorValue.innerHTML = `${item.color}`;
          ramValue.innerHTML = `${item.ram}`;
          isAvailableValue.innerHTML = `${item.isAvailable}`;
          priceValue.innerHTML = `${item.price}$`;
          picValue.innerHTML = `<img src="${item.picture}" alt="">`;
        });
      });
  } catch (error) {
  } finally {
  }
}

cards();

function printCards() {}
printCards();
