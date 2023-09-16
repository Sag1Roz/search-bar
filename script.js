const data = [
  { id: 1, name: "Sagi", Company: "Icon" },
  { id: 2, name: "Chen", Company: "Nursing Home" },
  { id: 3, name: "Almog", Company: "Microsoft" },
];

let filter = data;
const display = document.querySelector("#display");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", search);

renderToHtml();

function search(e) {
  e.preventDefault();
  display.innerHTML = ``;
  if (input.value == "") {
    filter = data;
  }
  filter = filter.filter((card) => {
    return card.name
      .toLocaleLowerCase()
      .includes(input.value.toLocaleLowerCase());
  });
  renderToHtml();
}

function renderToHtml() {
  for (const card of filter) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="card">
    <div class="name">Name: ${card.name}</div>
    <div class="company">Company: ${card.Company}</div>
    </div>`;
    display.appendChild(div);
  }
}
