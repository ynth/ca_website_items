import * as React from 'react';
import './App.css';
/*import './bootstrap.css';*/
import { itemdata } from './Data/api'
import { GetItemDataTableJSON } from './Data/api';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ItemRow } from './Data/itemrowken';
import  { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


interface IAppState {
	filter: string;
	items: itemdata[],
	selectedOption_firstcategory: string,
	selectedOption_secondcategory: string

}

interface IAppProps { }

class App extends React.Component<IAppProps, IAppState> {

	constructor(props: any) {
		super(props);
		this.state = {
			filter: "",
			items: [],
			selectedOption_firstcategory: "All First Category Types",
			selectedOption_secondcategory: "All Second Category Types"
		};
	}

	componentDidMount = () => {

		const items = GetItemDataTableJSON();
		this.setState({ items });
	}

	onChangeFilter = (e) => {

		this.setState({ filter: e.target.value });
	}

	getRenderedItems = () => {

		let hasfilters = false;

		let items = [...this.state.items];
		if (this.state.selectedOption_firstcategory && this.state.selectedOption_firstcategory != "All First Category Types") {

			items = items.filter(x => x.FirstCategoryName === this.state.selectedOption_firstcategory);
			hasfilters = true;
		}

		if (this.state.selectedOption_secondcategory && this.state.selectedOption_secondcategory != "All Second Category Types") {

			items = items.filter(x => x.SecondCategoryName === this.state.selectedOption_secondcategory);
			hasfilters = true;

		}

		if (!this.state.filter) {
			if (hasfilters) {
				items = items.sort((a, b) => a.TID - b.TID).filter(x => x.TID !== 10);

			} else {
				items = items.sort((a, b) => a.TID - b.TID).filter(x => x.TID !== 10).slice(0, 50);

			}
		} else {

			if (isNaN(+this.state.filter)) {
				items = items.filter(x => (x.ItemName as string).toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1
				).sort((a, b) => a.TID - b.TID);
			} else {
				items = items.filter(x => x.TID && x.TID.toString().toLowerCase().indexOf(this.state.filter.toString()) > -1
				).sort((a, b) => a.TID - b.TID);
			}


		}
		return items/*.filter(x => x.TID != 10)*/;

	}
	options_firstcategory = [
		'All First Category Types', 'Consumables', 'Elemental Stone', 'Elite Armor', 'Elite Weapon', 'Material',
		'Normal Accessory', 'Prayer Stone',
		'Rare Armor', 'Shield', 'Special', 'Unique Accessory', 'Unique Armor', 'Unique Weapon', "Realm Armor"
	];


	setSelected_firstcategory = (test: { value: string, label: string }) => {
		this.setState({ selectedOption_firstcategory: test.value, filter: null, selectedOption_secondcategory: 'All Second Category Types'})
	}

	setSelected_secondcategory = (test: { value: string, label: string }) => {
		this.setState({ selectedOption_secondcategory: test.value, filter: null, selectedOption_firstcategory:"All First Category Types"})
	}

	options_secondcategory = [
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

	onChnage_realmonly = (e) => {

		if (e.target.checked) {
			this.setState({
				selectedOption_firstcategory: "Realm Armor",
				filter: "",
				selectedOption_secondcategory: 'All Second Category Types'
			})

		} else if (this.state.selectedOption_firstcategory == "Realm Armor") {
			this.setState({ selectedOption_firstcategory: "All First Category Types" })

		}
		
	}
	render() {

		const items = this.getRenderedItems();
		return (
			<div className="App">
				<div className="container">

					<div className="filterkes">





						<Dropdown
							className="dropdown_item"
							placeholder="All First Category Types"
							options={this.options_firstcategory}
							onChange={this.setSelected_firstcategory}
							value={this.state.selectedOption_firstcategory}
						/>

						<Dropdown
							className="dropdown_item"
							placeholder="All Second Category Types"
							options={this.options_secondcategory}
							onChange={this.setSelected_secondcategory}
							value={this.state.selectedOption_secondcategory}

						/>

						<div className="form-check form-check-inline" style={{ color: "green", margin:'10px' }}>

							<input onChange={this.onChnage_realmonly} className="form-check-input" data-val="true" data-val-required="The Boolean field is required." id="bound" name="bound" type="checkbox" value="true" />

							<label className="form-check-label" style={{ marginLeft:'10px' }}>
								Realm Only
							</label>
						</div>


					</div>

					<div className="itemkes">


						<div className="my-3" style={{ margin: '20px' }}>

							<div id="searchItem" className="form-horizontal" role="form" >
								<div className="input-group">
									<input onChange={this.onChangeFilter} id="search" name="search" className="form-control form-control-lg filterke" type="text" placeholder="Search item data..." aria-label="search" aria-describedby="button-addon2" value={this.state.filter} />
								</div>
							</div>
							{items && items.map
								((c, i) => (
									<div style={{ margin: '0px' }}>
										<ItemRow key={i} item={c} />
									</div>

								))}

							{(!items || items.length == 0) &&

								<div style={{ margin: '0px' }}>
									nothing found
								</div>}
						</div>


					</div>






				</div>


			</div>
		);
	}
}

export default App;
