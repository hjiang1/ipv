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
}

const datesReducer = (state = initialState, action) => {
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

    default:
      return state
  }
}

export default datesReducer
