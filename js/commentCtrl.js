app.controller('commentCtrl', function($scope) {
    this.commentsOfItem;
    this.commentText = '';
    this.currentItem;

    this.getItemByIndex = function(index) {
        var items = JSON.parse(localStorage.getItem("items"));
        if(items) {
            for(var i = 0; i < items.length; i++) {
                if(items[i].index == index) {
                    this.currentItem = items[i];
                    return items[i];
                }
            }
        }
        return null;
    }

    this.setComment = function(comment, $event) {
        console.log(this.currentItem);
        console.log($event.target);
        this.currentItem.comments.push(comment);
        var items = JSON.parse(localStorage.getItem("items"));
        for(var i = 0; i < items.length; i++) {
            if(items[i].index == this.currentItem.index) {
                items[i].comments = this.currentItem.comments;
                items[i].commentNumber += 1;
            }
        }
        localStorage.setItem("items", JSON.stringify(items));
        $scope.$parent.mainCtrl.setCtrlItems();
    }

    $scope.$on('item-clicked', function(event, args) {
        var item = this.getItemByIndex(args.item.index);
        this.commentsOfItem = item.comments;
        this.currentItem = item;
    }.bind(this)); 
    
    $scope.$on('item-deleted', function(event, args) {
        console.log("in deleting");
        console.log(this.currentItem);
        if(this.currentItem.index == args.item.index) {
            this.currentItem = null;
            console.log("Deleted");
        }
    }.bind(this)); 
    
});