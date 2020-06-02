const initialState = {
  covid1: {
    stay_at_home: undefined,
    child_care: undefined,
    education: undefined,
    visit: undefined,
    separate: undefined,
    moved_in: undefined,
    moved_out: undefined,
    kept_working: undefined,
    hc_provider: undefined,
    difficulty_food: undefined,
    difficulty_medicine: undefined,
    difficulty_hc: undefined,
    difficulty_essentials: undefined,
    self_quarantined: undefined,
    income_decreased: undefined,
    cut_back_hours: undefined,
    stopped_working: undefined,
    lost_job: undefined,
    lost_benefits: undefined,
    missed_event: undefined,
    exposed_to_covid: undefined,
    diag_covid: undefined,
    icu_covid: undefined,
    died_covid: undefined,
    parenting: undefined,
    get_along: undefined,
    care_for_illness: undefined,
    care_for_children: undefined,
    care_for_older: undefined,
    wellbeing_exercise: undefined,
    wellbeing_eating: undefined,
    wellbeing_sleeping: undefined,
    wellbeing_anxiety: undefined,
    wellbeing_mood: undefined,
    overall_distress: undefined,
    children_distress: undefined,
  },
}

const questionnaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case `UPDATE_QUESTIONNAIRE_RESPONSE`:
      const newResponses = Object.assign({}, state[action.surveyName], {
        [action.id]: action.value,
      })

      return Object.assign({}, state, {
        [action.surveyName]: newResponses,
      })

    case `COMPLETE`:
      return {}

    default:
      return state
  }
}

export default questionnaireReducer
