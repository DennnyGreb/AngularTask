app.controller('commentCtrl', function($scope) {
    this.commentsOfItem = [];

    this.getItemByIndex = function(index) {
        var items = JSON.parse(localStorage.getItem("items"));
        if(items) {
            for(var i = 0; i < items.length; i++) {
                if(items[i].index == index) {
                    return items[i];
                }
            }
        }
        return null;
    }

    $scope.$on('item-clicked', function(event, args) {
        var item = this.getItemByIndex(args.index);
        this.commentsOfItem = item.comments;
        console.log(this.commentsOfItem[0]);
    }.bind(this)); 
    
});