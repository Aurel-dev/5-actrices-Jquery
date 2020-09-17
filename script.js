$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2, //menu fermé à -1

    init = function(){
        bindEvents();
            if(validIndex(openedIndex)){ //ouvrir fiche Jessica Alba au demarrage
                animateItem($mainMenuItems.eq(openedIndex), true, 700);
            }
    },

    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){ //clic possible pour tous les éléments de la classe "images"
        //element sur lequel je viens de cliquer
        var newIndex = $(this).parent().index(), //utilisation "," et non ";" donc pas besoin de var
        // le "li" cliqué, obtention de l'index puis prise de tous les "li"
        
        $item = $mainMenuItems.eq(newIndex);
        if(openedIndex === newIndex){  //fermeture
            animateItem($item, false, 250);
            openedIndex = -1;
        } else {
            if(validIndex(newIndex)){  //ouverture fermeture
                animateItem($mainMenuItems.eq(openedIndex), false, 250); //fermeture de la photo specifique
                openedIndex = newIndex;
                animateItem($item, true, 250);
            }
        }
        
        /*Remplacement du code ci-dessous par code ci-dessus

        -->affiche le bg color de la photo
        $colorImage = $item.find(".color");
        -->bg color change de position et se met à la place de bw
        $colorImage.animate({left:"0px"}, 250);
        -->description agrandissement
        $item.animate({width: "420px"}, 250); */


    });
    }

    validIndex = function(indexToCheck){ //verification supplementaire
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems) //les 5 stars
    },

    animateItem = function($item, toOpen, speed){ //item que je veux animer, open = true or false, vitesse animation 

            var $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width: "420px"} : {width: "140px"}, //systeme ouvert agrandissement, fermé retrecissement
            colorImageParam = toOpen ? {left: "0px"} : {left : "140px"};
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
    };

    init();

});