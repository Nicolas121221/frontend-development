const monthSelect = document.querySelector("#month-select");
const table = document.querySelector("#month-table");
let selectedMonth = 1;

function createMonthOptions() {
	const monthOptions = [];
	for (let i = 1; i < 8; i++) {
		const date = new Date(`${5 + i}/1/2025`).toLocaleDateString("pt-BR", {
			month: "short",
		});

		monthOptions.push(`<option value="${date}">${date}</option>`);
	}

	monthOptions.map((month) => {
		monthSelect.innerHTML += month;
	});
}

function createCalendar() {
	const weekdays = [];
	const thead = document.createElement("thead");
	const tr = document.createElement("tr");
	for (let i = 0; i < 7; i++) {
		const date = new Date(`1/${5 + i}/2025`).toLocaleDateString("pt-BR", {
			weekday: "short",
		});

		weekdays.push(`<td>${date}</td>`);
		tr.innerHTML += weekdays[i];
	}

	thead.appendChild(tr);
	table.appendChild(thead);
}

createMonthOptions();
createCalendar();

function createDays() {
	const tbody = document.createElement("tbody");
	table.appendChild(tbody);

	for (w = 0; w < 5; w++) {
		const tr = document.createElement("tr");
		for (i = 0; i < 7; i++) {
			const date = new Date(
				`${selectedMonth}/${w * 7 + i}/2025`
			).toLocaleDateString("pt-BR", { day: "numeric" });
			const td = document.createElement("td");
			if (date !== "Invalid Date") td.innerText = date;
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.getElementsByTagName("tbody").remove();
	table.appendChild(tbody);
}

function checkMonth(month) {
	switch (month) {
		case "jun.":
			console.log(month);
			break;
		default:
			console.log("não é jun.");
			break;
	}
}

monthSelect.addEventListener("change", createDays);

createDays();
checkMonth();
