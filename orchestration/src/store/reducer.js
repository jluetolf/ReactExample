const initialState = {
    startDate: new Date(),
    endDate: new Date(),
    orchestrationList: [],
    error: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'START_DATE_CHANGED':
            return {
                ...state,
                startDate: action.value
            }
        case 'END_DATE_CHANGED':
            return {
                ...state,
                endDate: action.value
            }
        case 'UPDATE_ORCHESTRATION_LIST':
            return {
                ...state,
                orchestrationList: action.value
            }
        case 'UPDATE_ERROR':
            return {
                ...state,
                error: action.value
            }
        default:
            return state;
    }
};

export default reducer;