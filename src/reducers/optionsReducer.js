const initialState = {
  option: []
}

function optionsReducer(state = initialState, action){
  switch (action.type){
    case "add_option":
        return {
          option: [...state.option, {name: action.name, effort: action.effort}]
        }
    case "clear_options":
        return {
          option: []
        }
    default:
        return state
  }
}

export default optionsReducer
