export default (state = {}, { type, payload }) => {
  switch(type) {
    case 'REQUEST_USER': {
      return {
        ...state,
        item: [],
        status: 'fetching',
        errors: undefined,
      };
    }
    case 'RESPONSE_USER': {
      return {
        ...state,
        item: payload.result,
        status: 'succeeded',
        errors: undefined,
      };
    }
    case 'FAILED_USER': {
      return {
        ...state,
        status: 'failed',
        errors: payload,
      };
    }
    default: {
      return state;
    }
  }
}
