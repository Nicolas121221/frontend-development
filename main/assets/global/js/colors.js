const root = document.documentElement;
let isIncreasing = true;
const min = 200;
const max = 240;
let colorIndex = min + 1;

setInterval(() => {
	root.style.setProperty(
		"--color-light-primary",
		`hsl(${colorIndex}, 70%, 50%)`
	);
	if (isIncreasing) {
		colorIndex++;
	}
	if (!isIncreasing) {
		colorIndex--;
	}
	checkIncreasing();
}, 1000);

function checkIncreasing() {
	if (colorIndex === max) return (isIncreasing = false);
	if (colorIndex === min) return (isIncreasing = true);
}
