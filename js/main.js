{
  /* <input type="text" placeholder="name" id="inpName" />
        <input type="text" placeholder="image" id="inpImg" />
        <input type="text" placeholder="phone number" id="inpNumber" />
        <input type="text" placeholder="descriptions" id="inpSkills" />
        <input type="text" placeholder="price" id="inpPrice" />
        <button>Create</button> */
}

// making vairables for all inputs and for btn "create";

let inpName = document.getElementById("inpName");
let inpImage = document.getElementById("inpImage");
let inpNumber = document.getElementById("inpNumber");
let inpSkills = document.getElementById("inpSkills");
let inpPrice = document.getElementById("inpPrice");
let btnCreate = document.getElementById("btnCreate");
let form = document.querySelector("form");

// btnCreate.addEventListener("click", () => {});
const API = "http://localhost:8000/profiles";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // cheking for input values
  if (
    !inpName.value.trim() ||
    !inpImage.value.trim() ||
    !inpNumber.value.trim() ||
    !inpPrice.value.trim() ||
    !inpSkills.value.trim()
  ) {
    alert("fill all inputs");
    return;
  }

  // create new object and fill with input values
  let newProfile = {
    name: inpName.value,
    image: inpImage.value,
    number: inpNumber.value,
    skills: inpSkills.value,
    price: inpPrice.value,
  };
  createProfile(newProfile);

  let allInputs = form.querySelectorAll("input");
  allInputs.forEach((a) => {
    a.value = "";
  });
});

//create(adding new data to db.json);
async function createProfile(person) {
  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(person),
  });
}
