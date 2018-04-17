const print = document.querySelector("#title");
const fragment = document.createDocumentFragment();

// Pull database function
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
const NewsData = loadDatabase("CRDatabase");

// Add aside to fragment 
const aside = document.createElement("aside");
const p = document.createElement("p");
aside.appendChild(p);
p.textContent = NewsData.aside;
fragment.appendChild(aside);

// Pull each article and add to fragment
const NewsBuilder = () => {
        NewsData.details.forEach(NewsData => {
            // Base article made
            const art = document.createElement("article");
            fragment.appendChild(art);

            // Base section made for article
            const sec = document.createElement("section");
            sec.classList = "news";
            // Added section to artilce
            art.appendChild(sec);

            //Created and added header to the section
            const header = document.createElement("header");
            sec.appendChild(header);

            // Made h3 content or title for the header and added it
            const h3 = document.createElement("h3");
            h3.textContent = NewsData.title;
            header.appendChild(h3);

            // Probability date made and printed
            const pr = document.createElement("p");
            pr.textContent = "Probability: " + NewsData.probability;
            sec.appendChild(pr);

            // First bullet list to name Date and added it
            const ul = document.createElement("ul");
            const li =document.createElement("li");
            li.textContent = "Date"
            ul.appendChild(li);
            sec.appendChild(ul);

            // Date imported into a bullet list
            const ulDInfo = document.createElement("ul");
            const liDInfo = document.createElement("li");
            const time = document.createElement("time");
            // Date content text made
            liDInfo.textContent = NewsData.date;
            time.textContent = " " + NewsData.time;
            // Added all together
            liDInfo.appendChild(time);
            ulDInfo.appendChild(liDInfo);
            ul.appendChild(ulDInfo);
        
            // Location into a bullet List
            const ilLName = document.createElement("li");
            ilLName.textContent = "Location";
            ul.appendChild(ilLName)

            // Location content
            const ulLInfo = document.createElement("ul");
            const liLInfo = document.createElement("li");
            liLInfo.textContent = NewsData.location;
            // Added Location content
            ulLInfo.appendChild(liLInfo);
            ilLName.appendChild(ulLInfo);

            // Event into a bullet List
            const ilEName = document.createElement("li");
            ilEName.textContent = "Event";
            ul.appendChild(ilEName)

            // Event content
            const ulEInfo = document.createElement("ul");
            const liEInfo = document.createElement("li");
            liEInfo.textContent = NewsData.event;
            // Added Event content
            ulEInfo.appendChild(liEInfo);
            ilEName.appendChild(ulEInfo);

            // Victims into a bullet List
            const ilVName = document.createElement("li");
            ilVName.textContent = "Victims";
            ul.appendChild(ilVName)
            
            // Victim's loop function
            const ulVInfo = document.createElement("ul");
            NewsData.victims.forEach(victims => {
                const liVInfo = document.createElement("li");
                liVInfo.textContent = victims;
                ulVInfo.appendChild(liVInfo);
            })
            ilVName.appendChild(ulVInfo);


            // Witnesses into a bullet List
            const ilWName = document.createElement("li");
            ilWName.textContent = "Witnesses";
            ul.appendChild(ilWName)
            
            // Witnesses' loop function
            const ulWInfo = document.createElement("ul");
            NewsData.witnesses.forEach(witness => {
                const liWInfo = document.createElement("li");
                liWInfo.textContent = witness;
                ulWInfo.appendChild(liWInfo);
            })
            ilWName.appendChild(ulWInfo);

            // Event into a bullet List
            const ilEAName = document.createElement("li");
            ilEAName.textContent = "Enforcement Agency";
            ul.appendChild(ilEAName)

            // Event content
            const ulEAInfo = document.createElement("ul");
            const liEAInfo = document.createElement("li");
            liEAInfo.textContent = NewsData.enforcement;
            // Added Event content
            ulEAInfo.appendChild(liEAInfo);
            ilEAName.appendChild(ulEAInfo);



            print.appendChild(fragment);

    });
}

// Load into article cards
NewsBuilder();