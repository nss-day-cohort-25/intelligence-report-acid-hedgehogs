const rapBodyRef = document.querySelector("#rapBody")

const fragment = document.createDocumentFragment()

const rapDomBuilder = () => {
    const topRow = document.createElement("div")
    topRow.classList = "row"
    const botRow = document.createElement('div')
    botRow.classList = "row"
    
    const conSection = document.createElement("section")
    conSection.classList = "col-sm"

    const conH3 = document.createElement("h3")
    conH3.textContent = "Known Convictions"

    conSection.appendChild(conH3)

    let conList = document.createElement("ul")
    for (let i = 0; i < rapDatabase.convictions.length; i++){
        let conListElement = document.createElement("li")
        conListElement.textContent = rapDatabase.convictions[i]

        conList.appendChild(conListElement)
    }

        conSection.appendChild(conList)

        topRow.appendChild(conSection)        



    {
        const prisonSection = document.createElement("section")
        prisonSection.classList = "col-sm"

        const prisonH3 = document.createElement("h3")
        prisonH3.textContent = "Prison Stay"

        prisonSection.appendChild(prisonH3)

        let prisonList = document.createElement("ul")
        for (let i = 0; i < rapDatabase.prisons.length; i++){
            let prisonListElement = document.createElement("li")
            prisonListElement.textContent = rapDatabase.prisons[i]
    
            prisonList.appendChild(prisonListElement)
        }
    
            prisonSection.appendChild(prisonList)
    
            topRow.appendChild(prisonSection)        
    
    }
    fragment.appendChild(topRow)

    {
        const witnessSection = document.createElement("section")
        witnessSection.classList = "col-sm"

        const witnessH3 = document.createElement("h3")
        witnessH3.textContent = "Witnesses"

        witnessSection.appendChild(witnessH3)

        let witnessList = document.createElement("ul")
        for (let i = 0; i < rapDatabase.prisons.length; i++){
            let witnessListElement = document.createElement("li")
            witnessListElement.textContent = rapDatabase.witness[i]
    
            witnessList.appendChild(witnessListElement)
        }
    
            witnessSection.appendChild(witnessList)
    
            topRow.appendChild(witnessSection)        
    
    }

    {
        const victimSection = document.createElement("section")
        victimSection.classList = "col-sm"

        const victimH3 = document.createElement("h3")
        victimH3.textContent = "Victims"

        victimSection.appendChild(victimH3)

        let victimList = document.createElement("ul")
        for (let i = 0; i < rapDatabase.victims.length; i++){
            let victimListElement = document.createElement("li")
            victimListElement.textContent = rapDatabase.victims[i]
    
            victimList.appendChild(victimListElement)
        }
    
            victimSection.appendChild(victimList)
    
            botRow.appendChild(victimSection)        
    
    }

    {
        const crimeSection = document.createElement("section")
        crimeSection.classList = "col-sm"

        const crimeH3 = document.createElement("h3")
        crimeH3.textContent = "Known Crimes"

        crimeSection.appendChild(crimeH3)

        let crimeList = document.createElement("ul")
        for (let i = 0; i < rapDatabase.crimes.length; i++){
            let crimeListElement = document.createElement("li")
            crimeListElement.textContent = rapDatabase.crimes[i]
    
            crimeList.appendChild(crimeListElement)
        }
    
            crimeSection.appendChild(crimeList)
    
            botRow.appendChild(crimeSection)        
    
    }

    fragment.appendChild(botRow)


    rapBodyRef.appendChild(fragment)
    

}

rapDomBuilder()