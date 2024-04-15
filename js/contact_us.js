const contactData = {
  
  1: {
    name: "Deepanshu",
    post: "ORGANISER",
    phone: "9728017614",
    email: "deepanshu9728017614@gmail.com",
    image: "assets/contact/danny.webp",
    linkedin: "https://www.linkedin.com/in/deepanshu-garg-913b1a1b3" ,
  },
  2: {
    name: "Chetanya",
    post: "SPONSOR  ANDMARKETING",
    phone: "9992630012",
    email: "Chetanyachangia423@gmail.com",
    image: "assets/contact/chetan.webp",
    linkedin: "https://www.linkedin.com/in/chetanya-changia-6171b01b3" ,
  },
  3: {
    name: "Moksh",
    post: "EVENT PROJECT AND LOGISTICS",
    phone: "95885143355",
    email: "mrohillaofficial2801@gmail.com",
    image: "assets/contact/moksh.webp",
    linkedin: "https://www.linkedin.com/in/moksh-rohilla-669791191",
  },
  // 4: {
  //   name: "Mandeep(Vivan)",
  //   post: "TECHNICAL HEAD",
  //   phone: "8708893657",
  //   email: "mandeepses132@gmail.com",
  //   image: "assets/contact/mandeep.webp",
  //   linkedin:"https://www.linkedin.com/in/vivansingh-mandeep",
  // },
  5: {
    name: "Lohit",
    post: "DISCIPLINE",
    phone: "8684850406",
    email: "jindallohit28@gmil.com",
    image: "assets/contact/lohit.webp",
    linkedin: "https://www.linkedin.com/in/lohit-jindal/",
  },
  // 6: {
  //   name: "Deepesh",
  //   post: "REGISTRATION",
  //   phone: "7082058599",
  //   email: "medeepeshg@gmail.com",
  //   image: "assets/contact/deepash.webp",
  //   linkedin:"https://www.linkedin.com/in/deepesh-gupta-8b2174201",
  // },
  7: {
    name: "Triyansh",
    post: "RECEPTION",
    phone: "9306085585",
    email: "kalashaggrwll@gmail.com",
    image: "assets/contact/triyansh.jpg",
    linkedin: "https://www.linkedin.com/in/triyansh-garg-9b7274228",
  },
  8: {
    name: "Aashish",
    post: "PUBLICITY AND PARTNERS",
    phone: "8607537861",
    email: "aashishagarwal918@gmail.com",
    image: "assets/contact/asish.webp",
    linkedin:"https://www.linkedin.com/in/aashish-agarwal-b37608206",
  },
  // 9: {
  //   name: "Prabal",
  //   post: "ACCOMODATION",
  //   phone: "7078552222",
  //   email: "prabalpratabsingh@gamil.com",
  //   image: "assets/contact/prabal.webp",
  //   linkedin: "https://www.linkedin.com/in/prabal-pratap-singh-b89825157/",
  // },

};

let contactBody = document.querySelector(".contact-body");
for (let costaan in contactData) {
  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper");

  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.classList.add("profile-photo");
  img.src = contactData[costaan].image;

  let name = document.createElement("div");
  name.classList.add("name");
  name.classList.add("contact-name");
  name.innerHTML = contactData[costaan].name;

  let department = document.createElement("div");
  department.classList.add("department");
  department.innerHTML = contactData[costaan].post;

  let phone = document.createElement("span");
  phone.classList.add("phone");
  phone.innerHTML = `<a href="tel:${contactData[costaan].phone}"><img src="assets/icons/phone.svg" alt="phone-icon" class="icon"/></a>`;

  if (contactData[costaan].email)
    phone.innerHTML = `${phone.innerHTML}<a href="mailto:${contactData[costaan].email}"><img src="assets/icons/email.svg" alt="email-icon" class="icon"/></a>`;

  if (contactData[costaan].linkedin)
    phone.innerHTML = `${phone.innerHTML}<a href="${contactData[costaan].linkedin}"><img src="assets/icons/linkedin.svg" alt="email-icon" class="icon"/></a>`;

  if (contactData[costaan].instagram)
    phone.innerHTML = `${phone.innerHTML}<a href="mailto:${contactData[costaan].instagram}"><img src="assets/icons/instagram.png" alt="email-icon" class="icon"/></a>`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(phone);
  cardWrapper.appendChild(card);
  cardWrapper.appendChild(department);
  contactBody.appendChild(cardWrapper);
}


