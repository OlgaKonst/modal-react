const initialState = {
	isModalOpen: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case 'OPEN_POPUP': {
			const isModalOpen = true;
			return { isModalOpen };
		}
		case 'CLOSE_POPUP': {
			const isModalOpen = false;
			console.log(isModalOpen);
			return { isModalOpen };
		}
		default: {
			return state;
		}
	}
}
