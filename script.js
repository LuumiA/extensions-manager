// @ts-nocheck
const list = document.getElementById("extensions-list");
const all = document.getElementById("all");
const active = document.getElementById("active");
const inactive = document.getElementById("inactive");

console.log(list);

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    renderExtensions(data);

    active.addEventListener("click", () => {
      const produitsDisponibles = data.filter((produit) => {
        return produit.isActive === true;
      });
      renderExtensions(produitsDisponibles);
    });

    all.addEventListener("click", () => {
      renderExtensions(data);
    });

    inactive.addEventListener("click", () => {
      const produitsDisponibles = data.filter((produit) => {
        return produit.isActive === false;
      });
      renderExtensions(produitsDisponibles);
    });
  })

  .catch((error) => console.error("Error fetching data:", error));

const renderExtensions = (data) => {
  list.innerHTML = "";

  data.forEach((extension) => {
    const element = document.createElement("li");
    element.textContent = `${extension.name}`;
    const paragraph = document.createElement("p");
    paragraph.textContent = `${extension.description}`;
    const image = document.createElement("img");
    image.src = `${extension.logo}`;
    image.alt = `${extension.name}`;
    const button = document.createElement("button");
    button.textContent = "remove";

    button.addEventListener("click", (event) => {
      const elementClique = event.target;

      const card = elementClique.parentElement;
      card.remove();
    });

    list.append(element);
    element.appendChild(paragraph);
    element.appendChild(image);
    element.appendChild(button);
  });
};
