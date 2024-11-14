fetch("https://dunamis-back.onrender.com").then(res => res.json().then(response => {
  const container2 = document.getElementsByClassName("container2")[0];
  const count = document.createElement("h3");
  count.innerHTML = `Cantidad de jóvenes: ${response.cantidad}`;
  container2.appendChild(count);
  const boxContainer = document.getElementsByClassName("box-container")[0];
  for (joven of response.jovenes) {
    const card = document.createElement("div");
    card.classList.add("box");
    const name = document.createElement("p");
    const lastname = document.createElement("p");
    const age = document.createElement("p");
    const phone = document.createElement("a");
    name.innerHTML = `Nombre: ${joven.name}`;
    lastname.innerHTML = `Apellido: ${joven.lastname}`;
    age.innerHTML = `Edad: ${joven.age}`;
    phone.innerHTML = "Enviar mensaje";
    phone.href = `https://wa.me/+549${joven.phone}`;
    phone.classList.add("btn");
    card.appendChild(name);
    card.appendChild(lastname);
    card.appendChild(age);
    card.appendChild(phone);
    boxContainer.appendChild(card);
  };
})).catch(error => {
  console.log(error);
});

const btnBuscar = document.getElementById("search-button");
const inputBuscar = document.getElementById("search-input");
btnBuscar.addEventListener("click", e => {
  e.preventDefault();
  if(!inputBuscar.value) {
    alert("Escriba un nombre");
  }else {
    fetch(`https://dunamis-back.onrender.com?nombre=${inputBuscar.value}`).then(res => res.json().then(response => {
      inputBuscar.value = "";
      const container = document.getElementById("searchBar-container");
      for (joven of response) {
        const card = document.createElement("div");
        card.classList.add("box");
        const name = document.createElement("p");
        const lastname = document.createElement("p");
        const age = document.createElement("p");
        const phone = document.createElement("a");
        name.innerHTML = `Nombre: ${joven.name}`;
        lastname.innerHTML = `Apellido: ${joven.lastname}`;
        age.innerHTML = `Edad: ${joven.age}`;
        phone.innerHTML = "Enviar mensaje";
        phone.href = `https://wa.me/+549${joven.phone}`;
        phone.classList.add("btn");
        card.appendChild(name);
        card.appendChild(lastname);
        card.appendChild(age);
        card.appendChild(phone);
        container.appendChild(card);
      };
    }));
  };
});
