//hooks
const contentHook2 = document.querySelector('#something')
const fragment2 = document.createDocumentFragment()


//append child function
const appendinator = (parent, child) => {
	return parent.appendChild(child)
}

//accepts a string of classes as an argument; returns a section with those classes
const sectionFactory = (classes) => {
	const section = document.createElement('section')
	section.classList += classes
	return section
}

const h3Factory = (textInput) => {
	const h3 = document.createElement('h3')
	h3.textContent = textInput
	return h3
}

const listFactory = (inputArray) => {
	let listElement = document.createElement('ul')
	for (let i = 0; i < inputArray.length; i++) {
		let listItemElement = document.createElement('li')
		listItemElement.textContent = inputArray[i]
		listElement.appendChild(listItemElement)        
	}
	return listElement
}


// appendinator(fragment2, listFactory(holmesDB.execSum[1]['listContent']))


// //create DOM elements in individual calls. This already does work.
// const topdiv = divFactory('row')
// const knoAss = sectionFactory('col-sm')
// const knoAssH3 = h3Factory(holmesDB.execSum[0]['name'])
// appendinator(knoAss, knoAssH3)
// const knoAssList = listFactory(holmesDB.execSum[0]['listContent'])
// appendinator(knoAss, knoAssList)
// appendinator(topdiv, knoAss)
// appendinator(fragment2, topdiv)

const execSumBuilder = () => {
	for (let i = 0; i < holmesDB.execSum.length; i++) {
		let currentSection = holmesDB.execSum[i]
		const section = sectionFactory('col-sm')
		const h3 = h3Factory(currentSection['name'])
		appendinator(section, h3)
		const listContent = listFactory(currentSection['listContent'])
		appendinator(section, listContent)
		appendinator(fragment2, section)
	}		
	appendinator(contentHook2, fragment2)
}