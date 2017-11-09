angular
.module('acumuladorApp',[])
.controller("acumuladorCtrl",controladorPrincipal);

function controladorPrincipal(){
    //esta funcion es mi controlador
    var scope = this;
    scope.total=0;
    scope.cuanto=0;

    scope.sumar = function(){
        scope.total+=parseInt(scope.cuanto);
    }

    scope.restar=function(){
        scope.total-=parseInt(scope.cuanto);
    }
};