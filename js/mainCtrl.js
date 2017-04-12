
var app = angular.module('mainApp', []);

app.controller('mainCtrl', function() {

    this.setCtrlItems = function() {
        this.items = JSON.parse(localStorage.getItem("items"));
    }

    this.getLSItems = function() {
        return JSON.parse(localStorage.getItem("items"));
    }

    function initFunc() {
        var oldItems = this.getLSItems();
        if(oldItems) {
            oldItems.push(
                { itemText: "Example item...", commentNumber: 132 },
                { itemText: "Another example item...", commentNumber: 34 }
            );
            var newItems = oldItems;
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        this.setCtrlItems();
    }

    initFunc.apply(this);

    this.addItem = function(item) {
        var oldItems = this.getLSItems();
        if(oldItems) {
            oldItems.push({ itemText: item });
            var newItems = oldItems;
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        else {
            var newItems = [{ itemText: item }];
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        this.setCtrlItems();
    }

    this.deleteItem = function(item) {
        var oldItems = this.getLSItems();
        if(oldItems) {
            var index = oldItems.indexOf(item);
            oldItems.splice(index, 1);
            var newItems = oldItems;
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        this.setCtrlItems();
    }

});
