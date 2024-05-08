const initialState = {
    bannerUrl: '',
    iconUrl: '',
};

export default function subredditReducer(state = initialState, action) {
    switch (action.type){
        case 'SET_BANNER_URL':
            return { ...state, bannerUrl: action.payload };
        case 'SET_ICON_URL':
            return { ...state, iconUrl: action.payload };
        default:
            return state;
    }
}