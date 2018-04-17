//create database object
const execSumDB = {}

//create tables in the database
execSumDB.associates = []
execSumDB.aliases = []
execSumDB.country = []
execSumDB.classes = []

//info objects for the tables
execSumDB.associates.push('Known Associates', 'John Watson', 'Professor James Moriarty', 'Irene Adler')
execSumDB.aliases.push('Known Aliases', 'Holmesey', 'Charles Augustus Milverton', 'Banksy, probably')
execSumDB.country.push('Country of Origin', 'United Kingdom')
execSumDB.classes.push('row', 'col-sm')

//save the database
const saveDatabase = (databaseObject, localStorageKey) => {
	const stringifiedDatabase = JSON.stringify(databaseObject)
	localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(execSumDB, 'ExecSum')