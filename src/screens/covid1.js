import React, { Fragment, useEffect, useState } from "react"
import { connect } from "react-redux"

import Button from "../components/Button"
import BinaryQuestion from "../components/BinaryQuestion"
import RadioQuestion from "../components/RadioQuestion"

function Covid1(props) {
  const { updateCurrentScreen, updateQuestionnaireResponse, covid1 } = props
  const {
    stay_at_home,
    child_care,
    education,
    visit,
    separate,
    moved_in,
    moved_out,
    kept_working,
    hc_provider,
    difficulty_food,
    difficulty_medicine,
    difficulty_hc,
    difficulty_essentials,
    self_quarantined,
    income_decreased,
    cut_back_hours,
    stopped_working,
    lost_job,
    lost_benefits,
    missed_event,
    exposed_to_covid,
    diag_covid,
    icu_covid,
    died_covid,
    parenting,
    get_along,
    care_for_illness,
    care_for_children,
    care_for_older,
    wellbeing_exercise,
    wellbeing_eating,
    wellbeing_sleeping,
    wellbeing_anxiety,
    wellbeing_mood,
    overall_distress,
    children_distress,
  } = covid1

  const [isCompleted, setIsCompleted] = useState(false)
  const [validate, setValidate] = useState(false)

  const setResponseID = question => value => {
    updateQuestionnaireResponse(question, value)
  }

  useEffect(() => {
    if (Object.values(covid1).every(value => value !== undefined)) {
      setIsCompleted(true)
    } else if (isCompleted) {
      setIsCompleted(false)
    }
  }, [isCompleted, covid1])

  const onSubmit = event => {
    event.preventDefault()

    if (isCompleted) {
      console.log("Questionnaire Results: ", covid1)

      updateCurrentScreen("thankYou")
    } else if (!validate) {
      setValidate(true)
      window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }

  const onBack = () => {
    updateCurrentScreen("dates")
  }

  return (
    <Fragment>
      <p className="title questionnaire-title">IPV Questionnaire</p>
      <form className="form questionnaire-form" onSubmit={onSubmit}>
        {validate && !isCompleted && (
          <p className="validate-message">
            Please correct the items highlighted in red.
          </p>
        )}
        <div className="section-prompt">
          Please answer Yes or No for the following statements:
        </div>
        <BinaryQuestion
          number={1}
          prompt={'We had a "stay at home" order'}
          id="stay_at_home"
          value={stay_at_home}
          setValue={setResponseID("stay_at_home")}
          validate={validate}
        />
        <BinaryQuestion
          number={2}
          prompt="Our schools/child care centers were closed"
          id="child_care"
          value={child_care}
          setValue={setResponseID("child_care")}
          validate={validate}
        />
        <BinaryQuestion
          number={3}
          prompt="Our child's/children's education was disrupted"
          id="education"
          value={education}
          setValue={setResponseID("education")}
          validate={validate}
        />
        <BinaryQuestion
          number={4}
          prompt="We were unable to visit or care for a family member"
          id="visit"
          value={visit}
          setValue={setResponseID("visit")}
          validate={validate}
        />
        <BinaryQuestion
          number={5}
          prompt="Our family lived separately for health, safety, or job demands"
          id="separate"
          value={separate}
          setValue={setResponseID("separate")}
          validate={validate}
        />
        <BinaryQuestion
          number={6}
          prompt="Someone moved into (or back into) our home"
          id="moved_in"
          value={moved_in}
          setValue={setResponseID("moved_in")}
          validate={validate}
        />
        <BinaryQuestion
          number={7}
          prompt="We had to move out of our home"
          id="moved_out"
          value={moved_out}
          setValue={setResponseID("moved_out")}
          validate={validate}
        />
        <BinaryQuestion
          number={8}
          prompt="Someone in the family kept working outside the home (essential personnel)"
          id="kept_working"
          value={kept_working}
          setValue={setResponseID("kept_working")}
          validate={validate}
        />
        <BinaryQuestion
          number={9}
          prompt="Someone in the family is a healthcare provider/first responder providing direct care"
          id="hc_provider"
          value={hc_provider}
          setValue={setResponseID("hc_provider")}
          validate={validate}
        />
        <BinaryQuestion
          number={10}
          prompt="We had difficulty getting food"
          id="difficulty_food"
          value={difficulty_food}
          setValue={setResponseID("difficulty_food")}
          validate={validate}
        />
        <BinaryQuestion
          number={11}
          prompt="We had difficulty getting medicine"
          id="difficulty_medicine"
          value={difficulty_medicine}
          setValue={setResponseID("difficulty_medicine")}
          validate={validate}
        />
        <BinaryQuestion
          number={12}
          prompt="We had difficulty getting healthcare when we needed it"
          id="difficulty_hc"
          value={difficulty_hc}
          setValue={setResponseID("difficulty_hc")}
          validate={validate}
        />
        <BinaryQuestion
          number={13}
          prompt="We had difficulty getting other essentials"
          id="difficulty_essentials"
          value={difficulty_essentials}
          setValue={setResponseID("difficulty_essentials")}
          validate={validate}
        />
        <BinaryQuestion
          number={14}
          prompt="We self-quarantined due to travel or possible exposure"
          id="self_quarantined"
          value={self_quarantined}
          setValue={setResponseID("self_quarantined")}
          validate={validate}
        />
        <BinaryQuestion
          number={15}
          prompt="Our family income decreased"
          id="income_decreased"
          value={income_decreased}
          setValue={setResponseID("income_decreased")}
          validate={validate}
        />
        <BinaryQuestion
          number={16}
          prompt="A member of our family had to cut back hours at work"
          id="cut_back_hours"
          value={cut_back_hours}
          setValue={setResponseID("cut_back_hours")}
          validate={validate}
        />
        <BinaryQuestion
          number={17}
          prompt="A member of our family was required to stop working (expected to be called back)"
          id="stopped_working"
          value={stopped_working}
          setValue={setResponseID("stopped_working")}
          validate={validate}
        />
        <BinaryQuestion
          number={18}
          prompt="A member of our family lost their job permanently"
          id="lost_job"
          value={lost_job}
          setValue={setResponseID("lost_job")}
          validate={validate}
        />
        <BinaryQuestion
          number={19}
          prompt="We lost health insurance/benefits"
          id="lost_benefits"
          value={lost_benefits}
          setValue={setResponseID("lost_benefits")}
          validate={validate}
        />
        <BinaryQuestion
          number={20}
          prompt="We missed an important family event or it was cancelled (e.g. wedding, graduation, birth, funeral, travel, vacation, etc.)"
          id="missed_event"
          value={missed_event}
          setValue={setResponseID("v")}
          validate={validate}
        />
        <BinaryQuestion
          number={21}
          prompt="Someone in the family was exposed to someone with COVID-19"
          id="exposed_to_covid"
          value={exposed_to_covid}
          setValue={setResponseID("exposed_to_covid")}
          validate={validate}
        />
        <BinaryQuestion
          number={22}
          prompt="Someone in the family had symptoms or was diagnosed with COVID-19"
          id="diag_covid"
          value={diag_covid}
          setValue={setResponseID("diag_covid")}
          validate={validate}
        />
        <BinaryQuestion
          number={23}
          prompt="Someone in the family was hospitalized with COVID-19"
          id="diag_covid"
          value={diag_covid}
          setValue={setResponseID("diag_covid")}
          validate={validate}
        />
        <BinaryQuestion
          number={24}
          prompt="Someone in the family was in the Intensive Care Unit (ICU) for COVID-19"
          id="icu_covid"
          value={icu_covid}
          setValue={setResponseID("icu_covid")}
          validate={validate}
        />
        <BinaryQuestion
          number={25}
          prompt="Someone in the family died from COVID-19"
          id="died_covid"
          value={died_covid}
          setValue={setResponseID("died_covid")}
          validate={validate}
        />
        <hr className="rule" />
        <div className="section-prompt">
          Part 2. COVID-19 may have many impacts on you and your family life. In
          general, how has the COVID-19 pandemic affected each of the following?
        </div>
        <RadioQuestion
          number={26}
          prompt="Parenting"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="parenting"
          value={parenting}
          setValue={setResponseID("parenting")}
          validate={validate}
        />
        <RadioQuestion
          number={27}
          prompt="How family members get along with each other"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="get_along"
          value={get_along}
          setValue={setResponseID("get_along")}
          validate={validate}
        />
        <RadioQuestion
          number={28}
          prompt="Ability to care for your child with [add illness/condition]"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="care_for_illness"
          value={care_for_illness}
          setValue={setResponseID("care_for_illness")}
          validate={validate}
        />
        <RadioQuestion
          number={29}
          prompt="Ability to care for other children in your family"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="care_for_children"
          value={care_for_children}
          setValue={setResponseID("care_for_children")}
          validate={validate}
        />
        <RadioQuestion
          number={30}
          prompt="Ability to care for older adults or people with disabilities in your family"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="care_for_older"
          value={care_for_older}
          setValue={setResponseID("care_for_older")}
          validate={validate}
        />
        <RadioQuestion
          number={31}
          prompt="Your physical wellbeing - exercise"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="wellbeing_exercise"
          value={wellbeing_exercise}
          setValue={setResponseID("wellbeing_exercise")}
          validate={validate}
        />
        <RadioQuestion
          number={32}
          prompt="Your physical wellbeing - eating"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="wellbeing_eating"
          value={wellbeing_eating}
          setValue={setResponseID("wellbeing_eating")}
          validate={validate}
        />
        <RadioQuestion
          number={33}
          prompt="Your physical wellbeig - sleeping"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="wellbeing_sleeping"
          value={wellbeing_sleeping}
          setValue={setResponseID("wellbeing_sleeping")}
          validate={validate}
        />
        <RadioQuestion
          number={34}
          prompt="Your emotional wellbeing - anxiety"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="wellbeing_anxiety"
          value={wellbeing_anxiety}
          setValue={setResponseID("wellbeing_anxiety")}
          validate={validate}
        />
        <RadioQuestion
          number={35}
          prompt="Your emotional wellbeing - mood"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="wellbeing_mood"
          value={wellbeing_mood}
          setValue={setResponseID("wellbeing_mood")}
          validate={validate}
        />
        <RadioQuestion
          number={36}
          prompt="Overall, how much distress have you experienced related to COVID-19?"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="overall_distress"
          value={overall_distress}
          setValue={setResponseID("overall_distress")}
          validate={validate}
        />
        <RadioQuestion
          number={37}
          prompt="In general, across all your children, how much distress have your children experienced related to COVID-19"
          options={[
            "1 Made it a lot letter",
            "2 Made it a little better",
            "3 Made it a little worse",
            "4 Made it a lot worse",
          ]}
          id="children_distress"
          value={children_distress}
          setValue={setResponseID("children_distress")}
          validate={validate}
        />
        <hr className="rule" />
        <div className="section-prompt">
          Part 3. Please tell us about other effects of COVID-19 on your
          child/children and your family, both negative and/or positive.
        </div>
        <textarea style={{ width: "100%", marginBottom: "2.5rem" }} cols="10" />
        <hr className="rule" />
        <div className="actions">
          <Button type="button" onClick={onBack} secondary>
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Fragment>
  )
}

const mapStateToProps = ({ questionnairePage: { covid1 } }) => {
  return { covid1 }
}

const mapDispatchToProps = dispatch => {
  return {
    updateQuestionnaireResponse: (id, value) =>
      dispatch({
        type: `UPDATE_QUESTIONNAIRE_RESPONSE`,
        surveyName: "covid1",
        id,
        value,
      }),
    updateCurrentScreen: value =>
      dispatch({ type: `UPDATE_CURRENT_SCREEN`, value }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Covid1)
