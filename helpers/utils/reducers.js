export const create = (actions) => (state = {}, { type, payload}) => {
  if (!actions[type]) return state;
  return actions[type](state, payload);
};

export const entityApi = (name) => ({
  [`REQUEST_${name}`]: (state) => ({
    ...state,
    item: [],
    status: 'fetching',
    errors: undefined,
  }),

  [`RESPONSE_${name}`]: (state, payload) => ({
    ...state,
    item: payload.result,
    status: 'succeeded',
    errors: undefined,
  }),

  [`FAILED_${name}`]: (state, payload) => ({
    ...state,
    status: 'failed',
    errors: payload,
  }),
});

export const listApi = (name) => ({
  [`REQUEST_${name}`]: (state) => ({
    ...state,
    items: [],
    status: 'fetching',
    errors: undefined,
    next: undefined,
  }),

  [`RESPONSE_${name}`]: (state, payload) => ({
    ...state,
    items: payload.result,
    status: 'succeeded',
    errors: undefined,
    next: payload.links.next,
  }),

  [`FAILED_${name}`]: (state, payload) => ({
    ...state,
    status: 'failed',
    errors: payload,
  }),

  [`REQUEST_MORE_${name}`]: (state) => ({
    ...state,
    status: 'fetching',
    errors: undefined,
  }),

  [`RESPONSE_MORE_${name}`]: (state, payload) => ({
    ...state,
    items: [...state.items, ...payload.result],
    status: 'succeeded',
    errors: undefined,
    next: payload.links.next,
  }),

  [`FAILED_MORE_${name}`]: (state, payload) => ({
    ...state,
    status: 'failed',
    errors: payload,
  }),
});
