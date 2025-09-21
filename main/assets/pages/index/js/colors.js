const root = document.documentElement;
let colorIndex = 180;
let isIncreasing = true;
const [min, max] = [180, 240]


setInterval(() => {
	root.style.setProperty("--color-light-primary",`hsl(${colorIndex}, 70%, 50%)`);
	if (colorIndex <= max && isIncreasing) {
		colorIndex--;
		checkIncreasing()
	}
	if (colorIndex >= min && !isIncreasing) {
		colorIndex++;
		checkIncreasing();
	}
}, 1000);

function checkIncreasing() {
	if(colorIndex === max) return isIncreasing = false
	if(colorIndex === min) return isIncreasing = true
};
