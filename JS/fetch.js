const BASIC_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices/";
const BASIC_API_USER =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users/";

async function cards() {
  let cardTextDisplay = document.querySelector("[data-cards=container]");
  const LOADING_PAGE = document.querySelector("#loading_page");

  try {
    LOADING_PAGE.style.display = "block";
    return await fetch(BASIC_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          return (cardTextDisplay.innerHTML += ` 
          <br><div class="card_container" >
          <img id="card_pic" src="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70" width="100%" alt="phone-pic">
            </div><br><br>
            <div class="card_text">
            <div ><div class="cardsKeys" >Brand:<span class="cardsValues"> ${item.brand.toUpperCase()}</span></div></div><hr>
            <div ><div class="cardsKeys" >Created At:<span class="cardsValues"> ${
              item.createdAt
            }</span></div></div><hr>
            <div ><div class="cardsKeys" >Color:<span class="cardsValues"> ${item.color.toUpperCase()}</span></div></div><hr>
            <div ><div class="cardsKeys" >Ram:<span class="cardsValues"> ${
              item.ram
            }</span></div></div><hr>
            <div ><div class="cardsKeys" >is Available:<span class="cardsValues"> ${item.isAvailable.toUpperCase()}</span></div></div><hr>
            <div ><div class="cardsKeys" >Price:<span class="cardsValues" > ${
              item.price
            } $</span></div></div></div><br>
            <button class="card_button" onclick="deleteCards()">DELETE</button><br>`);
        });
      });
  } catch (error) {
    alert("Please Refresh The Page");
  } finally {
    LOADING_PAGE.style.display = "none";
  }
}

async function deleteCards() {
  try {
    return await fetch(BASIC_API, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
  } finally {
  }
}
// deleteCards();

async function table() {
  let gridMainSection = document.getElementById("grid_main");
  try {
    return await fetch(BASIC_API_USER)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          gridMainSection.innerHTML += `
                  <br />
        

        <br>
       <div class="userContainer">
          <div class="userRows">
            <div class="userKeys"> ID : ${item._id}</div><hr>
            <div class="userKeys">Name : ${item.name }</div><hr>
            <div class="userKeys">Age : ${item.age}</div><hr>
            <div class="userKeys">Email : ${item.email}</div><hr>
            <div class="userKeys">Index : ${item.index}</div><hr>
            <div class="userKeys">Phone : ${item.phone}</div>
        
          </div>


        </div>`;
        });
      });
  } catch (error) {
    alert(error);
  } finally {
  }
}

table();
