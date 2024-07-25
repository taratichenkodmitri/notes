export const INITIAL_STATE = {
  isValid: {
    title: true,
    text: true,
    date: true,
  },
  values: {
    title: '',
    text: '',
    date: '',
    tag: '',
  },
  isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'RESET_VALIDITY': {
      return {
        ...state,
        isValid: INITIAL_STATE.isValid,
      };
    }
    case 'SUBMIT': {
      let isValid = {};
      for (let key in state.values) {
        if (!(key in INITIAL_STATE.isValid)) continue;
        isValid[key] = Boolean(state.values[key]?.trim().length);
      }
      return {
        ...state,
        isValid: isValid,
        isFormReadyToSubmit: Object.values(isValid).every((item) => item === true),
      };
    }
    case 'SET_VALUE': {
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    }
    case 'RESET_VALUES': {
      return {
        ...state,
        values: INITIAL_STATE.values,
        isFormReadyToSubmit: false,
      };
    }
  }
}
