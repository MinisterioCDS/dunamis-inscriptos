fetch("https://dunamis-back.onrender.com").then(res => res.json().then(response => {
  // const body = document.getElementsByTagName("body")[0];
  const container = document.getElementsByClassName("box-container")[0];
  const count = document.createElement("h3");
  count.innerHTML = `Cantidad de jóvenes: ${response.cantidad}`;
  container.appendChild(count);
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
    container.appendChild(card);
  };
})).catch(error => {
  console.log(error);
});
