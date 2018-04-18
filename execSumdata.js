//create database object
const groupDB = {}

//create tables in the database
groupDB.execSum = []
groupDB.classes = ['row', 'col-sm']

//info objects for the tables
const knownAssociates = {
	name: 'Known Associates',
	listContent: ['John Watson', 'Professor James Moriarty', 'Irene Adler']
}

const knownAliases = {
	name: 'Known Aliases',
	listContent: ['Holmesey', 'Charles Augustus Milverton', 'Banksy, probably']
}

const countryOfOrigin = {
	name: 'Country of Origin',
	listContent: ['United Kingdom']
}

groupDB.execSum.push(knownAliases, knownAssociates, countryOfOrigin)


//save the database
const saveDatabase = (databaseObject, localStorageKey) => {
	const stringifiedDatabase = JSON.stringify(databaseObject)
	localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(groupDB, 'holmesDB')