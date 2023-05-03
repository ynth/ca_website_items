////import * as React from 'react';
////import { itemdata } from './api';
////interface IItemRow {
////	item: itemdata;
////}
////interface IItemstate {
////	classname:string
////}
////export class ItemRow extends React.Component<IItemRow, IItemstate> {
////	constructor(props: any) {
////		super(props);
////		this.state = {
////			classname: "collapse",
////		};
////	}
////	//getClassName = (toolTip: string): string => {
////	//	const isDefaultTooltip = toolTip == `No additional data available`;
////	//	if (this.props.index === 0) { return `row ${isDefaultTooltip ? 'low' : 'lower'}` }
////	//	if (this.props.index < 3 && !isDefaultTooltip) { return "row lower"; }
////	//	return "row";
////	//}
////	render() {
////		return (
////			<>
////				<div className="card blur border-dark my-2">
////					<div className="card-header d-flex justify-content-between">
////						<a className="text-white">
////							<div className="row">
////								<div className="d-flex flex-row">
////									<img src="./img/items/401.png" loading="lazy" height="50" width="50" alt="" />
////									<div className="align-self-center" style={{ fontSize: '22px', marginLeft: '10px' }}>{this.props.item.TID + " - " + this.props.item.ItemName}</div>
////								</div>
////							</div>
////						</a>
////						<button className="accordion-button collapsed" style={{ width: 'auto', background: 'none', boxShadow: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapse22">
////						</button>
////					</div>
////					<div className={this.state.classname} id="collapse901">
////						<div className="card-body">
////							{this.props.item.Level && <p className="card-text" >Level: {this.props.item.Level}</p>}
////							{this.props.item.SuitableLevelMin && <p className="card-text" >SuitableLevelMin: {this.props.item.SuitableLevelMin}</p>}
////							{this.props.item.SuitableLevelMax && <p className="card-text" >SuitableLevelMax: {this.props.item.SuitableLevelMax}</p>}
////							{this.props.item.Class && <p className="card-text" >Class: {this.props.item.Class}</p>}
////							{this.props.item.Race && <p className="card-text" >Race: {this.props.item.Race}</p>}
////							{this.props.item.Gender && <p className="card-text" >Gender: {this.props.item.Gender}</p>}
////							{/*{this.props.item.Type && <p className="card-text" >Type: {this.props.item.Type}</p>}*/}
////							{/*{this.props.item.SubType && <p className="card-text" >SubType: {this.props.item.SubType}</p>}*/}
////							{this.props.item.ExtraType && <p className="card-text" >ExtraType: {this.props.item.ExtraType}</p>}
////							{this.props.item.BoundType && <p className="card-text" >BoundType: {this.props.item.BoundType}</p>}
////							{this.props.item.EventItem && <p className="card-text" >EventItem: {this.props.item.EventItem}</p>}
////							{this.props.item.PCBangOnly && <p className="card-text" >PCBangOnly: {this.props.item.PCBangOnly}</p>}
////							{this.props.item.VillainOnly && <p className="card-text" >VillainOnly: {this.props.item.VillainOnly}</p>}
////							{this.props.item.GroupID && <p className="card-text" >GroupID: {this.props.item.GroupID}</p>}
////							{this.props.item.DropRate && <p className="card-text" >DropRate: {this.props.item.DropRate}</p>}
////							{this.props.item.DropRank && <p className="card-text" >DropRank: {this.props.item.DropRank}</p>}
////							{this.props.item.fontcolor && <p className="card-text" >Level: {this.props.item.Level}</p>}
////							{this.props.item.SpiritType && <p className="card-text" >SpiritType: {this.props.item.SpiritType}</p>}
////							{this.props.item.NPCPrice && <p className="card-text" >NPCPrice: {this.props.item.NPCPrice}</p>}
////							{this.props.item.PCPrice && <p className="card-text" >PCPrice: {this.props.item.PCPrice}</p>}
////							{this.props.item.Stack && <p className="card-text" >Stack: {this.props.item.Stack}</p>}
////							{this.props.item.Hand && <p className="card-text" >Hand: {this.props.item.Hand}</p>}
////							{this.props.item.Rank && <p className="card-text" >Rank: {this.props.item.Rank}</p>}
////							{this.props.item.DUR && <p className="card-text" >DUR: {this.props.item.DUR}</p>}
////							{this.props.item.MinSocket && <p className="card-text" >MinSocket: {this.props.item.MinSocket}</p>}
////							{this.props.item.MaxSocket && <p className="card-text" >MaxSocket: {this.props.item.MaxSocket}</p>}
////							{this.props.item.MinOption && <p className="card-text" >MinOption: {this.props.item.MinOption}</p>}
////							{this.props.item.MaxOption && <p className="card-text" >MaxOption: {this.props.item.MaxOption}</p>}
////							{this.props.item.ATKRange && <p className="card-text" >ATKRange: {this.props.item.ATKRange}</p>}
////							{this.props.item.ATKSpeed && <p className="card-text" >ATKSpeed: {this.props.item.ATKSpeed}</p>}
////							{this.props.item.Physical_Min_Dama && <p className="card-text" >Physical_Min_Dama: {this.props.item.Physical_Min_Dama}</p>}
////							{this.props.item.Physical_Max_Damage && <p className="card-text" >Physical_Max_Damage: {this.props.item.Physical_Max_Damage}</p>}
////						</div>
////					</div>
////				</div>
////			</>
////		);
////	}
////}
////# sourceMappingURL=items.js.map