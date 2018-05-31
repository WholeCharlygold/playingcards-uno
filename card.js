var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
var nombre;
var turno=1;
var cont = 0;

function getDeck()
{
    var deck = new Array();

    for (var i = 0; i < suits.length; i++)
    {
        for (var x = 0; x < cards.length; x++)
        {
            var card = {Value: cards[x], Suit: suits[i]};
            deck.push(card);
        }
    }

    return deck;
}


function deal()
{
    // remove top card from deck
    var card = deck[deck.length - 1];
    deck.splice(deck.length - 1, 1);
    return card;
}

function renderDeal(nomid) {

 if (deck[cont+1] == null) {
        alert(cont);
        alert("Se acabaron las cartas");
        document.getElementById("mazo").style.display = 'none';
        turno=2;
        agregarDatos(turno);
        

    }
    var card = document.createElement("div");
    //var deal= deal();
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[cont].Suit;
    card.setAttribute("draggable", "true");
    card.setAttribute("ondragstart", "dragstart(this,event)");
    card.setAttribute("id", "" + deck[cont].Value + deck[cont].Suit);
    value.innerHTML = deck[cont].Value;
    //alert(card.Value + card.Suit);
    //deal();
    card.appendChild(value);
    card.appendChild(suit);
    if (nomid == null) {
        document.getElementById("hand2").appendChild(card);
        cont++;
        renderMazo2();
    } else {

        document.getElementById("" + nomid).appendChild(card);
        cont++;
        setTimeout(function () {
            renderMazo2();
        }, 300);
    }

    }






function shuffle()
{
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++)
    {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

function renderDeck()
{
    for (var i = 0; i < deck.length; i++)
    {
        var card = document.createElement("div");
        var value = document.createElement("div");
        var suit = document.createElement("div");
        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[i].Suit;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("deck").appendChild(card);
        cont++;
    }
}

function renderHand()
{
    for (var i = 0; i < 3; i++)
    {

        var card = document.createElement("div");
        var value = document.createElement("div");
        var suit = document.createElement("div");
        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[i].Suit;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);


        document.getElementById("hand").appendChild(card);
        cont++;
    }

}
function renderHand2(nombre)
{
    document.getElementById("jugador").innerHTML = nombre;
    for (var i = 3; i < 6; i++)
    {
        var card = document.createElement("div");
        var value = document.createElement("div");
        var suit = document.createElement("div");
        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[i].Suit;
        card.setAttribute("draggable", "true");
        card.setAttribute("ondragstart", "dragstart(this,event)");
        card.setAttribute("id", "" + deck[i].Value + deck[i].Suit);


        value.innerHTML = deck[i].Value;

        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("hand2").appendChild(card);

        cont++;
    }

}
function renderGame()
{

    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[cont].Suit;
    //card.setAttribute("ondrop","drop(event)");
    //card.setAttribute("ondragover","allowDrop(event)");
    card.setAttribute("id", "doce");
    value.innerHTML = deck[cont].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("game").appendChild(card);



}
function renderMazo()
{

    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[cont].Suit;
    card.setAttribute("draggable", "true");
    card.setAttribute("ondragstart", "dragstart(this,event)");
    value.innerHTML = deck[cont].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("mazo").appendChild(card);


}
function renderMazo2()
{
    
        var card = document.createElement("div");
        var value = document.createElement("div");
        var suit = document.createElement("div");
        var mazo = document.getElementById("mazo");
        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[cont].Suit;
        card.setAttribute("draggable", "true");
        card.setAttribute("ondragstart", "dragstart(this,event)");
        value.innerHTML = deck[cont].Value;
        card.appendChild(value);
        card.appendChild(suit);

        //document.getElementById("mazo").appendChild(card);

        while (mazo.hasChildNodes())
            mazo.removeChild(mazo.firstChild);
        renderMazo();

    


}

function inicio() {
    nombre=prompt("TEclea tu nombre");
    if (nombre === "") {
        inicio();
    } else {
        load(nombre);
    }

}

function load(nombre)
{





    deck = getDeck();
    shuffle();
    //deal();
    //renderDeck();
    renderHand();
    renderHand2(nombre);



    renderGame();
    cont++;
    renderMazo();





}





//Funciones para el drag and drop
function dragstart(caja, evento) {
    // el elemento a arrastrar
    event.dataTransfer.setData('Data', caja.id);

}

function drop(target, evento) {
    // obtenemos los datos
   turno = 1;
    var caja = event.dataTransfer.getData('Data');
    var targetDiv = document.getElementById(caja).getElementsByClassName("value")[0];
    var comparDiv = document.getElementById(target.id).getElementsByClassName("value")[0];
    var StargetDiv = document.getElementById(caja).getElementsByClassName("suit")[0];
    var ScomparDiv = document.getElementById(target.id).getElementsByClassName("suit")[0];
    //alert(targetDiv.innerHTML);
    //alert(comparDiv.innerHTML);
    //alert(StargetDiv.className);
    //alert(ScomparDiv.className);
    // agregamos el elemento de arrastre al contenedor

    if (targetDiv.innerHTML === comparDiv.innerHTML || StargetDiv.className === ScomparDiv.className) {
        alert("Movimiento valido! VA LA COMPUTADORA");
        turno = 0;
        while (target.hasChildNodes())
            target.removeChild(target.firstChild);
        target.appendChild(document.getElementById(caja));
        if(document.getElementById("hand2").getElementsByClassName("card").length === 0){
            alert("EL JUGADOR GANO EL JUEGO");
              agregarDatos(turno);
        }

    } else
    {
        alert("MOVIMIENTO INVALIDO! TIRE DENUEVO!");
        turno = 1;
    }
    setTimeout(function () {
        jugar(turno);
    }, 2000);

}

function jugar(turno) {
    var targetDiv = document.getElementById("game").getElementsByClassName("value")[0];
    var ScomparDiv = document.getElementById("game").getElementsByClassName("suit")[0];
    var target = document.getElementById("game");
    var longitud = document.getElementById("hand").getElementsByClassName("card").length;
//alert("empieza");
//alert("El turno es de: "+turno);
    if (turno === 0) {
        for (var i = 0; i < longitud; i++) {

            var comparDiv = document.getElementById("hand").getElementsByClassName("value")[i];
            var StargetDiv = document.getElementById("hand").getElementsByClassName("suit")[i];
//            alert(comparDiv.innerHTML);
//            alert(StargetDiv.className);
//            alert(i);
//            alert(longitud);

            if (targetDiv.innerHTML === comparDiv.innerHTML || StargetDiv.className === ScomparDiv.className) {

                while (target.hasChildNodes())
                    target.removeChild(target.firstChild);
                target.appendChild(document.getElementById("hand").getElementsByClassName("card")[i]);
                alert(document.getElementById("hand").getElementsByClassName("card").length);
                if(document.getElementById("hand").getElementsByClassName("card").length === 0){
            alert("LA COMPUTADORA GANO EL JUEGO");
            agregarDatos(turno);
            
            
        }
                
                turno = 1;
                jugar(turno);
                break;
            }

        }
        if (turno === 0) {

            var nomid = "hand";
            
                renderDeal(nomid);
           
          setTimeout(function () {
        jugar(turno);
    }, 2000);

        }


    } else {

        alert("TURNO DEL JUGADOR");

    }



}

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 
         var msg; 
    
    
    function agregarDatos(turno){
        
        switch(turno){
            case 1:
                    db.transaction(function (tx) { 
            tx.executeSql("CREATE TABLE IF NOT EXISTS GAMES (id INTEGER PRIMARY KEY , computadora varchar, usuario varchar,score varchar)"); 
            tx.executeSql("INSERT INTO LOGS (computadora,usuario,score) VALUES (computadora,"+nombre+",perdio )"); 
            msg = '<p>Log message created and row inserted.</p>'; 
           // document.querySelector('#status').innerHTML =  msg; 
         });
                    break;
            
        case 0:
            db.transaction(function (tx) { 
            tx.executeSql("CREATE TABLE IF NOT EXISTS GAMES (id INTEGER PRIMARY KEY , computadora varchar, usuario varchar,score varchar)"); 
            tx.executeSql("INSERT INTO LOGS (computadora,usuario,score) VALUES (computadora,"+nombre+",PERDIO )"); 
            msg = '<p>Log message created and row inserted.</p>'; 
           // document.querySelector('#status').innerHTML =  msg; 
         });
            break;
        default:
            
            db.transaction(function (tx) { 
            tx.executeSql("CREATE TABLE IF NOT EXISTS GAMES (id INTEGER PRIMARY KEY , computadora varchar, usuario varchar,score varchar)"); 
            tx.executeSql("INSERT INTO LOGS (computadora,usuario,score) VALUES (computadora,"+nombre+",EMPATE )"); 
            msg = '<p>Log message created and row inserted.</p>'; 
           // document.querySelector('#status').innerHTML =  msg; 
       
         });
         break;
            
        }
           
         db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM GAMES', [], function (tx, results) { 
               var len = results.rows.length, i; 
               msg = "<p>Found rows: " + len + "</p>"; 
               document.querySelector('#status').innerHTML +=  msg; 
      
          alert(results.row.item(i).id);
               for (i = 0; i < len; i++) { 
                  msg = "<p><b>" + results.rows.item(i).id + "  "+results.rows.item(i).computadora+"  "+results.rows.item(i).usuario+" "+results.rows.item(i).score+"</b></p>"; 
                  document.querySelector('#status').innerHTML +=  msg; 
               } 
            }, null); 
         }); 
        
    }
         

window.onload = inicio;