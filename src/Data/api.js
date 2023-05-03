"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemdata = exports.GetItemDataTableJSON = void 0;
var items_1 = require("./items");
var GetItemDataTableJSON = function () {
    var items = items_1.itemdatatable;
    return items;
};
exports.GetItemDataTableJSON = GetItemDataTableJSON;
var itemdata = /** @class */ (function () {
    function itemdata(car) {
        this.TID = car.TID;
    }
    return itemdata;
}());
exports.itemdata = itemdata;
//# sourceMappingURL=api.js.map