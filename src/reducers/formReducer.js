let initialState = {
	numberItems: [
		{ id: 1, selectValue: 'Twin', inputValue: 22 },
		{ id: 2, selectValue: 'Tripple', inputValue: 12 },
		{ id: 3, selectValue: 'Quadro', inputValue: 4 },
	],
};

export default function(state = JSON.parse(JSON.stringify(initialState)), action) {
	switch (action.type) {
		case 'ADD_ITEM': {
			const el = {
				id: state.numberItems.length + 1,
				selectValue: action.payload.selectValue,
				inputValue: action.payload.inputValue,
			};
			const numberItems = [...state.numberItems, el];
			console.log('ADD_ITEM', numberItems);
			return { numberItems };
		}
		case 'CHANGE_SELECT_VALUE': {
			console.log('CHANGE_SELECT_VALUE');
			const idx = state.numberItems.findIndex((item) => item.id === action.payload.id);
			const arr = state.numberItems.slice();
			arr[idx].selectValue = action.payload.selectValue;
			return { numberItems: arr };
		}
		case 'CHANGE_INPUT_VALUE': {
			console.log('CHANGE_INPUT_VALUE');
			const idx = state.numberItems.findIndex((item) => item.id === action.payload.id);
			const arr = state.numberItems.slice();
			arr[idx].inputValue = action.payload.inputValue;

			return { numberItems: arr };
		}

		case 'REMOVE_ITEM': {
			console.log('REMOVE_ITEM');
			const arr = state.numberItems.slice();
			const idx = arr.findIndex((item) => item.id === action.payload.id);
			arr.splice(idx, 1);
			for (let i = idx; i < arr.length; i++) {
				arr[i].id = i + 1;
			}
			return { numberItems: arr };
		}

		case 'SAVE_FORM': {
			/*initialState.numberItems = state.numberItems.slice();
			return state;*/
			initialState = JSON.parse(JSON.stringify(state));
      return state;
		}

		case 'CLOSE_POPUP': {
			//console.log('CLOSE_FORM',  doubleInitialState);
			return  JSON.parse(JSON.stringify(initialState));
		}

		default: {
			return state;
		}
	}
}
