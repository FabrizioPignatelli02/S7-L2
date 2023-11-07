const labelTime = document.getElementById("time");
let attuale = sessionStorage.getItem("time");
console.log(typeof attuale);
const stampaNumeri = () => {
  if (attuale === "NaN") {
    attuale = 0;
    setInterval(function () {
      labelTime.textContent = attuale;
      let time = attuale++;
      sessionStorage.setItem("time", time);
    }, 1000);
  } else {
    setInterval(function () {
      labelTime.textContent = attuale;
      let time = attuale++;
      sessionStorage.setItem("time", time);
    }, 1000);
  }
};

// utilizzo:

window.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputTextName");
  const saveInLocalStorageButton = document.getElementById("saveInLocalStorage");
  const removeInLocalStorageButton = document.getElementById("removeInLocalStorage");
  const labelResponce = document.getElementById("responce");

  saveInLocalStorageButton.onclick = () => {
    const value = inputText.value;
    localStorage.setItem("name", value);
    const nameInStorage = localStorage.getItem("name");
    labelResponce.textContent = nameInStorage;
  };

  removeInLocalStorageButton.onclick = () => {
    const nameInStorage = localStorage.removeItem("name");
    labelResponce.textContent = "";
  };

  const loadTextFromStorage = () => {
    const loadFromStorage = localStorage.getItem("name");
    if (loadFromStorage) {
      labelResponce.textContent = loadFromStorage;
    }
  };

  loadTextFromStorage();
});

stampaNumeri();
