const financialDatabase = {}

financialDatabase.financials = []
financialDatabase.financialClasses = []

const financialClasses = {
    divClasses: "row",
    sectionClasses: "col-sm"
}
const bankAccounts = {
    name: "Bank Accounts", 
    listOf: ["Bank of United Kingdom - 123456789011", "HMS Bank of Kenya - 34567890123", "Bank of Uzbekistan - 89012345678"]
}
const businesses = {
    name: "Businesses",
    listOf: ["Agro-King", "Sleuths-R-Us", "The Detectives Initiative"]
}
const blackMailed = {
    name: "Blackmailed Officials",
    listOf: ["Queen Elizabeth II", "Nelson Mandela", "Mayor Meghan Barry" ]
}
const laundered = {
    name: "Money Laundering Businesses",
    listOf: ["Fabulous Nails Inc", "Wash-o-matic Laundry"]
}

financialDatabase.financials.push(bankAccounts, businesses, blackMailed, laundered)
financialDatabase.classes = financialClasses

localStorage.setItem(
    "financialDatabase",
    JSON.stringify(financialDatabase)
)