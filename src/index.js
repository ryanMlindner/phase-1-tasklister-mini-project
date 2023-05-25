document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputForm = document.querySelector("form");
  const todoListAnchor = document.getElementById("list");

  inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoItemToAdd = event.target.children[1].value;
  const containerForItem = document.createElement("li");

  containerForItem.innerText = todoItemToAdd;
  todoListAnchor.appendChild(containerForItem);

  const itemButton = document.createElement("button");

  itemButton.innerText = "Delete";
  containerForItem.appendChild(itemButton);
  itemButton.addEventListener("click", deleteItem);
  });

  function deleteItem(event) {
    const itemToDelete = event.target.parentElement;
    itemToDelete.remove();
  }
});
