const BASIC_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices/";
const BASIC_API_USER =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users/";
const LOADING_PAGE = document.querySelector(".loading_page");
const LOADING_PAGE_SEC = document.querySelector(".loading_pageTwo");

async function userCardsSmallScreen() {
  let cardTextDisplay = document.querySelector(".grid_main_container");
  let a = document.getElementById("bigScreenMain");
  try {
    LOADING_PAGE.style.display = "block";
    return await fetch(BASIC_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
           
            cardTextDisplay.innerHTML += ` 
          <div  class="card_container" >
          <img class="card_pic" src="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70" width="100%" alt="phone-pic">
            </div><br><br>
            <div class="card_text">
            <div ><div class="cardsKeys" >Brand:<span class="cardsValues"> ${item.brand.toUpperCase()}</span></div></div><hr >
            <div ><div class="cardsKeys" >Created At:<span class="cardsValues"> ${
              item.createdAt
            }</span></div></div><hr  >
            <div ><div class="cardsKeys" >Color:<span class="cardsValues"> ${item.color.toUpperCase()}</span></div></div><hr >
            <div ><div class="cardsKeys" >Ram:<span class="cardsValues"> ${
              item.ram
            }</span></div></div><hr >
            <div ><div class="cardsKeys" >is Available:<span class="cardsValues"> ${item.isAvailable.toUpperCase()}</span></div></div><hr  >
            <div ><div class="cardsKeys" >Price:<span class="cardsValues" > ${
              item.price
            } $</span></div></div></div><br>
            <button class="card_button" onclick="deleteCards(${
              item.id
            })">DELETE</button>  `;  a.innerHTML += `<div class="itemsCards"> 
          <div  class="card_container" >
          <img class="card_pic" src="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70" width="150vh" alt="phone-pic">
            </div><br><br>
            <div class="card_text">
            <div ><div class="cardsKeys" >Brand:<span class="cardsValues"> ${item.brand.toUpperCase()}</span></div></div><hr >
            <div ><div class="cardsKeys" >Created At:<span class="cardsValues"> ${
              item.createdAt
            }</span></div></div><hr  >
            <div ><div class="cardsKeys" >Color:<span class="cardsValues"> ${item.color.toUpperCase()}</span></div></div><hr >
            <div ><div class="cardsKeys" >Ram:<span class="cardsValues"> ${
              item.ram
            }</span></div></div><hr >
            <div ><div class="cardsKeys" >is Available:<span class="cardsValues"> ${item.isAvailable.toUpperCase()}</span></div></div><hr  >
            <div ><div class="cardsKeys" >Price:<span class="cardsValues" > ${
              item.price
            } $</span></div></div></div><br>
            <button class="card_button" onclick="deleteCards(${
              item.id
            })">DELETE</button> <div> `;
        });
      });
  } catch (error) {
    alert("Please Refresh The Page");
  } finally {
    LOADING_PAGE.style.display = "none";
  }
}

async function deleteCards(id) {
  // let a=document.getElementsByClassName(card_container)
  try {
    let response = await fetch(`${BASIC_API}${id}`, { method: "DELETE" });
    if (response.status <= 299) {
      document.getElementById("id").remove();
    }
  } catch (error) {
  } finally {
  }
}

async function userTableSmallScreen() {
  let userCards = document.getElementById("usersCards");
  let userTable = document.querySelector(".tableUsers");

  try {
    LOADING_PAGE.style.display = "block";
    LOADING_PAGE_SEC.style.display = "block";
    return await fetch(BASIC_API_USER)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          userCards.innerHTML += `<br><br>
       <div class="userContainer">
          <img class="user_pic" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width="100%" alt="user-pic"><br>
          <div class="userRows"><hr>
            <div class="userKeys"> ID : ${item._id}</div><hr>
            <div class="userKeys">Name : ${item.name.first} ${item.name.last}</div><hr>
            <div class="userKeys">Age : ${item.age}</div><hr>
            <div class="userKeys">Email : ${item.email}</div><hr>
            <div class="userKeys">Index : ${item.index}</div><hr>
            <div class="userKeys">Phone : ${item.phone}</div><br>
        </div></div><br><br><br><button class="userBtn">DELETE</button><br><br><br>
        `;
          userTable.innerHTML += `

          <tr>
            <td>${item._id}</td>
            <td>${item.name.first} ${item.name.last}</td>
            <td>${item.age}</td>
            <td>${item.email}</td>
            <td>${item.index}</td>
            <td>${item.phone}</td>
            <button class="tableBtn">DELETE</button>
          </tr>
        <br>
        
        `;
        });
      });
  } catch (error) {
    alert("Please Refresh Page");
  } finally {
    LOADING_PAGE.style.display = "none";
    LOADING_PAGE_SEC.style.display = "none";
  }
}

async function addUserSmallScreen() {
  try {
    const data = {
      name: {
        first: document.getElementById("first_name").value,
        last: document.getElementById("last_name").value,
      },
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      // id: document.getElementById('id').value ,
      // picture: document.getElementById("picture").value,
      index: document.getElementById("index").value,
    };
    let response = await fetch(BASIC_API_USER, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Contect-Type": "application/json",
      },
    }).then((res) => res.json());

    console.log(response);
  } catch (error) {
  } finally {
  }
}
