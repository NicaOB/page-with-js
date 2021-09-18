const cosasQueAprendimos = [
    {
        tema: "terminal",
        class: "",
    },
    {
        tema: "node",
        class: "",
    },
    {
        tema: "oop",
        class: "",
    },
    {
        tema: "typescript",
        class: "",
    },
    {
        tema: "css",
        class: "",
    },
    {
        tema: "dom",
        class: "special",
    },
];

// function removeGarbage(){ OPCION MENOS OPTIMA, PERO SIRVE, EL PROBLEMA ES QUE ELIMINA TODOS LOS TAGS "LI"
//     var elRemove = document.getElementsByTagName("li");
//     var father;
//     var i = 0;
//     while(el[i] != null){
//         father = elRemove[i].parentNode;
//         father.removeChild(elRemove[i]);
//     }
// }

// function removeGarbage(){ //SIRVE, PERO  EL ALGORITMO DE ABAJO ES MAS OPTIMO
//     var elRemove = document.getElementsByClassName("lista")[0].children;
//     var father = elRemove[0].parentNode;
//     while(elRemove[0] != null){
//         father.removeChild(elRemove[0]);
//     }
// }

// function removeGarbage(){ //MAS OPTIMO DE LOS TRES
//     var elemento = document.getElementsByClassName("lista");
//     while (elemento[0].firstChild){
//         elemento[0].removeChild(elemento[0].firstChild);
//     }
// }

// function addEl (){
//     var newList;
//     var newContent;
//     var lista = document.getElementsByClassName("lista");
//     for(var i = 0; i < cosasQueAprendimos.length; i++){
//         newList = document.createElement("li");
//         if(cosasQueAprendimos[i].class != ""){
//             newList.classList.add(cosasQueAprendimos[i].class);
//         }
//         newContent = document.createTextNode(cosasQueAprendimos[i].tema);
//         newList.appendChild(newContent);
//         lista[0].appendChild(newList); //el 0 representa a la lista a la que se esta indicando, en este caso, como solo existe una clase lista, se le habla a la 0.
//     }
// }


function removeGarbage(){ //COMO SE EXPLICA EN EL VIDEO
    var elNodo = document.querySelectorAll(".lista li")
    for (let elLi of elNodo) {
        elLi.remove(elNodo);
    }
}

function addEl (){
    var newList;
    var newContent;
    var lista = document.querySelector(".lista");
    for(let iteration of cosasQueAprendimos){
        newList = document.createElement("li");
        if(iteration.class != ""){ //evita crear clases innecesarias, solo tiene en cuenta las que contienen alguna letra o palabra
            newList.classList.add(iteration.class);
        }
        newContent = document.createTextNode(iteration.tema);
        newList.appendChild(newContent);
        lista.appendChild(newList);
    }
}

function main() {
    removeGarbage();
    addEl();
}

main();
