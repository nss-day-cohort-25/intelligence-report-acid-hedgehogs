const secMaker = classname => {
    const sec = document.createElement("section");
    sec.classList = classname;
    return sec
}
// To call and use here is an example: 
const sec = secMaker("news");
