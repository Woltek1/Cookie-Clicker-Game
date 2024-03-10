//Variable responsible for cookie image
let cookie = document.querySelector('.cookies');

//Variable responsible for displaying number of cookies
let counter = parseInt(localStorage.getItem("counter")) || 0;

//Variables for plus 1 cookie per second
let plus1 = parseInt(localStorage.getItem("plus1")) || 0;
let plus_1 = document.getElementById("plus-1");

//Variables for plus 2 cookies per second
let plus2 = parseInt(localStorage.getItem("plus2")) || 0;
let plus_2 = document.getElementById("plus-2");

//Variables for plus 5 cookies per second
let plus5 = parseInt(localStorage.getItem("plus5")) || 0;
let plus_5 = document.getElementById("plus-5");

//Variables for plus 1 cookie per click
let click2 = parseInt(localStorage.getItem("click2")) || 0;
let click_2 = document.getElementById("click-2");
let addClick = parseInt(localStorage.getItem("addClick")) || 0;

//Variables for plus 2 cookies per click
let click3 = parseInt(localStorage.getItem("click3")) || 0;
let click_3 = document.getElementById("click-3");
let addClick2 = parseInt(localStorage.getItem("addClick2")) || 0;

//This function saves all the changes
function saveGameState() {
    localStorage.setItem("counter", counter);
    localStorage.setItem("plus1", plus1);
    localStorage.setItem("plus2", plus2);
    localStorage.setItem("plus5", plus5);
    localStorage.setItem("click2", click2);
    localStorage.setItem("click3", click3);
    localStorage.setItem("addClick", addClick);
    localStorage.setItem("addClick2", addClick2);
}
window.addEventListener("beforeunload", saveGameState);

//This function will animate the cookie image
cookie.addEventListener("click", event => {
    event.target.style.transform = 'scale(1.1)';
    setTimeout(function() {
        cookie.style.transform = 'scale(1)'
    }, 200);
});

//This function will add one cookie per click
click_2.addEventListener("click", event => {
    if (counter >= 200) {
        counter -= 200;
        click2++;
        addClick += 1;
    }
    saveGameState();
});

//This function will add two cookies per click
click_3.addEventListener("click", event => {
    if (counter >= 300) {
        counter -= 300;
        click3++;
        addClick += 2;
    }
    saveGameState();
});

//This function will add a specific number of cookie for every click
cookie.addEventListener("click", event => {
    counter+= 1 + addClick + addClick2;
    saveGameState();
});

//This function will buy 1 cookie per second upgrade
plus_1.addEventListener("click", event => {
    if (counter >= 100) {
        counter -= 100;
        plus1++;
        //This function will add one cookie per second
        function addOneCookie() {
            counter += 1;
        }
        setInterval(addOneCookie, 1000);
    }
    saveGameState();
});

//This function will buy 2 cookies per second upgrade
plus_2.addEventListener("click", (event) => {
    if (counter >= 200) {
        counter -= 200;
        plus2++;
        //This function will add two cookies per second
        function addTwoCookies() {
            counter += 2;
        }
        setInterval(addTwoCookies, 1000);
    }
    saveGameState();
});

//This function will buy 5 cookies per second upgrade
plus_5.addEventListener("click", (event) => {
    if (counter >= 500) {
        counter -= 500;
        plus5++;
        //This function will add five cookies per second
        function addFiveCookies() {
            counter += 5;
        }
        setInterval(addFiveCookies, 1000);
    }
    saveGameState();
});


//This function will display counter every 10ms
function display() {
    document.getElementById("counterValue").textContent = counter;
    document.getElementById("plus1").textContent = plus1;
    document.getElementById("plus2").textContent = plus2;
    document.getElementById("plus5").textContent = plus5;
    document.getElementById("click2").textContent = click2;
    document.getElementById("click3").textContent = click3;
    saveGameState();
}
setInterval(display, 10);

window.addEventListener("load", () => {
    display(); // Wyświetlamy aktualny stan gry
});