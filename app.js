var budgetController = (function() {

})();

var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: ".add__value"
    }

    return {
        getInput: function() {

            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document. querySelector(DOMstrings.inputValue).value
            }




        }
    }

})();

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        var input = UICtrl.getInput();
        console.log(input);
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {

        if(e.which === 13 || e.which === 13){
            ctrlAddItem();
        }

    });

})(budgetController, UIController);
