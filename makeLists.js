const fragment = document.createDocumentFragment()

const makeUl = (dataBase, parentElement, content) => {
        const createUl = document.createElement('ul')
        createUl.textContent = dataBase[content]
        parentElement.appendChild(createUl)   
}

makeUl(financialDatabase.financials, fragment, "name")

document.getElementById('financialHere').appendChild(fragment)