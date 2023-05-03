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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRow = void 0;
var React = require("react");
var itemoption_1 = require("./itemoption");
var ItemRow = /** @class */ (function (_super) {
    __extends(ItemRow, _super);
    function ItemRow(props) {
        var _this = _super.call(this, props) || this;
        //getClassName = (toolTip: string): string => {
        //	const isDefaultTooltip = toolTip == `No additional data available`;
        //	if (this.props.index === 0) { return `row ${isDefaultTooltip ? 'low' : 'lower'}` }
        //	if (this.props.index < 3 && !isDefaultTooltip) { return "row lower"; }
        //	return "row";
        //}
        _this.onclicksken = function () {
            _this.setState({ classname: _this.state.classname === "collapse show" ? "collapse" : "collapse show" });
        };
        _this.getLinks = function (link_id) {
            var links = [];
            if (!link_id) {
                return links;
            }
            var linkids = link_id.split(";");
            var name_property = "name"; /*�ɼǳ���*/
            for (var i = 0; i < linkids.length; i++) {
                var results = itemoption_1.options.filter(function (x) { return x.Link_id == linkids[i]; });
                if (results.length > 0) {
                    console.log("results", results);
                    links.push(results[0][name_property]);
                }
            }
            return links;
        };
        _this.state = {
            classname: "collapse",
        };
        return _this;
    }
    ItemRow.prototype.render = function () {
        var links = this.getLinks(this.props.item.Link_id);
        var fontcolor = this.props.item["font color"] && this.props.item["font color"] != 61440 ? "#" + this.props.item["font color"].toString(16) : "white";
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "card blur border-dark my-2" },
                React.createElement("div", { className: "card-header d-flex justify-content-between", onClick: this.onclicksken },
                    React.createElement("a", { className: "text-white" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "d-flex flex-row" },
                                React.createElement("div", { className: "align-self-center", style: { fontSize: '22px', marginLeft: '10px', color: fontcolor } }, this.props.item.TID + " - " + this.props.item.ItemName))))),
                React.createElement("div", { className: this.state.classname, id: "collapse901" },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("div", { className: "card-body-left" },
                            this.props.item.Level && React.createElement("p", { className: "card-text" },
                                "Level: ",
                                this.props.item.Level),
                            this.props.item.SuitableLevelMin && React.createElement("p", { className: "card-text" },
                                "SuitableLevelMin: ",
                                this.props.item.SuitableLevelMin),
                            this.props.item.SuitableLevelMax && React.createElement("p", { className: "card-text" },
                                "SuitableLevelMax: ",
                                this.props.item.SuitableLevelMax),
                            this.props.item.Class && React.createElement("p", { className: "card-text" },
                                "Class: ",
                                this.props.item.Class),
                            this.props.item.Race && React.createElement("p", { className: "card-text" },
                                "Race: ",
                                this.props.item.Race),
                            this.props.item.Gender && React.createElement("p", { className: "card-text" },
                                "Gender: ",
                                this.props.item.Gender),
                            this.props.item.ExtraType && React.createElement("p", { className: "card-text" },
                                "ExtraType: ",
                                this.props.item.ExtraType),
                            this.props.item.BoundType && React.createElement("p", { className: "card-text" },
                                "BoundType: ",
                                this.props.item.BoundType),
                            this.props.item.EventItem && React.createElement("p", { className: "card-text" },
                                "EventItem: ",
                                this.props.item.EventItem),
                            this.props.item.PCBangOnly && React.createElement("p", { className: "card-text" },
                                "PCBangOnly: ",
                                this.props.item.PCBangOnly),
                            this.props.item.VillainOnly && React.createElement("p", { className: "card-text" },
                                "VillainOnly: ",
                                this.props.item.VillainOnly),
                            this.props.item.GroupID && React.createElement("p", { className: "card-text" },
                                "GroupID: ",
                                this.props.item.GroupID),
                            this.props.item.DropRate && React.createElement("p", { className: "card-text" },
                                "DropRate: ",
                                this.props.item.DropRate),
                            this.props.item.DropRank && React.createElement("p", { className: "card-text" },
                                "DropRank: ",
                                this.props.item.DropRank),
                            this.props.item.fontcolor && React.createElement("p", { className: "card-text" },
                                "Level: ",
                                this.props.item.Level),
                            this.props.item.SpiritType && React.createElement("p", { className: "card-text" },
                                "SpiritType: ",
                                this.props.item.SpiritType),
                            this.props.item.NPCPrice && React.createElement("p", { className: "card-text" },
                                "NPCPrice: ",
                                this.props.item.NPCPrice),
                            this.props.item.PCPrice && React.createElement("p", { className: "card-text" },
                                "PCPrice: ",
                                this.props.item.PCPrice),
                            this.props.item.Stack && React.createElement("p", { className: "card-text" },
                                "Stack: ",
                                this.props.item.Stack),
                            this.props.item.Hand && React.createElement("p", { className: "card-text" },
                                "Hand: ",
                                this.props.item.Hand),
                            this.props.item.Rank && React.createElement("p", { className: "card-text" },
                                "Rank: ",
                                this.props.item.Rank),
                            this.props.item.DUR && React.createElement("p", { className: "card-text" },
                                "DUR: ",
                                this.props.item.DUR),
                            this.props.item.MinSocket && React.createElement("p", { className: "card-text" },
                                "MinSocket: ",
                                this.props.item.MinSocket),
                            this.props.item.MaxSocket && React.createElement("p", { className: "card-text" },
                                "MaxSocket: ",
                                this.props.item.MaxSocket),
                            this.props.item.MinOption && React.createElement("p", { className: "card-text" },
                                "MinOption: ",
                                this.props.item.MinOption),
                            this.props.item.MaxOption && React.createElement("p", { className: "card-text" },
                                "MaxOption: ",
                                this.props.item.MaxOption),
                            this.props.item.ATKRange && React.createElement("p", { className: "card-text" },
                                "ATKRange: ",
                                this.props.item.ATKRange),
                            this.props.item.ATKSpeed && React.createElement("p", { className: "card-text" },
                                "ATKSpeed: ",
                                this.props.item.ATKSpeed),
                            this.props.item.Physical_Min_Dama && React.createElement("p", { className: "card-text" },
                                "Physical_Min_Dama: ",
                                this.props.item.Physical_Min_Dama),
                            this.props.item.Physical_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Physical_Max_Damage: ",
                                this.props.item.Physical_Max_Damage),
                            this.props.item.Magic_Min_Damage && React.createElement("p", { className: "card-text" },
                                "Magic_Min_Damage: ",
                                this.props.item.Magic_Min_Damage),
                            this.props.item.Water_Min_Damage && React.createElement("p", { className: "card-text" },
                                "Water_Min_Damage: ",
                                this.props.item.Water_Min_Damage),
                            this.props.item.Fire_Min_Damage && React.createElement("p", { className: "card-text" },
                                "Fire_Min_Damage: ",
                                this.props.item.Fire_Min_Damage),
                            this.props.item.Earth_Min_Damage && React.createElement("p", { className: "card-text" },
                                "Earth_Min_Damage: ",
                                this.props.item.Earth_Min_Damage),
                            this.props.item.Air_Min_Damage && React.createElement("p", { className: "card-text" },
                                "Air_Min_Damage: ",
                                this.props.item.Air_Min_Damage),
                            this.props.item.Poison_Min_Damage && React.createElement("p", { className: "card-text" },
                                "Poison_Min_Damage: ",
                                this.props.item.Poison_Min_Damage),
                            this.props.item.Magic_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Magic_Max_Damage: ",
                                this.props.item.Magic_Max_Damage),
                            this.props.item.Water_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Water_Max_Damage: ",
                                this.props.item.Water_Max_Damage),
                            this.props.item.Fire_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Fire_Max_Damage: ",
                                this.props.item.Fire_Max_Damage),
                            this.props.item.Earth_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Earth_Max_Damage: ",
                                this.props.item.Earth_Max_Damage),
                            this.props.item.Air_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Air_Max_Damage: ",
                                this.props.item.Air_Max_Damage),
                            this.props.item.Poison_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Poison_Max_Damage: ",
                                this.props.item.Poison_Max_Damage),
                            this.props.item.Ice_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Ice_Max_Damage: ",
                                this.props.item.Ice_Max_Damage),
                            this.props.item.Linghtning_Max_Damage && React.createElement("p", { className: "card-text" },
                                "Linghtning_Max_Damage: ",
                                this.props.item.Linghtning_Max_Damage),
                            this.props.item.Physical_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Physical_Defense_Point: ",
                                this.props.item.Physical_Defense_Point),
                            this.props.item.Physical_ATKRate && React.createElement("p", { className: "card-text" },
                                "Physical_ATKRate: ",
                                this.props.item.Physical_ATKRate),
                            this.props.item.Magic_ATKRate && React.createElement("p", { className: "card-text" },
                                "Magic_ATKRate: ",
                                this.props.item.Magic_ATKRate),
                            this.props.item.PDR && React.createElement("p", { className: "card-text" },
                                "PDR: ",
                                this.props.item.PDR),
                            this.props.item.BlockRate && React.createElement("p", { className: "card-text" },
                                "BlockRate: ",
                                this.props.item.BlockRate),
                            this.props.item.Magic_Defense_Poin && React.createElement("p", { className: "card-text" },
                                "Magic_Defense_Poin: ",
                                this.props.item.Magic_Defense_Poin),
                            this.props.item.Water_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Water_Defense_Point: ",
                                this.props.item.Water_Defense_Point),
                            this.props.item.Fire_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Fire_Defense_Point: ",
                                this.props.item.Fire_Defense_Point),
                            this.props.item.Earth_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Earth_Defense_Point: ",
                                this.props.item.Earth_Defense_Point),
                            this.props.item.Air_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Air_Defense_Point: ",
                                this.props.item.Air_Defense_Point),
                            this.props.item.Poison_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Poison_Defense_Point: ",
                                this.props.item.Poison_Defense_Point),
                            this.props.item.Ice_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Ice_Defense_Point: ",
                                this.props.item.Ice_Defense_Point),
                            this.props.item.Linghtning_Defense_Point && React.createElement("p", { className: "card-text" },
                                "Linghtning_Defense_Point: ",
                                this.props.item.Linghtning_Defense_Point),
                            this.props.item.Magic_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Magic_Defense_Rate: ",
                                this.props.item.Magic_Defense_Rate),
                            this.props.item.Water_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Water_Defense_Rate: ",
                                this.props.item.Water_Defense_Rate),
                            this.props.item.Fire_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Fire_Defense_Rate: ",
                                this.props.item.Fire_Defense_Rate),
                            this.props.item.Earth_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Earth_Defense_Rate: ",
                                this.props.item.Earth_Defense_Rate),
                            this.props.item.Air_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Air_Defense_Rate: ",
                                this.props.item.Air_Defense_Rate),
                            this.props.item.Poison_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Poison_Defense_Rate: ",
                                this.props.item.Poison_Defense_Rate),
                            this.props.item.Ice_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Ice_Defense_Rate: ",
                                this.props.item.Ice_Defense_Rate),
                            this.props.item.Linghtning_Defense_Rate && React.createElement("p", { className: "card-text" },
                                "Linghtning_Defense_Rate: ",
                                this.props.item.Linghtning_Defense_Rate),
                            this.props.item.CON_Bonus_Point && React.createElement("p", { className: "card-text" },
                                "CON_Bonus_Point: ",
                                this.props.item.CON_Bonus_Point),
                            this.props.item.STR_Bonus_Point && React.createElement("p", { className: "card-text" },
                                "STR_Bonus_Point: ",
                                this.props.item.STR_Bonus_Point),
                            this.props.item.DEX_Bonus_Point && React.createElement("p", { className: "card-text" },
                                "DEX_Bonus_Point: ",
                                this.props.item.DEX_Bonus_Point),
                            this.props.item.INT_Bonus_Point && React.createElement("p", { className: "card-text" },
                                "INT_Bonus_Point: ",
                                this.props.item.INT_Bonus_Point),
                            this.props.item.Wis_Bonus_Point && React.createElement("p", { className: "card-text" },
                                "Wis_Bonus_Point: ",
                                this.props.item.Wis_Bonus_Point),
                            this.props.item.ApplyEffectCount && React.createElement("p", { className: "card-text" },
                                "ApplyEffectCount: ",
                                this.props.item.ApplyEffectCount),
                            this.props.item.ApplyEffectTime && React.createElement("p", { className: "card-text" },
                                "ApplyEffectTime: ",
                                this.props.item.ApplyEffectTime),
                            this.props.item.UseInterval && React.createElement("p", { className: "card-text" },
                                "UseInterval: ",
                                this.props.item.UseInterval),
                            this.props.item.HP && React.createElement("p", { className: "card-text" },
                                "HP: ",
                                this.props.item.HP),
                            this.props.item.SP && React.createElement("p", { className: "card-text" },
                                "SP: ",
                                this.props.item.SP),
                            this.props.item.MP && React.createElement("p", { className: "card-text" },
                                "MP: ",
                                this.props.item.MP),
                            this.props.item.RuneAttribute && React.createElement("p", { className: "card-text" },
                                "RuneAttribute: ",
                                this.props.item.RuneAttribute),
                            this.props.item.Useskillid && React.createElement("p", { className: "card-text" },
                                "Useskillid: ",
                                this.props.item.Useskillid),
                            this.props.item.Useskilllevel && React.createElement("p", { className: "card-text" },
                                "Useskilllevel: ",
                                this.props.item.Useskilllevel),
                            this.props.item.PolymorphId && React.createElement("p", { className: "card-text" },
                                "PolymorphId: ",
                                this.props.item.PolymorphId),
                            this.props.item.PolymorphDur && React.createElement("p", { className: "card-text" },
                                "PolymorphDur: ",
                                this.props.item.PolymorphDur),
                            this.props.item.FirstCategory && React.createElement("p", { className: "card-text" },
                                "FirstCategory: ",
                                this.props.item.FirstCategory),
                            this.props.item.FirstCategoryName && React.createElement("p", { className: "card-text" },
                                "FirstCategoryName: ",
                                this.props.item.FirstCategoryName),
                            this.props.item.SecondCategory && React.createElement("p", { className: "card-text" },
                                "SecondCategory: ",
                                this.props.item.SecondCategory),
                            this.props.item.SecondCategoryName && React.createElement("p", { className: "card-text" },
                                "SecondCategoryName: ",
                                this.props.item.SecondCategoryName),
                            this.props.item.PhysicalRank && React.createElement("p", { className: "card-text" },
                                "PhysicalRank: ",
                                this.props.item.PhysicalRank),
                            this.props.item.Hp_Buff && React.createElement("p", { className: "card-text" },
                                "Hp_Buff: ",
                                this.props.item.Hp_Buff),
                            this.props.item.Mp_Buff && React.createElement("p", { className: "card-text" },
                                "Mp_Buff: ",
                                this.props.item.Mp_Buff),
                            this.props.item.Attack_Buff && React.createElement("p", { className: "card-text" },
                                "Attack_Buff: ",
                                this.props.item.Attack_Buff),
                            this.props.item.Defense_Buff && React.createElement("p", { className: "card-text" },
                                "Defense_Buff: ",
                                this.props.item.Defense_Buff),
                            this.props.item.OptionTID && React.createElement("p", { className: "card-text" },
                                "OptionTID: ",
                                this.props.item.OptionTID),
                            this.props.item["font color"] && React.createElement("p", { className: "card-text" },
                                "fontcolor: ",
                                this.props.item["font color"])),
                        React.createElement("div", { className: "card-body-right" }, links && links.map(function (l, i) { return (React.createElement("p", { className: "card-text" },
                            "link: ",
                            l)); })))))));
    };
    return ItemRow;
}(React.Component));
exports.ItemRow = ItemRow;
//: string;
//: string;
//: string;
//: string;
//: string;
//Run_Buff: string;
//Cash: string;
//Destination: string;
//RemainTime: string;
//ExpireTime: string;
//classify_id: string;
//CanStopUsingItem: string;
//CashItemUseType: string;
//EnableOnRide: string;
//Buyer_Type: string;
//Using_Type: string;
//OptionTID: string;
//PotionType2: string;
//Link_id: string;
//Skill_plus: string;
//Gambling: string;
//QuestItem: string;
//Gacha_Type_Numer: string;
//GachaRank: string;
//StaminaCure: string;
//RemainPetStamina: string;
//GachaMinLv: string;
//GachaMaxLv: string;
//Item_section_num: string;
//Heroic_Min_Damage: string;
//Heroic_Max_Damage: string;
//Heroic_Defense_Point: string;
//# sourceMappingURL=itemrowken.js.map