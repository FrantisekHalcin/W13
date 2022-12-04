let zoznamFilmov = [] ;

function pridajUdaj(event){

    event.preventDefault();

    let nazovFilmu = document.getElementById("film").value;
    let rok = document.getElementById("rok").value;
    let herec = document.getElementById("herec").value;

    movie = {Film: nazovFilmu, Rok: rok, Herec: herec};

    zoznamFilmov.push(movie);

    vypisAktualnyStav();
}

function vymazPosledny(){
    
    zoznamFilmov.pop();

    vypisAktualnyStav();

}

function vymazVsetko(){

    zoznamFilmov.length = 0;

    vypisAktualnyStav();

}

function vypisAktualnyStav(){


console.log("--------------Aktuálny zoznm filmov--------------");
    
zoznamFilmov.forEach((movie) => {
     
        console.log(movie);
    });
    
    

}