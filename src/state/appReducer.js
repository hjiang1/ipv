const initialState = {
  participateResponses: {
    participate: undefined,
    email: "",
  },
  completed: false,
  qualify: false,
  showOverlay: false,
  currentScreen: "landing",
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case `UPDATE_PARTICIPATE_RESPONSE`:
      const newParticipateResponses = Object.assign(
        {},
        state.participateResponses,
        {
          [action.id]: action.value,
        }
      )

      return Object.assign({}, state, {
        participateResponses: newParticipateResponses,
      })
    case `UPDATE_QUALIFY`:
      return Object.assign({}, state, {
        qualify: action.value,
      })
    case `UPDATE_SHOW_OVERLAY`:
      return Object.assign({}, state, {
        showOverlay: action.value,
      })
    case `COMPLETE`:
      return Object.assign({}, state, {
        completed: true,
        questionnaireResponses: undefined,
      })
    case `UPDATE_CURRENT_SCREEN`:
      return Object.assign({}, state, {
        currentScreen: action.value,
      })
    default:
      return state
  }
}

export default appReducer
