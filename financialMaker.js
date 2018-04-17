// create documentFragment
const fragment = document.createDocumentFragment()
// function to build dom to fragment
const financialDomBuilder = () => {
    // create div for row, create new div for every 3 sections
    const financialDiv = document.createElement('div')      
    financialDiv.className = financialDatabase.classes.divClasses
    fragment.appendChild(financialDiv)
    
    // create sections for content with forEach
    financialDatabase.financials.forEach(currentSection => {
        
        const financialSection = document.createElement('section')
        financialSection.className = financialDatabase.classes.sectionClasses
        financialDiv.appendChild(financialSection)
        // create h3 for title
        const financialH3 = document.createElement('h3')
        financialH3.textContent = currentSection.name
        financialSection.appendChild(financialH3)
        
        // create multiple p's for content and append to H3
        for (let i = 0; i < currentSection.listOf.length; i ++) {
            let financialP = document.createElement('p')
            financialP.textContent += currentSection.listOf[i]
            financialSection.appendChild(financialP)
            
        }
        document.getElementById('financialHere').appendChild(fragment)
    })
}

financialDomBuilder()