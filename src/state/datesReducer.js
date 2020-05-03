const initialState = {
  entries: {},
  isModalOpen: false,
  modalData: {
    date: undefined,
    experiences: {
      punched: false,
      shaken: false,
      choked: false,
      thrown: false,
      verbal: false,
    },
    severity: undefined,
  },
}

const datesReducer = (state = initialState, action) => {
  let newEntries
  let newModalData

  switch (action.type) {
    case `OPEN_MODAL`:
      if (action.date in state.entries) {
        newModalData = state.entries[action.date]
      } else {
        newModalData = JSON.parse(JSON.stringify(initialState.modalData))
        newModalData.date = action.date
      }

      return Object.assign({}, state, {
        isModalOpen: true,
        modalData: newModalData,
      })

    case `CHANGE_MODAL_DATE`:
      if (action.date in state.entries) {
        newModalData = state.entries[action.date]
      } else {
        newModalData = JSON.parse(JSON.stringify(initialState.modalData))
        newModalData.date = action.date
      }

      return Object.assign({}, state, {
        modalData: newModalData,
      })

    case `CLOSE_MODAL`:
      return Object.assign({}, state, {
        isModalOpen: false,
      })

    case `ENTER_ENTRY`:
      newEntries = Object.assign({}, state.entries)
      newEntries[state.modalData.date] = state.modalData

      return Object.assign({}, state, { entries: newEntries })

    case `DELETE_ENTRY`:
      newEntries = Object.assign({}, state.entries)
      if (state.modalData.date in newEntries) {
        delete newEntries[state.modalData.date]
      }

      return Object.assign({}, state, { entries: newEntries })
    case `UPDATE_MODAL_DATA`:
      return Object.assign({}, state, {
        modalData: {
          date: state.modalData.date,
          experiences: action.data.experiences,
          severity: action.data.severity,
        },
      })
    default:
      return state
  }
}

export default datesReducer
