import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case `UPDATE_QUESTIONNAIRE_RESPONSE`:
      const newQuestionnaireResponses = Object.assign(
        {},
        state.questionnaireResponses,
        {
          [action.id]: action.value,
        }
      )

      return Object.assign({}, state, {
        questionnaireResponses: newQuestionnaireResponses,
      })

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

const initialState = {
  questionnaireResponses: {
    age: undefined,
    sex: undefined,
    diagnosis: undefined,
    steroids: undefined,
    methamphetamine: undefined,
    psych: undefined,
    impairment: undefined,
    bipolar: undefined,
    left: undefined,
    unsafe: undefined,
    implants: undefined,
    claustro: undefined,
    pregnant: undefined,
  },
  participateResponses: {
    participate: undefined,
    email: "",
  },
  completed: false,
  qualify: false,
  showOverlay: false,
  currentScreen: "landing",
}

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    process.env.ENVIRONMENT === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
  )

export default createStore
