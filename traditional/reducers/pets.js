export default (state = {}, { type, payload }) => {
  switch(type) {
    case 'REQUEST_PETS': {
      return {
        ...state,
        items: [],
        status: 'fetching',
        errors: undefined,
        next: undefined,
      };
    }
    case 'RESPONSE_PETS': {
      return {
        ...state,
        items: payload.result,
        status: 'succeeded',
        errors: undefined,
        next: payload.links.next,
      };
    }
    case 'FAILED_PETS': {
      return {
        ...state,
        status: 'failed',
        errors: payload,
      };
    }
    case 'REQUEST_MORE_PETS': {
      return {
        ...state,
        status: 'fetching',
        errors: undefined,
      };
    }
    case 'RESPONSE_MORE_PETS': {
      return {
        ...state,
        items: [...state.items, ...payload.result],
        status: 'succeeded',
        errors: undefined,
        next: payload.links.next,
      };
    }
    case 'FAILED_MORE_PETS': {
      return {
        ...state,
        status: 'failed',
        errors: payload,
      };
    }
    case 'REQUEST_USER': {
      return {};
    }
    default: {
      return state;
    }
  }
}
