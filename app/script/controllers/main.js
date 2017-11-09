angular
.module('acumuladorApp',[])
.controller("acumuladorCtrl",controladorPrincipal);

function controladorPrincipal(){
    //esta funcion es mi controlador
    
    this.total=0;
    this.cuanto=0;

    this.sumar = function(){
        this.total+=parseInt(this.cuanto);
    }

    this.restar=function(){
        this.total-=parseInt(this.cuanto);
    }
};