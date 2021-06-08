var arrayComputer = [];

var lengtharrayComputer = 16

while (arrayComputer.length < lengtharrayComputer) {

    var numPcRandom = Math.floor(Math.random()*100)+1;

    if (!arrayComputer.includes(numPcRandom)) {

        arrayComputer.push(numPcRandom);
    }
}

console.log(arrayComputer);

