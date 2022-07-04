async function cards() {
  let cardTextDisplay = document.querySelector("[data-cards=container]");
  const LOADING_PAGE = document.querySelector("#loading_page");
  const BASIC_API =
    "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
  LOADING_PAGE.style.display = "block";
  try {
    return await fetch(BASIC_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          cardTextDisplay.innerHTML += ` 
          <div class="card_container" >
          <img src="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70" width="100%" alt="phone-pic">
            </div><br><br>
            <div class="card_text"><div>Brand: <span  >${item.brand}</span></div>
            <div>Created At: <span >${item.createdAt}</span></div>
            <div>Color: <span  >${item.color}</span></div>
            <div>Ram: <span  >${item.ram}</span></div>
            <div>is Available: <span  >${item.isAvailable}</span></div>
            <div>Price: <span >${item.price}$</span></div></div><br>
            <button class="card_button" onclick="deleteCards()">DELETE</button>`;
        });
      });
  } catch (error) {
    alert("Please Refresh The Page");
  } finally {
    LOADING_PAGE.style.display = "none";
  }
}
cards();

async function deleteCards() {
  const BASIC_API =
    "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
  try {
    return await fetch(BASIC_API)
      .then((res) => res.json())
      .then((res) => {
        for (let item in res) {
          
          console.log(res);

        }
  
      });
  } catch (error) {
  } finally {
  }
}
