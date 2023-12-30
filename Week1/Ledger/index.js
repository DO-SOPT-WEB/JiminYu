import { HISTORY_LIST } from "./constants/HISTORY.js";
import { CATEGORY } from "./constants/CATEGORY.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const listContainer = $(".list-container");
const balance = $(".total");
let expense = $(".summary-article__details-minus span");
let income = $(".summary-article__details-plus span");

// 총액 계산해서 보여주기
const INIT_BALANCE = 0;
let balanceAmount = 0;
let minusAmount = 0;
let plusAmount = 0;

function updateAmounts() {
  plusAmount = 0;
  minusAmount = 0;

  HISTORY_LIST.forEach((history, index) => {
    const amount = history.amount;
    const type = history.type;

    if (type === "수입") {
      plusAmount += amount;
    } else if (type === "지출") {
      minusAmount += amount;
    }
  });
  balanceAmount = plusAmount - minusAmount;
  balance.innerText = balanceAmount;
  expense.innerText = minusAmount;
  income.innerText = plusAmount;
}

function handleDeleteButtonClick(listItem, amount, type, index) {
  listItem.remove();

  if (type === "수입") {
    plusAmount -= amount;
  } else if (type === "지출") {
    minusAmount -= amount;
  }

  HISTORY_LIST.splice(index, 1);

  updateAmounts();
}

// 상수 파일에서 내역 불러와서 띄워주기
function updateHistoryList() {
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
      handleDeleteButtonClick(listItem, amount, type, index);
    });
    listItem.appendChild(listDeleteButton);

    listContainer.appendChild(listItem);
  });
}

function updateNewHistory() {
  listContainer.innerHTML = "";
  updateHistoryList();
  updateAmounts();
}

balance.innerText = INIT_BALANCE;
updateHistoryList();
updateAmounts();

// 수입 지출 필터링
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

// 버튼 누르면 모달 올라오게
const addListButton = $("#addition");
const addModal = $(".modal-container");
addListButton.addEventListener("click", () => {
  addModal.classList.add("open");
  updateCategoryOptions();
});

//모달 닫기
const closeButton = $(".close");
closeButton.addEventListener("click", () => {
  addModal.classList.remove("open");
});

// 모달 숫자 입력 시 콤마 찍히도록
const input = $("#amount");
input.addEventListener("keyup", function (e) {
  let amountValue = e.target.value;
  amountValue = amountValue.replace(/,/g, "");

  // 숫자가 아닌 값이 입력되었는지 검사
  if (isNaN(Number(amountValue))) {
    input.value = 0;
  } else {
    const formatValue = Number(amountValue).toLocaleString("ko-KR");
    input.value = formatValue;
  }
});

//모달 수입 지출 중 하나만 선택 가능하도록
const modalIncomeCheckbox = $("#modalIncome");
const modalExpenseCheckbox = $("#modalExpense");

modalIncomeCheckbox.addEventListener("change", () => {
  if (modalIncomeCheckbox.checked) {
    modalExpenseCheckbox.checked = false;
  }

  updateCategoryOptions();
});

modalExpenseCheckbox.addEventListener("change", () => {
  if (modalExpenseCheckbox.checked) {
    modalIncomeCheckbox.checked = false;
  }

  updateCategoryOptions();
});

// 모달 수입 지출 클릭에 맞는 옵션 띄워주기
const modalCategory = $("#category");

function updateCategoryOptions() {
  modalCategory.innerHTML = "";

  const SelectedCategory = modalIncomeCheckbox.checked
    ? "수입"
    : modalExpenseCheckbox.checked
    ? "지출"
    : "null";

  if (SelectedCategory) {
    const filteredCategoryOptions = CATEGORY.filter(
      (item) => item.type === SelectedCategory
    );
    filteredCategoryOptions.forEach((optionItem) => {
      const option = document.createElement("option");
      option.value = optionItem.category;
      option.text = optionItem.category;
      modalCategory.appendChild(option);
    });
  }
}

//저장하기 버튼 누르면 리스트에 항목 추가
const modalSaveButton = $(".save");
modalSaveButton.addEventListener("click", () => {
  const category = $("#category").value;
  const amount = Number($("#amount").value.replace(/,/g, ""));
  const subject = $("#subject").value;
  const type = $("#modalIncome").checked ? "수입" : "지출";

  const newItem = {
    category,
    amount,
    subject,
    type,
  };

  HISTORY_LIST.push(newItem);
  alert("저장 완료!🥳");

  updateNewHistory();

  $("#category").value = "";
  $("#amount").value = "";
  $("#subject").value = "";
  $("#modalIncome").checked = true;
  $("#modalExpense").checked = false;
});
