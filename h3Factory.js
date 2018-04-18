const h3Factory = (textInput) => {
	const h3 = document.createElement('h3')
	h3.textContent = textInput
	return h3
}

//to call, this is the example:
//const h3 = h3Factory(groupDB.execSum[1]['name'])