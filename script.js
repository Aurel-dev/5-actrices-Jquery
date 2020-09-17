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
                var newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
            });

            $(".button").hover(
            function(){ //je rentre sur mon bouton
                $(this).addClass("hovered");
            },
            function(){
                $(this).removeClass("hovered");
            }
            );

            $(".button").click(function(){
                var newIndex = $(this).index(); //va donner l'index de mon bouton
                checkAndAnimateItem(newIndex); 
            });

        },

    validIndex = function(indexToCheck){ //verification supplementaire
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems) //les 5 stars
    },

    animateItem = function($item, toOpen, speed){ //item que je veux animer, open = true or false, vitesse animation 

            var $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width: "420px"} : {width: "140px"}, //systeme ouvert agrandissement, fermé retrecissement
            colorImageParam = toOpen ? {left: "0px"} : {left : "140px"};
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
    },

    checkAndAnimateItem = function(indexToCheckAndAnimate){
            if(openedIndex === indexToCheckAndAnimate){  //fermeture
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            } else {
                if(validIndex(indexToCheckAndAnimate)){  //ouverture fermeture
                    animateItem($mainMenuItems.eq(openedIndex), false, 250); //fermeture de la photo specifique
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
    };

    init();

});