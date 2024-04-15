const REGISTRATIONS_URL = "/api/registrations/new";

const showMessage = (msg) => {
  const messageBox = document.getElementsByClassName("message-box")[0];
  messageBox.style.display = "initial";
  document.getElementById("message").innerHTML = msg;
  messageBox.style.animation = "slideIn 0.5s";
  setTimeout(() => {
    messageBox.style.animation = "none";
  }, 500);
};

const closeMessage = () => {
  const messageBox = document.getElementsByClassName("message-box")[0];
  messageBox.style.animation = "slideOut 0.5s";
  setTimeout(() => {
    document.getElementById("message").innerHTML = "";
    messageBox.style.animation = "none";
    messageBox.style.display = "none";
  }, 500);
};

const form = document.getElementsByTagName("form")[0];

form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    const registerButton = document.getElementById("register-button");
    const referralCode = new URLSearchParams(window.location.search).get('referral_code');

    registerButton.disabled = true;

    const data = new FormData(form);

    const body = {};
    for (const entry of data) {
      body[entry[0]] = entry[1];
    }

    body.year = parseInt(body.year);

    if (referralCode) body.referral_code = referralCode;

    if (!body.gender || body.year==NaN) {
      showMessage("Incomplete form data! Please fill all the required fields.");
      return;
    }

    const params = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      method: "POST",
    };

    fetch(REGISTRATIONS_URL, params)
      .then((data) => {
        console.log(data)
        return data.json();
      })
      .then((response) => {
          if (response.ok){

            if (response.message) {
              console.log(response);
              showMessage(response.message);
              setTimeout(_ => {
                window.location = "https://forms.gle/4wxwEv86tCh8vWBr8";
              }, 2000)
              return;
            }
          }
          else {
              registerButton.disabled = false;
              if (response.message) {
                  console.log(response);
                  showMessage(response.message);
                  return;
                }
              else{
                if (response.error) {
                  showMessage(response.error)
                } else {
                  showMessage("Registration was unsuccessful. Please try again using a different browser.");
                  console.log(response);
                }
                  return;
              }
          }
      })
      .catch((error) => {
        showMessage("ERROR: " + error + "\n Contact administrator");
        registerButton.disabled = false;
      });
    
  },
  false
);
