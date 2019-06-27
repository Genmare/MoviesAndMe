const initialState = { viewsFilm : [] }

function toggleView(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_VIEW':
            const viewFilmIndex = state.viewsFilm.findIndex(item => item.id === action.value.id)
            if ( viewFilmIndex !== -1) {
                nextState = {
                    ...state,
                    viewsFilm: state.viewsFilm.filter( (item, index) => index != viewFilmIndex)
                }
            }
            else {
                nextState = {
                    ...state,
                    viewsFilm: [...state.viewsFilm, action.value]
                }
            }
            return nextState || state
    
        default:
            return state
    }
}

export default toggleView