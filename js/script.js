document.getElementById('start').addEventListener('click', function(){

    var arrayComputer = [];

    var lengthArrayComputer = 16;

    while (arrayComputer.length < lengthArrayComputer) {

        var numPcRandom = Math.floor(Math.random()*100)+1;

        if (!arrayComputer.includes(numPcRandom)) {

            arrayComputer.push(numPcRandom);
        }
    }

    console.log(arrayComputer);


    var numeroPresente = false;

    var arrayUtente = [];

    while (!numeroPresente && arrayUtente.length < (100 - lengthArrayComputer)) {

        var numeroUtente = parseInt(prompt('Inserisci il numero'));

        while (arrayUtente.includes(numeroUtente) || 1 > numeroUtente > 100) {
            numeroUtente = parseInt(prompt('Inserisci un numero diverso da quelli inseriti in precedenza'));
        }

        if (!arrayComputer.includes(numeroUtente)) {
            arrayUtente.push(numeroUtente);
        } else{
            numeroPresente = true;
        }

        console.log(numeroPresente);
    }

    console.log(arrayUtente);

    if (arrayUtente.length == (100 - lengthArrayComputer)) {
        console.log('HAI VINTO!!!!');
    } else{
        console.log('BOOOOM!!!! Il tuo punteggio é: ' + arrayUtente.length);
    }

});
