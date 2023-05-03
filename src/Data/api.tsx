import { itemdatatable } from './items';
export const GetItemDataTableJSON = (): itemdata[] => {

	var items = itemdatatable as [];
	return items;
}




export class itemdata {
	TID: number;
	ItemName: string;
	Level: number;
	SuitableLevelMin: string;
	SuitableLevelMax: string;
	Class: string;
	Race: string;
	Gender: string;
	Type: string;
	SubType: string;
	ExtraType: string;
	BoundType: string;
	EventItem: string;
	PCBangOnly: string;
	VillainOnly: string;
	GroupID: string;
	DropRate: string;
	DropRank: string;
	fontcolor: string;
	SpiritType: string;
	NPCPrice: string;
	PCPrice: string;
	Stack: string;
	Hand: string;
	Rank: string;
	DUR: string;
	MinSocket: string;
	MaxSocket: string;
	MinOption: string;
	MaxOption: string;
	ATKRange: string;
	ATKSpeed: string;
	Physical_Min_Dama: string;ge
	Physical_Max_Damage: string;
	Magic_Min_Damage: string;
	Water_Min_Damage: string;
	Fire_Min_Damage: string;
	Earth_Min_Damage: string;
	Air_Min_Damage: string;
	Poison_Min_Damage: string;
	Ice_Min_Damage: string;
	Linghtning_Min_Damage: string;
	Magic_Max_Damage: string;
	Water_Max_Damage: string;
	Fire_Max_Damage: string;
	Earth_Max_Damage: string;
	Air_Max_Damage: string;
	Poison_Max_Damage: string;
	Ice_Max_Damage: string;
	Linghtning_Max_Damage: string;
	Physical_Defense_Point: string;
	Physical_ATKRate: string;
	Magic_ATKRate: string;
	PDR: string;
	BlockRate: string;
	Magic_Defense_Poin: string;
	Water_Defense_Point: string;
	Fire_Defense_Point: string;
	Earth_Defense_Point: string;
	Air_Defense_Point: string;
	Poison_Defense_Point: string;
	Ice_Defense_Point: string;
	Linghtning_Defense_Point: string;
	Magic_Defense_Rate: string;
	Water_Defense_Rate: string;
	Fire_Defense_Rate: string;
	Earth_Defense_Rate: string;
	Air_Defense_Rate: string;
	Poison_Defense_Rate: string;
	Ice_Defense_Rate: string;
	Linghtning_Defense_Rate: string;
	CON_Bonus_Point: string;
	STR_Bonus_Point: string;
	DEX_Bonus_Point: string;
	INT_Bonus_Point: string;
	Wis_Bonus_Point: string;
	ApplyEffectCount: string;
	ApplyEffectTime: string;
	UseInterval: string;
	HP: string;
	SP: string;
	MP: string;
	RuneAttribute: string;
	Useskillid: string;
	Useskilllevel: string;
	PolymorphId: string;
	PolymorphDur: string;
	FirstCategory: string;
	FirstCategoryName: string;
	SecondCategory: string;
	SecondCategoryName: string;
	PhysicalRank: string;
	Hp_Buff: string;
	Mp_Buff: string;
	Attack_Buff: string;
	Defense_Buff: string;
	Run_Buff: string;
	Cash: string;
	Destination: string;
	RemainTime: string;
	ExpireTime: string;
	classify_id: string;
	CanStopUsingItem: string;
	CashItemUseType: string;
	EnableOnRide: string;
	Buyer_Type: string;
	Using_Type: string;
	OptionTID: string;
	PotionType2: string;
	Link_id: string;
	Skill_plus: string;
	Gambling: string;
	QuestItem: string;
	Gacha_Type_Numer: string;
	GachaRank: string;
	StaminaCure: string;
	RemainPetStamina: string;
	GachaMinLv: string;
	GachaMaxLv: string;
	Item_section_num: string;
	Heroic_Min_Damage: string;
	Heroic_Max_Damage: string;
	Heroic_Defense_Point: string;


	constructor(car:any) {
		this.TID = car.TID;
	}

	
}