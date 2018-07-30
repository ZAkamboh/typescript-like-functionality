"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    Like.prototype.onClick = function () {
        if (this.isSelected) {
            this.likesCount--;
            this.isSelected = false;
        }
        else {
            this.likesCount++;
            this.isSelected = true;
        }
    };
    return Like;
}());
exports.Like = Like;
