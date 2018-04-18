//hooks
const contentHook2 = document.querySelector('#something')
const fragment2 = document.createDocumentFragment()

//append child function
const appendinator = (parent, child) => {
	return parent.appendChild(child)
}

//accepts a string of classes as an argument; returns a section with those classes
// const sectionFactory = (classes, blockName) => {
// 	const section = document.createElement('section')
// 	section.classList += classes
// 	section.setAttribute('blockName', blockName)
// 	return section
// }

const articleFactory = (blockName) => {
	const article = document.createElement('article')
	article.setAttribute('blockname', blockname)
	return article
}

const h3Factory = (textInput, blockName) => {
	const h3 = document.createElement('h3')
	h3.textContent = textInput
	return h3
}

// const listFactory = (inputArray) => {
// 	let listElement = document.createElement('ul')
// 	for (let i = 0; i < inputArray.length; i++) {
// 		let listItemElement = document.createElement('li')
// 		listItemElement.textContent = inputArray[i]
// 		listElement.appendChild(listItemElement)        
// 	}
// 	return listElement
// }

//try to create an article with the correct H3 attached
appendinator(articleFactory('knownAssociates'), h3Factory(groupdb.execSum[1]['name']))
appendinator(fragment2, //articleFactory that pulls the specific article)


// h3Factory(groupDB.execSum[knownAssociates][0])

// console.log(holmesDB.execSum[1]['name'])



// //this part works
// appendinator(fragment2, sectionFactory('col-sm', 'customAttribute'))

//append fragment to DOM
appendinator(contentHook2, fragment2)