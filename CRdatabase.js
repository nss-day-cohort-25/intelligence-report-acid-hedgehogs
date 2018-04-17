const NewsFeedDatabase = {
    aside: "All events have a rating of likelihood that ranges from 1-10. This is based on personal M.O (Modus Operandi), reliability of witnesses and reports, and of course, science."
    // Define the database object
};

 NewsFeedDatabase.details = [];
    
 // make data item and put in NewsFeedDatabase.details
 NewsFeedDatabase.details.push(
    {
        title: "Sherlock, the first foreign agent in space?",
        probability: 10,
        date: "January 7, 2047 at",
        time: "19:57",
        location: "Andromeda",
        event: "Violation. Suspect was caught attempting to use protected resources to manufacture a pipe.",
        victims: ["12 NSSIA students found out of breath and seeking asthma inhalers from smoke inhalation"],
        witnesses: ["undercover agent Watson", "2 unidentified moon rabbits", "1 brave little toaster"],
        enforcement: "National Aeronautics and Space Administration(NASA) Division of Environment Protection"

    },
    {
        title: "Holmes goes ballistic at wedding!",
        probability: 2,
        date: "April 15, 2047 at",
        time: "03:14",
        location: "Eastern Berwyn",
        event: "The apparent doubleganger spent the evening swinging his cane around half-hazzardly, apparently so upset with the reception he murdered the entertainment. He narrowly escaped police custody. He has been charged with suspected murder, public intoxication, and violation of the gentleman's code.",
        victims: ["Adam Mason", "Alex Burton", "Silas Mcconnell" ],
        witnesses: ["Tom Robinson"],
        enforcement: "Berwyn Police Division of Weddings"
    },
    {
        title: "The Mysterious Escape",
        probability: 7,
        date: "December 7, 2050 at",
        time: "12:03",
        location: "Arundel",
        event: 'When prison gaurds went to check on the inmate, they found he was no longer located in his cell. While officials claim he pulled a "Harry Houdini" act with his escape, given the lax nature of the prison, our agency would not be surprised if he simply walked out of the front doors.',
        victims: ["none"],
        witnesses: ["Charlie Chapman", "Bailey Mitchell"],
        enforcement: "Ford Federal Prison of Arundel Escape Department"
    }
);










// Turn information into a JSON string to save it

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(NewsFeedDatabase, "CRDatabase")