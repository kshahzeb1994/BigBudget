var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {
    // document.querySelector('.add__btn').addEventListener('click', function() {
    //     console.log("button was clicked.")
    // });

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);