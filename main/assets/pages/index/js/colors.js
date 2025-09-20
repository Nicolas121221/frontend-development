const root = document.documentElement;
let colorIndex = 200

setInterval(()=>{
	root.style.setProperty("--color-light-primary", `hsl(${colorIndex}, 70%, 50%)`);
	if(colorIndex === 220) return colorIndex = 200
	return colorIndex ++
},100)
