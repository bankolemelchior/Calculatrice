## Évènements en JavaScript
Les évènements sont des actions ou des occurrences qui se produisent dans le navigateur et que JavaScript peut réagir à. Voici une vue d'ensemble complète sur les évènements en JavaScript.

1. Introduction aux Évènements
Les évènements sont des actions qui peuvent être détectées par JavaScript, telles que:
Clic de souris
Appui sur une touche du clavier
Mouvement de la souris
Chargement d'une page
Soumission d'un formulaire
2. Types d'Évènements
## Évènements de Souris
click : se déclenche lorsqu'un élément est cliqué.
dblclick : se déclenche lorsqu'un élément est double-cliqué.
mouseover : se déclenche lorsque la souris passe sur un élément.
mouseout : se déclenche lorsque la souris quitte un élément.
mousedown : se déclenche lorsqu'un bouton de la souris est enfoncé.
mouseup : se déclenche lorsqu'un bouton de la souris est relâché.
## Évènements de Clavier
keydown : se déclenche lorsqu'une touche est enfoncée.
keyup : se déclenche lorsqu'une touche est relâchée.
keypress : se déclenche lorsqu'une touche est pressée.
## Évènements de Formulaire
submit : se déclenche lorsqu'un formulaire est soumis.
change : se déclenche lorsqu'une valeur d'un élément <input>, <select>, ou <textarea> change.
focus : se déclenche lorsqu'un élément gagne le focus.
blur : se déclenche lorsqu'un élément perd le focus.
## Évènements de Document/Window
load : se déclenche lorsque la page et tous les ressources (images, etc.) sont complètement chargées.
resize : se déclenche lorsque la taille de la fenêtre est modifiée.
scroll : se déclenche lorsque la page est défilée.


## Évènement DOMContentLoaded
Pourquoi Utiliser DOMContentLoaded?
Lorsque vous ajoutez du JavaScript à une page web, il est crucial de s'assurer que le DOM est entièrement construit avant d'essayer de manipuler les éléments. Si vous tentez de manipuler des éléments du DOM avant qu'ils ne soient disponibles, vous risquez d'obtenir des erreurs ou des comportements inattendus.

## Comparaison avec window.onload
L'évènement window.onload est souvent utilisé de manière similaire à DOMContentLoaded, mais il attend que toutes les ressources de la page (y compris les images, les scripts et les feuilles de style) soient complètement chargées. Cela peut entraîner des retards dans l'exécution du JavaScript.