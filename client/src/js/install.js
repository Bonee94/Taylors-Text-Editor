const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event


// TODO: Implement a click event handler on the `butInstall` element

const checkInstall = () => {
  let installCheck = localStorage.getItem("app-installed");

  console.log("this is the install check: ", installCheck);
  //Checking local storage for boolean of app installed
  if (installCheck === "true") {
    console.log("app is installed, check ran");

    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Thank you for installing J.A.T.E.!";
  } else {
    startEvent();

    // TODO: Add an handler for the `appinstalled` event
    window.addEventListener("appinstalled", (event) => {
      butInstall.textContent = "Thank you for installing J.A.T.E.!";
      console.log("👍", "appinstalled", event);
    });
  }
};

checkInstall();
