var budgetController = (function(){
    
    var Expense  = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income  = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        }, 
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            //Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
                ID = 0;
            }
            
            //Create new item based on inc or exp type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            //push it into our data structure
            data.allItems[type].push(newItem);
            return newItem;
        },
        testing: function(){
            console.log(data);
        }
    };

})();

var UIController = (function(){
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'

    }
    return {
        getinput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        addListItem: function(obj, type){
            var html, newHtml, element, htmlObject;
            //Create HTML string with placeholder text

            if(type === 'inc')
            {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%ID%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if (type === 'exp')
            {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%ID%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';   
            }
            //replace the placeholder text with some actual data
            newHtml = html.replace('%ID%', obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            //insert the HTML into the DOM

            htmlObject = document.createElement('div');
            htmlObject.innerHTML=newHtml;

            document.querySelector(element).insertAdjacentElement("beforeend",htmlObject);
        },
        clearFields: function(){
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });

            fieldsArr[0].focus();
        },
        getDOMStrings: function(){
            return DOMStrings
        }
    }
})();

var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){

            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }

        });
    };



        var ctrlAddItem = function(){
            var input, newItem;
             // 1 Get the field input data
            input = UICtrl.getinput();

            // add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // clear the fields
            UICtrl.clearFields();
            // calculate the budget 
            //display the budget on the UI
        };

    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();