/**
 * @type {Storage}
 */
const monStockage = localStorage;
/**
 * @type {HTMLElement}
 */
const btn = document.querySelector(".btn");
/**
 * @type {HTMLElement}
 */
const input = document.querySelector(".entrie");
/**
 * @type {HTMLElement}
 */
const container = document.querySelector(".container");

/**
 *
 * @param {string} key
 */
function appendEl(key) {
  const el = document.createElement("li");
  el.textContent = key;
  el.className ="bg-slate-600 text-white px-4 rounded-md w-[190px] p-2 cursor-pointer";
  container.appendChild(el);

  el.addEventListener("click", () => {
    monStockage.removeItem(key);
    el.remove();
  });
}

function StoredElements() {
  /**
   * @type {string[]}
   */
  const list = Object.keys(monStockage).filter((key) => key !== "debug");

  list.forEach((key) => {
    appendEl(key);
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  /**
   * @type {string}
   */
  let value = input.value;

  if (!monStockage.getItem(value)) {
    monStockage.setItem(value, true);
    appendEl(value);
  }
});

document.addEventListener("DOMContentLoaded", StoredElements);
