//On s'assure de la mise en place du DOM+
document.addEventListener("DOMContentLoaded", function() {
    console.log("Le DOM est entièrement chargé et analysé");

/***************************** Variables **************************/
/***************************** Variables **************************/
let number_btn = document.querySelectorAll('.number, .operator');
let operator_btn = document.querySelectorAll('.operator');
let display_area = document.querySelector('h2');
let delete_btn = document.querySelector('.delete');
let equal_btn = document.getElementById('equal');
let clean_btn = document.getElementById('clean');
// console.log(number_btn);


/****************************** Fonctions ***************************/
/***************************** Evenements **************************/

//Ajout de l'évenement click sur les boutons
number_btn.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(element.textContent);
        // console.log(e);
        //
        if(display_area.textContent == 0) {
            display_area.textContent = element.textContent;
        }else {
            display_area.textContent +=  element.textContent;
        }
    })
});

//Tout supprimer
clean_btn.addEventListener('click', function() {
    display_area.textContent = 0;
})

//Suppression une à une
delete_btn.addEventListener('click', function() {
    display_area.textContent = display_area.textContent.slice(0, -1);
})

//Pour gérer les calculs sans utiliser la méthode eval (encours)

operator_btn.forEach((el) => {
    el.addEventListener('click', (e) => {
        // switch(operateur) {
        //     case '+':
        //         console.log(e);
        //         break;
        //     case '-':
        //         console.log(operateur);
        //         break;
        //     case '/':
        //         console.log(operateur);
        //         break;
        //     case '*':
        //         console.log(operateur);
        //         break;
        //     }
    })
})


//Pour le bouton d'égalité
equal_btn.addEventListener('click', () => {
    display_area.textContent = eval(display_area.textContent);
    console.log(display_area.textContent);
    console.log(eval(display_area.textContent));
})

});


