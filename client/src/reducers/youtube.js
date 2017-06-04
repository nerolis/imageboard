

function videos(state = [], action) {
  if (action.type === "fetch") {
    return action.payload.data.items;
  }
  return state;
}