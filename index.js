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
    inputText.value = "";
  };

  const loadTextFromStorage = () => {
    const loadFromStorage = localStorage.getItem("name");
    if (loadFromStorage) {
      labelResponce.textContent = loadFromStorage;
    }
  };
  loadTextFromStorage();
});
