// створюемо 9 текстових змінних зі значенням "Х"
var textX1 = document.createTextNode("X")
var textX2 = document.createTextNode("X")
var textX3 = document.createTextNode("X")
var textX4 = document.createTextNode("X")
var textX5 = document.createTextNode("X")
var textX6 = document.createTextNode("X")
var textX7 = document.createTextNode("X")
var textX8 = document.createTextNode("X")
var textX9 = document.createTextNode("X")
// створюемо 9 текстових змінних зі значенням "O"
var textO1 = document.createTextNode("O")
var textO2 = document.createTextNode("O")
var textO3 = document.createTextNode("O")
var textO4 = document.createTextNode("O")
var textO5 = document.createTextNode("O")
var textO6 = document.createTextNode("O")
var textO7 = document.createTextNode("O")
var textO8 = document.createTextNode("O")
var textO9 = document.createTextNode("O")
// СТВОРЮЄМО ЗМІННІ КНОПОК ЗА ID
var bt1 = document.getElementById("col-0")
var bt2 = document.getElementById("col-1")
var bt3 = document.getElementById("col-2")
var bt4 = document.getElementById("col-3")
var bt5 = document.getElementById("col-4")
var bt6 = document.getElementById("col-5")
var bt7 = document.getElementById("col-6")
var bt8 = document.getElementById("col-7")
var bt9 = document.getElementById("col-8")
// Додаємо існуючий тег span з id = "col-0" до змінної spanTag
// var - оператор, що створює змінну
// spanTag - змінна, назва змінної 
// document - змінна, файл index.html
// querySelector - функція запросу селектора по тегу span, 
// цей селектор називається #col-0 

// var spanTag = document.querySelector("span#col-0");

// var - оператор, що створює змінну
// newTagP - змінна, назва змінної
// document - змінна, файл index.html
// createElement - функція, що створює тег p в HTML документі

// var newTagP = document.createElement("p");
// newTagP.appendChild(text0)

// Додаємо до тегу span з id = "col-0" новий тег p, який зберігається в змінній newTagP
// spanTag - назва змінної
// appendChild - функція, 

// spanTag.appendChild(newTagP)
var spanTag1 = document.querySelector("span#col-0");
var newTagP1 = document.createElement("p");
//
var spanTag2 = document.querySelector("span#col-1");
var newTagP2 = document.createElement("p");
//
var spanTag3 = document.querySelector("span#col-2");
var newTagP3 = document.createElement("p");
//
var spanTag4 = document.querySelector("span#col-3");
var newTagP4 = document.createElement("p");
//
var spanTag5 = document.querySelector("span#col-4");
var newTagP5 = document.createElement("p");
//
var spanTag6 = document.querySelector("span#col-5");
var newTagP6 = document.createElement("p");
//
var spanTag7 = document.querySelector("span#col-6");
var newTagP7 = document.createElement("p");
//
var spanTag8 = document.querySelector("span#col-7");
var newTagP8 = document.createElement("p");
//
var spanTag9 = document.querySelector("span#col-8");
var newTagP9 = document.createElement("p");
// Відповідає за черговість ходу (буде ходити першим хрестик, тому що step = "cross")
var step = "cross"
// функція перемоги 
function victoriX(){
    // Перевірка по рядкам
    if ( spanTag1.className === "1" && spanTag2.className === "1" && spanTag3.className === "1"){
        bt1.style.background = "green";
        bt2.style.background = "green";
        bt3.style.background = "green";
        step = "stop";
    }
    if ( spanTag4.className === "1" && spanTag5.className === "1" && spanTag6.className === "1"){
        bt4.style.background = "green";
        bt5.style.background = "green";
        bt6.style.background = "green";
        step = "stop";
    }
    if ( spanTag7.className === "1" && spanTag8.className === "1" && spanTag9.className === "1"){
        bt7.style.background = "green";
        bt8.style.background = "green";
        bt9.style.background = "green";
        step = "stop";
    }
    // перевірка по стовбчикам
    if ( spanTag1.className === "1" && spanTag4.className === "1" && spanTag7.className === "1"){
        bt1.style.background = "green";
        bt4.style.background = "green";
        bt7.style.background = "green";
        step = "stop";
    }
    if ( spanTag2.className === "1" && spanTag5.className === "1" && spanTag8.className === "1"){
        bt2.style.background = "green";
        bt5.style.background = "green";
        bt8.style.background = "green";
        step = "stop";
    }
    if ( spanTag3.className === "1" && spanTag6.className === "1" && spanTag9.className === "1"){
        bt3.style.background = "green";
        bt6.style.background = "green";
        bt9.style.background = "green";
        step = "stop";
    }
    // Перевірка по діагоналі
    if ( spanTag1.className === "1" && spanTag5.className === "1" && spanTag9.className === "1"){
        bt1.style.background = "green";
        bt5.style.background = "green";
        bt9.style.background = "green";
        step = "stop";
    }
    if ( spanTag3.className === "1" && spanTag5.className === "1" && spanTag7.className === "1"){
        bt3.style.background = "green";
        bt5.style.background = "green";
        bt7.style.background = "green";
        step = "stop";
    }
}
//
function victoriO(){
    // Перевірка по рядкам
    if ( spanTag1.className === "2" && spanTag2.className === "2" && spanTag3.className === "2"){
        bt1.style.background = "blue";
        bt2.style.background = "blue";
        bt3.style.background = "blue";
        step = "stop";
    }
    if ( spanTag4.className === "2" && spanTag5.className === "2" && spanTag6.className === "2"){
        bt4.style.background = "blue";
        bt5.style.background = "blue";
        bt6.style.background = "blue";
        step = "stop";
    }
    if ( spanTag7.className === "2" && spanTag8.className === "2" && spanTag9.className === "2"){
        bt7.style.background = "blue";
        bt8.style.background = "blue";
        bt9.style.background = "blue";
        step = "stop";
    }
    // перевірка по стовбчикам
    if ( spanTag1.className === "2" && spanTag4.className === "2" && spanTag7.className === "2"){
        bt1.style.background = "blue";
        bt4.style.background = "blue";
        bt7.style.background = "blue";
        step = "stop";
    }
    if ( spanTag2.className === "2" && spanTag5.className === "2" && spanTag8.className === "2"){
        bt2.style.background = "blue";
        bt5.style.background = "blue";
        bt8.style.background = "blue";
        step = "stop";
    }
    if ( spanTag3.className === "2" && spanTag6.className === "2" && spanTag9.className === "2"){
        bt3.style.background = "blue";
        bt6.style.background = "blue";
        bt9.style.background = "blue";
        step = "stop";
    }
    // Перевірка по діагоналі
    if ( spanTag1.className === "2" && spanTag5.className === "2" && spanTag9.className === "2"){
        bt1.style.background = "blue";
        bt5.style.background = "blue";
        bt9.style.background = "blue";
        step = "stop";
    }
    if ( spanTag3.className === "2" && spanTag5.className === "2" && spanTag7.className === "2"){
        bt3.style.background = "blue";
        bt5.style.background = "blue";
        bt7.style.background = "blue";
        step = "stop";
    }
}
// ФУНКЦІЇ ХРЕСТИКІВ
function pressButtonX1(e){
    if (step == "cross"){
        if (spanTag1.className == "0"){
            newTagP1.appendChild(textX1);
            spanTag1.appendChild(newTagP1);
            spanTag1.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX2(e){
    if (step == "cross"){
        if (spanTag2.className == "0"){
            newTagP2.appendChild(textX2);
            spanTag2.appendChild(newTagP2);
            spanTag2.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX3(e){
    if (step == "cross"){
        if (spanTag3.className == "0"){
            newTagP3.appendChild(textX3);
            spanTag3.appendChild(newTagP3);
            spanTag3.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX4(e){
    if (step == "cross"){
        if (spanTag4.className == "0"){
            newTagP4.appendChild(textX4);
            spanTag4.appendChild(newTagP4);
            spanTag4.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX5(e){
    if (step == "cross"){
        if (spanTag5.className == "0"){
            newTagP5.appendChild(textX5);
            spanTag5.appendChild(newTagP5);
            spanTag5.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX6(e){
    if (step == "cross"){
        if (spanTag6.className == "0"){
            newTagP6.appendChild(textX6);
            spanTag6.appendChild(newTagP6);
            spanTag6.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX7(e){
    if (step == "cross"){
        if (spanTag7.className == "0"){
            newTagP7.appendChild(textX7);
            spanTag7.appendChild(newTagP7);
            spanTag7.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX8(e){
    if (step == "cross"){
        if (spanTag8.className == "0"){
            newTagP8.appendChild(textX8);
            spanTag8.appendChild(newTagP8);
            spanTag8.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
function pressButtonX9(e){
    if (step == "cross"){
        if (spanTag9.className == "0"){
            newTagP9.appendChild(textX9);
            spanTag9.appendChild(newTagP9);
            spanTag9.className = "1";
            step = "zero";
            victoriX()
        }  
    }    
}
// ФУНКЦІЇ НОЛИКІВ
function pressButtonO1(e){
    if (step == "zero"){
        if (spanTag1.className == "0"){
            newTagP1.appendChild(textO1);
            spanTag1.appendChild(newTagP1);
            spanTag1.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO2(e){
    if (step == "zero"){
        if (spanTag2.className == "0"){
            newTagP2.appendChild(textO2);
            spanTag2.appendChild(newTagP2);
            spanTag2.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO3(e){
    if (step == "zero"){
        if (spanTag3.className == "0"){
            newTagP3.appendChild(textO3);
            spanTag3.appendChild(newTagP3);
            spanTag3.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO4(e){
    if (step == "zero"){
        if (spanTag4.className == "0"){
            newTagP4.appendChild(textO4);
            spanTag4.appendChild(newTagP4);
            spanTag4.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO5(e){
    if (step == "zero"){
        if (spanTag5.className == "0"){
            newTagP5.appendChild(textO5);
            spanTag5.appendChild(newTagP5);
            spanTag5.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO6(e){
    if (step == "zero"){
        if (spanTag6.className == "0"){
            newTagP6.appendChild(textO6);
            spanTag6.appendChild(newTagP6);
            spanTag6.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO7(e){
    if (step == "zero"){
        if (spanTag7.className == "0"){
            newTagP7.appendChild(textO7);
            spanTag7.appendChild(newTagP7);
            spanTag7.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO8(e){
    if (step == "zero"){
        if (spanTag8.className == "0"){
            newTagP8.appendChild(textO8);
            spanTag8.appendChild(newTagP8);
            spanTag8.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
function pressButtonO9(e){
    if (step == "zero"){
        if (spanTag9.className == "0"){
            newTagP9.appendChild(textO9);
            spanTag9.appendChild(newTagP9);
            spanTag9.className = "2";
            step = "cross";
            victoriO()
        }
    }  
}
// Подія натиску для хрестика
bt1.addEventListener("click", pressButtonX1)
bt2.addEventListener("click", pressButtonX2)
bt3.addEventListener("click", pressButtonX3)
bt4.addEventListener("click", pressButtonX4)
bt5.addEventListener("click", pressButtonX5)
bt6.addEventListener("click", pressButtonX6)
bt7.addEventListener("click", pressButtonX7)
bt8.addEventListener("click", pressButtonX8)
bt9.addEventListener("click", pressButtonX9)
// Подія натиску для нолика
bt1.addEventListener("click", pressButtonO1)
bt2.addEventListener("click", pressButtonO2)
bt3.addEventListener("click", pressButtonO3)
bt4.addEventListener("click", pressButtonO4)
bt5.addEventListener("click", pressButtonO5)
bt6.addEventListener("click", pressButtonO6)
bt7.addEventListener("click", pressButtonO7)
bt8.addEventListener("click", pressButtonO8)
bt9.addEventListener("click", pressButtonO9)
// Перезавантажуємо сторінку
document.getElementById('reset').onclick = function() {
    location.reload(); // перезагружаем страницу
}