//create database object
const execSumDB = {}

//create tables in the database
execSumDB.associates = []
execSumDB.aliases = []
execSumDB.country = []

//info objects for the tables
execSumDB.associates.push('John Watson', 'Professor James Moriarty', 'Irene Adler')
execSumDB.aliases.push('Holmesey', 'Charles Augustus Milverton', 'Banksy, probably')
execSumDB.country.push('United Kingdom')

//save the database
const saveDatabase = (databaseObject, localStorageKey) => {
	const stringifiedDatabase = JSON.stringify(databaseObject)
	localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(execSumDB, 'ExecSum')