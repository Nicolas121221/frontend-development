const root = document.documentElement;
let isIncreasing = true;
const min = 0;
const max = 40;
let colorIndex = 1;

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
}, 10);

function checkIncreasing() {
	if (colorIndex === max) return (isIncreasing = false);
	if (colorIndex === min) return (isIncreasing = true);
}
