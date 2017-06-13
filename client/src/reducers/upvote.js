// 1. Берет экшен(информацию о том, что случилось)
// 2. Копирует текущий стейт

function upvotes(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
        console.log('INC like')
        const i = action.index;
        // Вернуть обновленный стейт
        return [
            ...state.slice(0, i), // бефор
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), // афтер
        ]
        default: return state;
    }
}

export default upvotes