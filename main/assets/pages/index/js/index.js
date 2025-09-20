const monthSelect = document.querySelector("#month-select");
const table = document.querySelector("#month-table");
let currentMonth = 6;

function createMonthOptions() {
	const monthOptions = [];
	for (let i = 1; i < 8; i++) {
		const date = new Date(`${5 + i}/1/2025`).toLocaleDateString("en", {
			month: "long",
		});
		monthOptions.push(`<option value="${5 + i}">${date}</option>`);
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
		const date = new Date(`1/${5 + i}/2025`).toLocaleDateString("en", {
			weekday: "short",
		});
		weekdays.push(`<td>${date}</td>`);
		tr.innerHTML += weekdays[i];
	}
	thead.appendChild(tr);
	table.appendChild(thead);
}

function createDays() {
	const tbody = document.createElement("tbody");
	for (w = 0; w < 5; w++) {
		const tr = document.createElement("tr");
		for (i = 1; i < 8; i++) {
			const currentDay = w * 7 + i - getWeekday();
			const date = new Date(
				`${currentMonth}/${currentDay}/2025`
			).toLocaleDateString("pt-BR", { day: "numeric" });
			const td = document.createElement("td");
			if (date !== "Invalid Date") td.innerText = date;
			if (currentDay < 0 || (currentDay > 30 && parseInt(date) < 10))
				td.innerText = "";
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

monthSelect.addEventListener("change", (e) => {
	currentMonth = e.target.value;
	table.querySelector("tbody").remove();
	createDays();
	setMonth();
});

function getWeekday() {
	const date = new Date(`${currentMonth}/1/2025`);
	const days = [
		"domingo",
		"segunda-feira",
		"terça-feira",
		"quarta-feira",
		"quinta-feira",
		"sexta-feira",
		"sábado",
	];

	return days.indexOf(date.toLocaleDateString("pt-BR", { weekday: "long" }));
}

function setMonth() {
	const monthTitle = document.querySelector("#month-title");
	monthTitle.innerText = new Date(
		`${currentMonth}/1/2025`
	).toLocaleDateString("en-US", { month: "long" });
}

createMonthOptions();
createCalendar();
createDays();
setMonth();
