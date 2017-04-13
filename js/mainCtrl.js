
var app = angular.module('mainApp', []);

app.controller('mainCtrl', function($rootScope) {

    this.counter = 2;
    this.selected;

    this.increaseCounter = function() {
        this.counter += 1;
    }

    this.setCtrlItems = function() {
        this.items = JSON.parse(localStorage.getItem("items"));
    }

    this.getLSItems = function() {
        return JSON.parse(localStorage.getItem("items"));
    }

    function initFunc() {
        var oldItems = this.getLSItems();
        if(!oldItems) {
            var newItems = [
                { itemText: "Example item...", index: 1, commentNumber: 132, comments: ["Blablabla", "Hahaha"] },
                { itemText: "Another example item...", index: 2, commentNumber: 34, comments: ["1111Blablabla", "2222Hahaha"] }
            ];
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        this.setCtrlItems();
    }

    initFunc.apply(this);

    this.addItem = function(item) {
        this.increaseCounter();
        var oldItems = this.getLSItems();
        if(oldItems) {
            oldItems.push({ itemText: item, index: this.counter });
            var newItems = oldItems;
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        else {
            var newItems = [{ itemText: item, index: this.counter }];
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        this.setCtrlItems();
    }

    this.deleteItem = function(index) {
        var oldItems = this.getLSItems();
        if(oldItems) {
            for(var i = 0; i < oldItems.length; i++) {
                if(oldItems[i].index == index) {
                    oldItems.splice(i, 1);
                }
            }
            var newItems = oldItems;
            localStorage.setItem("items", JSON.stringify(newItems));
        }
        this.setCtrlItems();
    }

    this.selectItem = function(event, item) {
        if(this.selected) {
            this.selected.classList.remove("active-item");
        }
        this.selected = event.target;
        this.selected.classList.add("active-item");
        $rootScope.$broadcast('item-clicked', { index: item.index });
    }
});
