import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL
} from '../actions';


const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CHARACTERS_START :
            console.log('FETCH_CHARACTERS_START');
            return {...state, isFetching: true, error: ''}
        case FETCH_CHARACTERS_SUCCESS :
            console.log('FETCH_CHARACTERS_SUCCESS');
            return {
                ...state, 
                isFetching: false, 
                nextPage: action.payload.next, 
                characters:[ ...state.characters, ...action.payload.results]}
        case FETCH_CHARACTERS_FAIL :
            console.log('FETCH_CHARACTERS_FAIL', action.payload)
            return {...state, error: action.payload}
        default: 
            return state
    }
}


const initialState = {
    isFetching: false,
    error: '',
    nextPage: 'https://swapi.co/api/people/',
    characters: []
};

export default reducer;