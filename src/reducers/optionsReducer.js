const initialState = {
  option: []
}

function optionsReducer(state = initialState, action){
  switch (action.type){
    case "add_option":
        return {
          ...state,
          option: [...state.option, {name: action.name, effort: action.effort}]
        }
    default:
        return state
  }
}
export default optionsReducer
