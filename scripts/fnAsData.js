$(document).ready(function () {

    function add(x,y){
        return x + y;
    }
    function doOperation(doWhat, var1,var2){
        return doWhat(var1,var2);
    }

    var sum1 = doOperation(add,2,5);
    var sum2 = doOperation(add, doOperation(add,5,3), 2 );
    console.log('sum1=> ' + sum1);
    console.log('sum2=> ' + sum2);

    /**/
    var operators = {
     add : function(x,y){ return x + y },
     substract : function(x,y){ return x - y }
    };

    function doOperation2(doWhat, var1,var2){
        return doWhat(var1,var2);
    }

    var substract1 = doOperation2(operators.substract,2,5);
    console.log('substract=> ' + substract1);
    var concat = doOperation2(operators.add,'hi',operators.add('---','mamay'));
    console.log('concat=> ' + concat);

});
