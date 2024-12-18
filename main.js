
let massiv = [];
while (true) {
    let kommanda = prompt("Kommanda kiriting");
    if (kommanda === "stop") {
        console.log("Dastur to'xtatildi.", massiv);
        break
       }
    let qism = kommanda.split(" ");
    let buyruq = qism[0];
    let qiymat = qism[1];
    if (buyruq === "add") {
        massiv.push(qiymat);
        console.log(`${qiymat}`, massiv);
    } else if (buyruq === "del") {
        let index = massiv.indexOf(qiymat);
        if (index !== -1) {
            massiv.splice(index, 1); 
            console.log(`${qiymat} `, massiv);
        } else {
            console.log(`${qiymat} massivda topilmadi.`);
        }
    } else {
        console.log("Noto'g'ri kommanda.");
    }
}
