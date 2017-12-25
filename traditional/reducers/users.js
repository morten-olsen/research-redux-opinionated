export default (state = {}, { type, payload }) => {
  switch(type) {
    case 'REQUEST_USERS': {
      return {
        ...state,
        items: [],
        status: 'fetching',
        errors: undefined,
        next: undefined,
      };
    }
    case 'RESPONSE_USERS': {
      return {
        ...state,
        items: payload.result,
        status: 'succeeded',
        errors: undefined,
        next: payload.links.next,
      };
    }
    case 'FAILED_USERS': {
      return {
        ...state,
        status: 'failed',
        errors: payload,
      };
    }
    case 'REQUEST_MORE_USERS': {
      return {
        ...state,
        status: 'fetching',
        errors: undefined,
      };
    }
    case 'RESPONSE_MORE_USERS': {
      return {
        ...state,
        items: [...state.items, ...payload.result],
        status: 'succeeded',
        errors: undefined,
        next: payload.links.next,
      };
    }
    case 'FAILED_MORE_USERS': {
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
