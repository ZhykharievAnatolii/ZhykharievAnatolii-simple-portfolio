const xhr = new XMLHttpRequest();
const list = document.querySelector("ul");

xhr.open("GET", " https://users-api-id.herokuapp.com/users");

xhr.send();

xhr.onload = function () {
  const response = JSON.parse(xhr.response);
  response.forEach((response) => renderItem(response));
};
function renderItem({ name, photo, position }) {
  const item = document.createElement("li");

  (item.innerHTML = `
  <h2>${name}</h2>
  <img src="${photo}" alt="photoCards">
  <p>${position}</p>
  `)
    list.append(item);
}
/**
 * last correct version of momework about requests
 */
