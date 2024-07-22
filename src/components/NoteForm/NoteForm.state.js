export const INITIAL_STATE = {
  isValid: {
    title: true,
    text: true,
    date: true,
  },
  values: {
    title: undefined,
    text: undefined,
    date: undefined,
  },
  isFormReadyToSubmit: true,
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
      let isValid = { ...INITIAL_STATE.isValid };
      for (let key in action.payload) {
        if (!(key in isValid)) continue;
        isValid[key] = Boolean(action.payload[key]?.trim().length);
      }
      return {
        values: action.payload,
        isValid: isValid,
        isFormReadyToSubmit: Object.values(isValid).every((item) => item === true),
      };
    }
  }
}
