const monthSelect = document.querySelector("#month-select");
const table = document.querySelector("#month-table");

const monthOptions = [];
for (let i = 1; i < 8; i++) {
	const date = new Date(`${5+i}/1/2025`).toLocaleDateString("pt-BR", {
		month: "short",
	});

	monthOptions.push(`<option>${date}</option>`);
}

monthOptions.map((month) => {
	monthSelect.innerHTML += month;
});


const weekdays = [];
const thead = document.createElement("thead")
const tr = document.createElement("tr")
for (let i = 0; i < 7; i++) {
	const date = new Date(`1/${5+i}/2025`).toLocaleDateString("pt-BR", {
		weekday: "short",
	});

	weekdays.push(`<td>${date}</td>`)
	tr.innerHTML += weekdays[i]
}

thead.appendChild(tr)
table.appendChild(thead)
