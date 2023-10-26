import { HISTORY_LIST } from "./constants/HISTORY.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const INIT_BALANCE = 0;
const deleteButton = $$(".delete_button");
const listContainer = $(".list-container");

HISTORY_LIST.forEach((history, index) => {
  const listItem = document.createElement("li");
  const { category, subject, amount, type } = history;

  const spanCategory = document.createElement("span");
  spanCategory.className = "list__category";
  spanCategory.textContent = category;
  listItem.appendChild(spanCategory);

  const spanSubject = document.createElement("span");
  spanSubject.className = "subject";
  spanSubject.textContent = subject;
  listItem.appendChild(spanSubject);

  const spanAmount = document.createElement("span");
  spanAmount.className = "amount";
  spanAmount.textContent = type === "수입" ? amount : -amount;
  spanAmount.classList.add(type === "수입" ? "plus" : "minus");
  listItem.appendChild(spanAmount);

  listContainer.appendChild(listItem);

  const listDeleteButton = document.createElement("button");
  listDeleteButton.type = "button";
  listDeleteButton.innerText = "X";
  listDeleteButton.addEventListener("click", () => {
    listDeleteButton.parentNode.remove();
  });
});
