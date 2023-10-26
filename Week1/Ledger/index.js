import { HISTORY_LIST } from "./constants/HISTORY.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const listContainer = $(".list-container");
const balance = $(".total");
let expense = $(".summary-article__details-minus span");
let income = $(".summary-article__details-plus span");

// 총액 계산해서 보여주기
let INIT_BALANCE = 0;
let minusAmount = 0;
let plusAmount = 0;

function updateAmounts() {
  INIT_BALANCE = plusAmount - minusAmount;
  balance.innerText = INIT_BALANCE;
  expense.innerText = minusAmount;
  income.innerText = plusAmount;
}

function handleDeleteButtonClick(listItem, amount, type) {
  listItem.remove();

  if (type === "수입") {
    plusAmount -= amount;
  } else if (type === "지출") {
    minusAmount -= amount;
  }

  updateAmounts();
}

// 상수 파일에서 내역 불러와서 띄워주기
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

  const listDeleteButton = document.createElement("button");
  listDeleteButton.type = "button";
  listDeleteButton.innerText = "X";
  listDeleteButton.addEventListener("click", () => {
    handleDeleteButtonClick(listItem, amount, type);
  });
  listItem.appendChild(listDeleteButton);

  listContainer.appendChild(listItem);

  if (type === "수입") {
    plusAmount += amount;
  } else if (type === "지출") {
    minusAmount += amount;
  }
});

updateAmounts();

// 수입 지출 필터링
let checked = $("input checked");
const incomeCheckbox = $("#income");
const expenseCheckbox = $("#expense");
const incomeItems = $$(".plus");
const expenseItems = $$(".minus");

incomeCheckbox.addEventListener("change", () => {
  if (incomeCheckbox.checked) {
    incomeItems.forEach((item) => {
      item.parentNode.style.display = "flex";
    });
  } else {
    incomeItems.forEach((item) => {
      item.parentNode.style.display = "none";
    });
  }
});

expenseCheckbox.addEventListener("change", () => {
  if (expenseCheckbox.checked) {
    expenseItems.forEach((item) => {
      item.parentNode.style.display = "flex";
    });
  } else {
    expenseItems.forEach((item) => {
      item.parentNode.style.display = "none";
    });
  }
});
