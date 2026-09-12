const list = document.getElementById("extensions-list");

console.log(list);

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((extension) => {
      const element = document.createElement("li");
      element.textContent = `${extension.name}`;
      const paragraph = document.createElement("p");
      paragraph.textContent = `${extension.description}`;
      const image = document.createElement("img");
      image.src = `${extension.logo}`;
      image.alt = `${extension.name}`;
      element.appendChild(paragraph);
      element.appendChild(image);
      list.append(element);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
