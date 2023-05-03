"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./App.css");
var api_1 = require("./Data/api");
var react_dropdown_1 = require("react-dropdown");
require("react-dropdown/style.css");
var itemrowken_1 = require("./Data/itemrowken");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            var items = api_1.GetItemDataTableJSON();
            _this.setState({ items: items });
        };
        _this.onChangeFilter = function (e) {
            _this.setState({ filter: e.target.value });
        };
        _this.getRenderedItems = function () {
            var hasfilters = false;
            var items = __spreadArray([], _this.state.items);
            if (_this.state.selectedOption_firstcategory && _this.state.selectedOption_firstcategory != "All First Category Types") {
                items = items.filter(function (x) { return x.FirstCategoryName === _this.state.selectedOption_firstcategory; });
                hasfilters = true;
            }
            if (_this.state.selectedOption_secondcategory && _this.state.selectedOption_secondcategory != "All Second Category Types") {
                items = items.filter(function (x) { return x.SecondCategoryName === _this.state.selectedOption_secondcategory; });
                hasfilters = true;
            }
            if (!_this.state.filter) {
                if (hasfilters) {
                    items = items.sort(function (a, b) { return a.TID - b.TID; }).filter(function (x) { return x.TID !== 10; });
                }
                else {
                    items = items.sort(function (a, b) { return a.TID - b.TID; }).filter(function (x) { return x.TID !== 10; }).slice(0, 50);
                }
            }
            else {
                if (isNaN(+_this.state.filter)) {
                    items = items.filter(function (x) { return x.ItemName.toLowerCase().indexOf(_this.state.filter.toLowerCase()) > -1; }).sort(function (a, b) { return a.TID - b.TID; });
                }
                else {
                    items = items.filter(function (x) { return x.TID && x.TID.toString().toLowerCase().indexOf(_this.state.filter.toString()) > -1; }).sort(function (a, b) { return a.TID - b.TID; });
                }
            }
            return items /*.filter(x => x.TID != 10)*/;
        };
        _this.options_firstcategory = [
            'All First Category Types', 'Consumables', 'Elemental Stone', 'Elite Armor', 'Elite Weapon', 'Material',
            'Normal Accessory', 'Prayer Stone',
            'Rare Armor', 'Shield', 'Special', 'Unique Accessory', 'Unique Armor', 'Unique Weapon', "Realm Armor"
        ];
        _this.setSelected_firstcategory = function (test) {
            _this.setState({ selectedOption_firstcategory: test.value, filter: null, selectedOption_secondcategory: 'All Second Category Types' });
        };
        _this.setSelected_secondcategory = function (test) {
            _this.setState({ selectedOption_secondcategory: test.value, filter: null, selectedOption_firstcategory: "All First Category Types" });
        };
        _this.options_secondcategory = [
            'All Second Category Types', 'Agility', 'Air', 'Archer', 'Attack', 'Battleground', 'Berserker', 'Boss Summoning', 'Bow',
            'Buff Food', 'Chakram', 'Cold', 'Conversion',
            'Critical Hit', 'Crossbow', 'Curse Removal', 'Dagger', 'Deadly Poison', 'Defense', 'Earth',
            'Elementalist', 'Fire', 'Guard', 'Healing Potion', 'Hunter', 'Ice', 'Kataria', 'Knight', 'Knowledge',
            'Life', 'Life Recovery', 'Light Speed', 'Lightning', 'Lucky', 'Mage', 'Magic', 'Mana', 'Mana Replenishment', 'Might',
            'Normal Necklace', 'Normal Ring', 'One-Handed Blunt',
            'One-Handed Sword', 'Physical Resistance', 'Poison', 'Prayer Stone Material', 'Production', 'Quickness', 'Ranger',
            'Rapier', 'Recovery Potion', 'Reinforcement Potion', 'Ressurection', 'Shield', 'Skill Awakening', 'Skill Block',
            'Sorcerer', 'Spirit Uplift', 'Staff', 'Stamina', 'Stamina Buff', 'Swashbuckler', 'Thunder', 'Two-Handed Sword',
            'Unique Material', 'Unique Necklace', 'Unique Ring', 'Wand', 'Water', 'Wisdom'
        ];
        _this.onChnage_realmonly = function (e) {
            if (e.target.checked) {
                _this.setState({
                    selectedOption_firstcategory: "Realm Armor",
                    filter: "",
                    selectedOption_secondcategory: 'All Second Category Types'
                });
            }
            else if (_this.state.selectedOption_firstcategory == "Realm Armor") {
                _this.setState({ selectedOption_firstcategory: "All First Category Types" });
            }
        };
        _this.state = {
            filter: "",
            items: [],
            selectedOption_firstcategory: "All First Category Types",
            selectedOption_secondcategory: "All Second Category Types"
        };
        return _this;
    }
    App.prototype.render = function () {
        var items = this.getRenderedItems();
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "filterkes" },
                    React.createElement(react_dropdown_1.default, { className: "dropdown_item", placeholder: "All First Category Types", options: this.options_firstcategory, onChange: this.setSelected_firstcategory, value: this.state.selectedOption_firstcategory }),
                    React.createElement(react_dropdown_1.default, { className: "dropdown_item", placeholder: "All Second Category Types", options: this.options_secondcategory, onChange: this.setSelected_secondcategory, value: this.state.selectedOption_secondcategory }),
                    React.createElement("div", { className: "form-check form-check-inline", style: { color: "green", margin: '10px' } },
                        React.createElement("input", { onChange: this.onChnage_realmonly, className: "form-check-input", "data-val": "true", "data-val-required": "The Boolean field is required.", id: "bound", name: "bound", type: "checkbox", value: "true" }),
                        React.createElement("label", { className: "form-check-label", style: { marginLeft: '10px' } }, "Realm Only"))),
                React.createElement("div", { className: "itemkes" },
                    React.createElement("div", { className: "my-3", style: { margin: '20px' } },
                        React.createElement("div", { id: "searchItem", className: "form-horizontal", role: "form" },
                            React.createElement("div", { className: "input-group" },
                                React.createElement("input", { onChange: this.onChangeFilter, id: "search", name: "search", className: "form-control form-control-lg filterke", type: "text", placeholder: "Search item data...", "aria-label": "search", "aria-describedby": "button-addon2", value: this.state.filter }))),
                        items && items.map(function (c, i) { return (React.createElement("div", { style: { margin: '0px' } },
                            React.createElement(itemrowken_1.ItemRow, { key: i, item: c }))); }),
                        (!items || items.length == 0) &&
                            React.createElement("div", { style: { margin: '0px' } }, "nothing found"))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map