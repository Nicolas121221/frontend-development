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
	for (w = 0; w < 6; w++) {
		const tr = document.createElement("tr");
		for (i = 1; i < 8; i++) {
			const currentDay = w * 7 + i - getWeekday();
			const date = new Date(
				`${currentMonth}/${currentDay}/2025`
			).getDate();

			let td;

			if (date !== "Invalid Date") td = createCheckboxTd(currentDay);
			if (
				currentDay <= 0 ||
				currentDay > 31 ||
				(date === 1 && currentDay > 1)
			)
				td = document.createElement("td");
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
	addCheckboxListeners();
}

monthSelect.addEventListener("change", (e) => {
	currentMonth = e.target.value;
	table.querySelector("tbody").remove();
	createDays();
	setMonth();
});

function getWeekday() {
	const date = new Date(`${currentMonth}/1/2025`);
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return days.indexOf(date.toLocaleDateString("en-us", { weekday: "short" }));
}

function setMonth() {
	const monthTitle = document.querySelector("#month-title");
	monthTitle.innerText = new Date(
		`${currentMonth}/1/2025`
	).toLocaleDateString("en-US", { month: "long" });
}

function createCheckboxTd(day) {
	const checkbox = document.createElement("input");
	const label = document.createElement("label");
	const td = document.createElement("td");

	label.innerText = day;
	label.setAttribute("for", day);
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("id", day);
	checkbox.setAttribute("value", `${currentMonth}/${day}`);
	checkbox.setAttribute("name", "day");

	label.appendChild(checkbox);
	td.appendChild(label);
	return td;
}

function addCheckboxListeners() {
	const checkbox = document.querySelectorAll("[type=checkbox]");
	checkbox.forEach((box) => {
		box.addEventListener("click", (e) => {
			checkbox.forEach((checkbox) => {
				if (checkbox !== e.target) checkbox.checked = false;
			});

			const selectedBox = document.querySelector("[type=checkbox]");

			const dayHeader = document.querySelector("#day-header");

			if (selectedBox) {
				dayHeader.innerText = box.parentElement.innerText
			} else {
				dayHeader.innerText = monthSelect.value;
			}
		});
	});
}

createMonthOptions();
createCalendar();
createDays();
setMonth();
addCheckboxListeners();
