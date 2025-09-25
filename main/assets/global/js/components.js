async function createComponent(path, id){
	try{
		const element = document.querySelector(id)
		if(!element) throw new Error("no element selected")

		const component = await fetch(path);
		const response = await component.text();

		element.innerHTML += response
	}
	catch(e){
		console.log("error during the creation of a component", e)
	}
}

createComponent("/main/components/navbar.html", "#navbar");
createComponent("/main/components/sidebar.html", "#sidebar")
