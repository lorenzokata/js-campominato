document.getElementById('start').addEventListener('click', function(){

    var difficolta = document.getElementById('difficolta').value;

    var maxRange = 100;

    if (difficolta == 2) {
        maxRange = 80;
    }

    if (difficolta == 3) {
        maxRange = 50;
    }

    console.log(maxRange);

    var arrayComputer = [];

    var lengthArrayComputer = 16;

    while (arrayComputer.length < lengthArrayComputer) {

        var numPcRandom = Math.floor(Math.random()*maxRange)+1;

        if (!arrayComputer.includes(numPcRandom)) {

            arrayComputer.push(numPcRandom);
        }
    }

    console.log(arrayComputer);


    var numeroPresente = false;

    var arrayUtente = [];

    while (!numeroPresente && arrayUtente.length < (maxRange - lengthArrayComputer)) {

        var numeroUtente = parseInt(prompt('Inserisci il numero'));

        while (arrayUtente.includes(numeroUtente) || numeroUtente > maxRange || numeroUtente < 1) {

            if (arrayUtente.includes(numeroUtente)) {
                numeroUtente = parseInt(prompt('Inserisci un numero diverso da quelli inseriti in precedenza'));
            }
            
            if (numeroUtente > maxRange || numeroUtente < 1) {
                numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + maxRange));
            }
        }

        if (!arrayComputer.includes(numeroUtente)) {
            arrayUtente.push(numeroUtente);
        } else{
            numeroPresente = true;
        }

        console.log(numeroPresente);
    }

    console.log(arrayUtente);

    if (arrayUtente.length == (maxRange - lengthArrayComputer)) {
        console.log('HAI VINTO!!!!');
    } else{
        console.log('BOOOOM!!!! Il tuo punteggio é: ' + arrayUtente.length);
    }

});
