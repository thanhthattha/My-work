const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const responsiveBtn = document.querySelector(".responsive-btn");
const responsive = document.querySelector(".responsive");
const SHIPPING = 2;
const item = [
  {
    name: "Pizza: 001",
    price: 5.9,
    quantity: 1,
  },
  {
    name: "Pizza: 002",
    price: 6.9,
    quantity: 1,
  },
  {
    name: "Pizza: 003",
    price: 7.9,
    quantity: 1,
  },
];

function add() {
  item.push({
    name: `Pizza: ${Math.random().toFixed(3)}`,
    quantity: 1,
    price: Math.random() * 12,
  });
  render();
}
function remove(index) {
  item.splice(index, 1);
  render();
}
function updateQuantity(index, quantity) {
  if (quantity < 1) {
    return;
  }
  item[index].quantity = quantity;
  render();
}
function render() {
  let subTotal = 0;
  item.forEach((item) => {
    subTotal += item.quantity * item.price;
  });
  const total = subTotal + SHIPPING;
  const html = item
    .map(
      (item) => `
    <li class="order-item">
    <span class="item-name">${item.name}</span>

        <span class="item-quanlity">
            <button class="dec">-</button>
            <input style="font-size: 2rem;" type="number" class="quantity" name="" id="" value="${
              item.quantity
            }" />
            <button class="inc">+</button>
        </span>

        <span class="item-price">
            <span>$${(item.quantity * item.price).toFixed(2)}</span>
            <button class="delete btn-delete">X</button>
        </span>
</li>
    `
    )
    .join("");
  $("#order-items").innerHTML = html;

  const deleteButtons = [...$$(".delete")];
  const decButtons = [...$$(".dec")];
  const incButtons = [...$$(".inc")];
  for (let i = 0; i < deleteButtons.length; i++) {
    decButtons[i].addEventListener("click", () => {
      updateQuantity(i, item[i].quantity - 1);
    });
    incButtons[i].addEventListener("click", () => {
      updateQuantity(i, item[i].quantity + 1);
    });
    deleteButtons[i].addEventListener("click", () => {
      remove(i);
    });
  }

  $("#sub-total").innerText = `$${subTotal.toFixed(2)}`;
  $("#shipping").innerText = `$${SHIPPING}`;
  $("#total").innerText = `$${total.toFixed(2)}`;
}
$("#btn-add").addEventListener("click", () => {
  add();
});
render();
responsiveBtn.addEventListener("click", function () {
  responsive.innerHTML = `<h1 class="responsive">
  Xin lỗi, website này chỉ hoạt động trên máy tính và máy tính bản
</h1>`;
});
