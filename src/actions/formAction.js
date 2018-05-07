export const addItemAction = () => ({
	type: 'ADD_ITEM',
	payload: {
		selectValue: '',
		inputValue: 0,
	},
});

export const removeItemAction = (id) => ({
	type: 'REMOVE_ITEM',
	payload: {
		id,
	},
});

export const changeValueSelectAction = (id, value) => ({
	type: 'CHANGE_SELECT_VALUE',
	payload: {
		id,
		selectValue: value,
	},
});

export const changeValueInputAction = (id, value) => ({
	type: 'CHANGE_INPUT_VALUE',
	payload: {
		id,
		inputValue: value,
	},
});

export const saveFormAction = () => ({
	type: 'SAVE_FORM'
});


