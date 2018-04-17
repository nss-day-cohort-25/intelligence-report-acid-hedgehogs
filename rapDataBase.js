const rapDatabase = {}

rapDatabase.convictions = []
rapDatabase.prisons = []
rapDatabase.witness = []
rapDatabase.victims = []
rapDatabase.crimes = []

rapDatabase.convictions.push("Terroristic Threating", "Public Intoxication", "Flying without a license")
rapDatabase.prisons.push("Homles spent 6 years in Brewyn located in Wreham JUN 1st 2030-JUN 15th 2036", "Holmes then went on to spend 3 years in Ford located in Arundel DEC 14th 2047-DEC 7th 2050", "Ford has been described as Britain's cushiest open prison.")
rapDatabase.witness.push("Tom Roberson", "Charlie Chapman", "Bailey Mitchell", "Agent Watson", "2 unidentified Moon Rabbits", "Little Toaster")
rapDatabase.victims.push("Adam Mason", "Alex Burton", "Silas Mcconnell", "NSSIA Students")
rapDatabase.crimes.push("Jail Break", "Violation of Gentlemans Code", "Environmental Violation")


// rapDatabase.info.push(
//     {
//        name: "Known Convictions" ,
//        value: "Terroristic Threating, Public Intoxication, Flying without a license"
//     },
//     {
//         name: "Prison Stay",
//         value: "Holmes spent 6 years in Berwyn located in Wreham JUN 1st 2030-JUN 15th 2036, Holmes then went on to spend 3 years in Ford located in Arundel. Ford has been described as Britain's cushiest open prison DEC 14th 2047-DEC 7th 2050 "
//     },
//     {
//         name: "Witness",
//         value: "Tom Roberson, Charlie Chapman, Bailey Mitchell, Agent Watson, 2 unidentified Moon Rabbits, Little Toaster"
//     },
//     {
//         name: "Victims",
//         value: "Adam Mason, Alex Burton, Silas Mcconnell, NSSIA Students"
//     },
//     {
//       name: "Alleged Crimes",
//       value: "Jail Break, Violation of Gentlemans Code, Environmental Violation" 
//     }
// )

localStorage.setItem(
    "rapDatabase",
    JSON.stringify(rapDatabase)
)
