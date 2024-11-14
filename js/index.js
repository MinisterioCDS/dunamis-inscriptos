fetch("https://dunamis-back.onrender.com").then(res => res.json().then(response => {
  console.log(response.jovenes);
  const body = document.getElementsByTagName("body")[0];
  const count = document.createElement("h3");
  count.innerHTML = `Cantidad de jóvenes: ${response.cantidad}`;
  body.appendChild(count);
  for (joven of response.jovenes) {
    const card = document.createElement("div");
    const name = document.createElement("p");
    const lastname = document.createElement("p");
    const age = document.createElement("p");
    const phone = document.createElement("p");
    name.innerHTML = `Nombre: ${joven.name}`;
    lastname.innerHTML = `Apellido: ${joven.lastname}`;
    age.innerHTML = `Edad: ${joven.age}`;
    phone.innerHTML = `Celular: ${joven.phone}`;
    card.appendChild(name);
    card.appendChild(lastname);
    card.appendChild(age);
    card.appendChild(phone);
    body.appendChild(card);
    console.log(card);
  };
})).catch(error => {
  console.log(error);
});
