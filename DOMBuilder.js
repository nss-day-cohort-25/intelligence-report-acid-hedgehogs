//grabs the hook for the article div on Executive Summary
const contentHook = document.querySelector('#EMExec')
const fragment = document.createDocumentFragment()



const executiveDOMBuilder = () => {
	const topRow = document.createElement('div')
	topRow.classList = 'row'
	const botRow = document.createElement('div')
	botRow.classList = 'row'
	{//create the associates section
		//create HTML elements

		//Create the section and class for bootstrap
		const assSection = document.createElement('section')
		assSection.classList = 'col-sm'

		//create the "Known Associates" heading
		const assH3 = document.createElement('h3')
		assH3.textContent = 'Known Associates'
        
		//add the H3 to the section
		assSection.appendChild(assH3)

		//loop through elements in the database to create the UL for associates
		let assList = document.createElement('ul')
		for (let i = 0; i < execSumDB.associates.length; i++) {
			//for each item in the list, create a new LI and set the textContent to the item value
			let assListElement = document.createElement('li')
			assListElement.textContent = execSumDB.associates[i]
            
			//add the LI to the UL
			assList.appendChild(assListElement)
		}
        
		//Add the UL to the section
		assSection.appendChild(assList)

		//add the section to the row
		topRow.appendChild(assSection)
	}
    
	{//create the aliases section
		//create HTML elements

		//create the section and class for bootstrap
		const aliSection = document.createElement('section')
		aliSection.classList = 'col-sm'

		//create the "Aliases" heading
		const aliasesH3 = document.createElement('h3')
		aliasesH3.textContent = 'Known Aliases'
        
		//add the H3 to the section
		aliSection.appendChild(aliasesH3)
        
		//loop through elements to create the UL
		let aliList = document.createElement('ul')
		for (let i = 0; i < execSumDB.aliases.length; i++) {
			let aliListElement = document.createElement('li')
			aliListElement.textContent = execSumDB.aliases[i]
			aliList.appendChild(aliListElement)            
		}
		aliSection.appendChild(aliList)
		topRow.appendChild(aliSection)
	}

	fragment.appendChild(topRow)
    
	{//create the country of origin section
		//create HTML elements

		//create the section and class for bootstrap
		const oriSection = document.createElement('section')
		oriSection.classList = 'col-sm'

		//create the "Country of Origin" heading
		const oriH3 = document.createElement('h3')
		oriH3.textContent = 'Country of Origin'

		//add the h3 to the section
		oriSection.appendChild(oriH3)

		//loop through elements to create the UL
		let oriList = document.createElement('ul')
		for (let i = 0; i < execSumDB.country.length; i++) {
			let oriListElement = document.createElement('li')
			oriListElement.textContent = execSumDB.country[i]
			oriList.appendChild(oriListElement)
		}

		oriSection.appendChild(oriList)
		botRow.appendChild(oriSection)
	}

	fragment.appendChild(botRow)



	contentHook.appendChild(fragment)

}