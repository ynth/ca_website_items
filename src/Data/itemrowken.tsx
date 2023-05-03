import * as React from 'react';
import { itemdata } from './api';
import { options } from './itemoption';

interface IItemRow {
	item: itemdata;
}
interface IItemstate {
	classname: string
}
export class ItemRow extends React.Component<IItemRow, IItemstate> {
	constructor(props: any) {
		super(props);
		this.state = {
			classname: "collapse",
		};
	}
	//getClassName = (toolTip: string): string => {
	//	const isDefaultTooltip = toolTip == `No additional data available`;
	//	if (this.props.index === 0) { return `row ${isDefaultTooltip ? 'low' : 'lower'}` }
	//	if (this.props.index < 3 && !isDefaultTooltip) { return "row lower"; }
	//	return "row";
	//}

	onclicksken = () => {
		this.setState({ classname: this.state.classname === "collapse show" ? "collapse" : "collapse show" })
	}


	getLinks = (link_id: string | undefined) => {

		let links = [];
		if (!link_id) { return links; }
		const linkids = link_id.split(`;`);
		const name_property = "name";/*옵션내용*/

		for (var i = 0; i < linkids.length; i++) {
			const results = options.filter(x => x.Link_id == linkids[i]);
			if (results.length > 0) {
				console.log("results", results)

				links.push(results[0][name_property])
			}

		}

		return links;

	}
	render() {

		const links = this.getLinks(this.props.item.Link_id);

		const fontcolor = this.props.item["font color"] && this.props.item["font color"] != 61440 ? `#${this.props.item["font color"].toString(16)}` : "white"
		return (
			<>
				<div className="card blur border-dark my-2">
					<div className="card-header d-flex justify-content-between" onClick={this.onclicksken}>
						<a className="text-white">
							<div className="row">
								<div className="d-flex flex-row">
									{/*<img src={'./img/11.png'} loading="lazy" height="50" width="50" alt="" />*/}
									<div className="align-self-center" style={{ fontSize: '22px', marginLeft: '10px', color: fontcolor }}>{this.props.item.TID + " - " + this.props.item.ItemName}</div>
								</div>
							</div>
						</a>
						{/*<button onClick={this.onclicksken} className="accordion-button collapsed" style={{ width: 'auto', background: 'none', boxShadow: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapse22">*/}
						{/*</button>*/}
					</div>
					<div className={this.state.classname} id="collapse901">
						<div className="card-body">

							<div className="card-body-left">

								{this.props.item.Level && <p className="card-text" >Level: {this.props.item.Level}</p>}
								{this.props.item.SuitableLevelMin && <p className="card-text" >SuitableLevelMin: {this.props.item.SuitableLevelMin}</p>}
								{this.props.item.SuitableLevelMax && <p className="card-text" >SuitableLevelMax: {this.props.item.SuitableLevelMax}</p>}
								{this.props.item.Class && <p className="card-text" >Class: {this.props.item.Class}</p>}
								{this.props.item.Race && <p className="card-text" >Race: {this.props.item.Race}</p>}
								{this.props.item.Gender && <p className="card-text" >Gender: {this.props.item.Gender}</p>}
								{/*{this.props.item.Type && <p className="card-text" >Type: {this.props.item.Type}</p>}*/}
								{/*{this.props.item.SubType && <p className="card-text" >SubType: {this.props.item.SubType}</p>}*/}
								{this.props.item.ExtraType && <p className="card-text" >ExtraType: {this.props.item.ExtraType}</p>}
								{this.props.item.BoundType && <p className="card-text" >BoundType: {this.props.item.BoundType}</p>}
								{this.props.item.EventItem && <p className="card-text" >EventItem: {this.props.item.EventItem}</p>}
								{this.props.item.PCBangOnly && <p className="card-text" >PCBangOnly: {this.props.item.PCBangOnly}</p>}
								{this.props.item.VillainOnly && <p className="card-text" >VillainOnly: {this.props.item.VillainOnly}</p>}
								{this.props.item.GroupID && <p className="card-text" >GroupID: {this.props.item.GroupID}</p>}
								{this.props.item.DropRate && <p className="card-text" >DropRate: {this.props.item.DropRate}</p>}
								{this.props.item.DropRank && <p className="card-text" >DropRank: {this.props.item.DropRank}</p>}
								{this.props.item.fontcolor && <p className="card-text" >Level: {this.props.item.Level}</p>}
								{this.props.item.SpiritType && <p className="card-text" >SpiritType: {this.props.item.SpiritType}</p>}
								{this.props.item.NPCPrice && <p className="card-text" >NPCPrice: {this.props.item.NPCPrice}</p>}
								{this.props.item.PCPrice && <p className="card-text" >PCPrice: {this.props.item.PCPrice}</p>}
								{this.props.item.Stack && <p className="card-text" >Stack: {this.props.item.Stack}</p>}
								{this.props.item.Hand && <p className="card-text" >Hand: {this.props.item.Hand}</p>}
								{this.props.item.Rank && <p className="card-text" >Rank: {this.props.item.Rank}</p>}
								{this.props.item.DUR && <p className="card-text" >DUR: {this.props.item.DUR}</p>}
								{this.props.item.MinSocket && <p className="card-text" >MinSocket: {this.props.item.MinSocket}</p>}
								{this.props.item.MaxSocket && <p className="card-text" >MaxSocket: {this.props.item.MaxSocket}</p>}
								{this.props.item.MinOption && <p className="card-text" >MinOption: {this.props.item.MinOption}</p>}
								{this.props.item.MaxOption && <p className="card-text" >MaxOption: {this.props.item.MaxOption}</p>}
								{this.props.item.ATKRange && <p className="card-text" >ATKRange: {this.props.item.ATKRange}</p>}
								{this.props.item.ATKSpeed && <p className="card-text" >ATKSpeed: {this.props.item.ATKSpeed}</p>}
								{this.props.item.Physical_Min_Dama && <p className="card-text" >Physical_Min_Dama: {this.props.item.Physical_Min_Dama}</p>}
								{this.props.item.Physical_Max_Damage && <p className="card-text" >Physical_Max_Damage: {this.props.item.Physical_Max_Damage}</p>}

								{this.props.item.Magic_Min_Damage && <p className="card-text" >Magic_Min_Damage: {this.props.item.Magic_Min_Damage}</p>}
								{this.props.item.Water_Min_Damage && <p className="card-text" >Water_Min_Damage: {this.props.item.Water_Min_Damage}</p>}
								{this.props.item.Fire_Min_Damage && <p className="card-text" >Fire_Min_Damage: {this.props.item.Fire_Min_Damage}</p>}
								{this.props.item.Earth_Min_Damage && <p className="card-text" >Earth_Min_Damage: {this.props.item.Earth_Min_Damage}</p>}
								{this.props.item.Air_Min_Damage && <p className="card-text" >Air_Min_Damage: {this.props.item.Air_Min_Damage}</p>}
								{this.props.item.Poison_Min_Damage && <p className="card-text" >Poison_Min_Damage: {this.props.item.Poison_Min_Damage}</p>}

								{this.props.item.Magic_Max_Damage && <p className="card-text" >Magic_Max_Damage: {this.props.item.Magic_Max_Damage}</p>}
								{this.props.item.Water_Max_Damage && <p className="card-text" >Water_Max_Damage: {this.props.item.Water_Max_Damage}</p>}
								{this.props.item.Fire_Max_Damage && <p className="card-text" >Fire_Max_Damage: {this.props.item.Fire_Max_Damage}</p>}
								{this.props.item.Earth_Max_Damage && <p className="card-text" >Earth_Max_Damage: {this.props.item.Earth_Max_Damage}</p>}
								{this.props.item.Air_Max_Damage && <p className="card-text" >Air_Max_Damage: {this.props.item.Air_Max_Damage}</p>}
								{this.props.item.Poison_Max_Damage && <p className="card-text" >Poison_Max_Damage: {this.props.item.Poison_Max_Damage}</p>}
								{this.props.item.Ice_Max_Damage && <p className="card-text" >Ice_Max_Damage: {this.props.item.Ice_Max_Damage}</p>}

								{this.props.item.Linghtning_Max_Damage && <p className="card-text" >Linghtning_Max_Damage: {this.props.item.Linghtning_Max_Damage}</p>}
								{this.props.item.Physical_Defense_Point && <p className="card-text" >Physical_Defense_Point: {this.props.item.Physical_Defense_Point}</p>}
								{this.props.item.Physical_ATKRate && <p className="card-text" >Physical_ATKRate: {this.props.item.Physical_ATKRate}</p>}
								{this.props.item.Magic_ATKRate && <p className="card-text" >Magic_ATKRate: {this.props.item.Magic_ATKRate}</p>}
								{this.props.item.PDR && <p className="card-text" >PDR: {this.props.item.PDR}</p>}
								{this.props.item.BlockRate && <p className="card-text" >BlockRate: {this.props.item.BlockRate}</p>}
								{this.props.item.Magic_Defense_Poin && <p className="card-text" >Magic_Defense_Poin: {this.props.item.Magic_Defense_Poin}</p>}
								{this.props.item.Water_Defense_Point && <p className="card-text" >Water_Defense_Point: {this.props.item.Water_Defense_Point}</p>}
								{this.props.item.Fire_Defense_Point && <p className="card-text" >Fire_Defense_Point: {this.props.item.Fire_Defense_Point}</p>}

								{this.props.item.Earth_Defense_Point && <p className="card-text" >Earth_Defense_Point: {this.props.item.Earth_Defense_Point}</p>}
								{this.props.item.Air_Defense_Point && <p className="card-text" >Air_Defense_Point: {this.props.item.Air_Defense_Point}</p>}
								{this.props.item.Poison_Defense_Point && <p className="card-text" >Poison_Defense_Point: {this.props.item.Poison_Defense_Point}</p>}
								{this.props.item.Ice_Defense_Point && <p className="card-text" >Ice_Defense_Point: {this.props.item.Ice_Defense_Point}</p>}
								{this.props.item.Linghtning_Defense_Point && <p className="card-text" >Linghtning_Defense_Point: {this.props.item.Linghtning_Defense_Point}</p>}
								{this.props.item.Magic_Defense_Rate && <p className="card-text" >Magic_Defense_Rate: {this.props.item.Magic_Defense_Rate}</p>}
								{this.props.item.Water_Defense_Rate && <p className="card-text" >Water_Defense_Rate: {this.props.item.Water_Defense_Rate}</p>}
								{this.props.item.Fire_Defense_Rate && <p className="card-text" >Fire_Defense_Rate: {this.props.item.Fire_Defense_Rate}</p>}
								{this.props.item.Earth_Defense_Rate && <p className="card-text" >Earth_Defense_Rate: {this.props.item.Earth_Defense_Rate}</p>}
								{this.props.item.Air_Defense_Rate && <p className="card-text" >Air_Defense_Rate: {this.props.item.Air_Defense_Rate}</p>}
								{this.props.item.Poison_Defense_Rate && <p className="card-text" >Poison_Defense_Rate: {this.props.item.Poison_Defense_Rate}</p>}
								{this.props.item.Ice_Defense_Rate && <p className="card-text" >Ice_Defense_Rate: {this.props.item.Ice_Defense_Rate}</p>}
								{this.props.item.Linghtning_Defense_Rate && <p className="card-text" >Linghtning_Defense_Rate: {this.props.item.Linghtning_Defense_Rate}</p>}
								{this.props.item.CON_Bonus_Point && <p className="card-text" >CON_Bonus_Point: {this.props.item.CON_Bonus_Point}</p>}
								{this.props.item.STR_Bonus_Point && <p className="card-text" >STR_Bonus_Point: {this.props.item.STR_Bonus_Point}</p>}
								{this.props.item.DEX_Bonus_Point && <p className="card-text" >DEX_Bonus_Point: {this.props.item.DEX_Bonus_Point}</p>}
								{this.props.item.INT_Bonus_Point && <p className="card-text" >INT_Bonus_Point: {this.props.item.INT_Bonus_Point}</p>}
								{this.props.item.Wis_Bonus_Point && <p className="card-text" >Wis_Bonus_Point: {this.props.item.Wis_Bonus_Point}</p>}
								{this.props.item.ApplyEffectCount && <p className="card-text" >ApplyEffectCount: {this.props.item.ApplyEffectCount}</p>}
								{this.props.item.ApplyEffectTime && <p className="card-text" >ApplyEffectTime: {this.props.item.ApplyEffectTime}</p>}
								{this.props.item.UseInterval && <p className="card-text" >UseInterval: {this.props.item.UseInterval}</p>}
								{this.props.item.HP && <p className="card-text" >HP: {this.props.item.HP}</p>}
								{this.props.item.SP && <p className="card-text" >SP: {this.props.item.SP}</p>}
								{this.props.item.MP && <p className="card-text" >MP: {this.props.item.MP}</p>}
								{this.props.item.RuneAttribute && <p className="card-text" >RuneAttribute: {this.props.item.RuneAttribute}</p>}
								{this.props.item.Useskillid && <p className="card-text" >Useskillid: {this.props.item.Useskillid}</p>}
								{this.props.item.Useskilllevel && <p className="card-text" >Useskilllevel: {this.props.item.Useskilllevel}</p>}
								{this.props.item.PolymorphId && <p className="card-text" >PolymorphId: {this.props.item.PolymorphId}</p>}
								{this.props.item.PolymorphDur && <p className="card-text" >PolymorphDur: {this.props.item.PolymorphDur}</p>}
								{this.props.item.FirstCategory && <p className="card-text" >FirstCategory: {this.props.item.FirstCategory}</p>}
								{this.props.item.FirstCategoryName && <p className="card-text" >FirstCategoryName: {this.props.item.FirstCategoryName}</p>}
								{this.props.item.SecondCategory && <p className="card-text" >SecondCategory: {this.props.item.SecondCategory}</p>}
								{this.props.item.SecondCategoryName && <p className="card-text" >SecondCategoryName: {this.props.item.SecondCategoryName}</p>}
								{this.props.item.PhysicalRank && <p className="card-text" >PhysicalRank: {this.props.item.PhysicalRank}</p>}
								{this.props.item.Hp_Buff && <p className="card-text" >Hp_Buff: {this.props.item.Hp_Buff}</p>}
								{this.props.item.Mp_Buff && <p className="card-text" >Mp_Buff: {this.props.item.Mp_Buff}</p>}
								{this.props.item.Attack_Buff && <p className="card-text" >Attack_Buff: {this.props.item.Attack_Buff}</p>}
								{this.props.item.Defense_Buff && <p className="card-text" >Defense_Buff: {this.props.item.Defense_Buff}</p>}
								{this.props.item.OptionTID && <p className="card-text" >OptionTID: {this.props.item.OptionTID}</p>}
								{this.props.item["font color"] && <p className="card-text" >fontcolor: {this.props.item["font color"]}</p>}
							</div>
							<div className="card-body-right">

								{links && links.map
									((l, i) => (
										<p className="card-text" >link: {l}</p>

									))}
							</div>

						</div>
					</div>
				</div>
			</>
		);
	}
}


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