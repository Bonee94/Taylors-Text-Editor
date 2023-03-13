export const alertDisplay = (reason) => {
    const alert = document.getElementById("dynamic-alert");
    const close = document.getElementById("close-alert");
    const alertText = document.getElementById("alert-text");
  
    alert.style.display = "flex";
  
    switch (reason) {
      case "saved":
        alertText.innerHTML = "Saved";
        break;
    }
  
    setTimeout(() => {
        alert.style.display = "none";
    }, 1000)

  }; 