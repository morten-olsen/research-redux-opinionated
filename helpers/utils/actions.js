export const createRepo = (singular, plural, endpoint) => ({
  get: (id) => ({
    type: 'API_REQUEST',
    meta: {
      name: singular,
      url: `/api/${endpoint}/${id}`,
    },
  }),

  remove: (id) => ({
    type: 'API_REQUEST',
    meta: {
      name: singular,
      method: 'DELETE',
      url: `/${endpoint}/${id}`,
    },
  }),

  add: (data) => ({
    type: 'API_REQUEST',
    payload: data,
    meta: {
      name: singular,
      method: 'POST',
      url: `/api/${endpoint}`,
    },
  }),

  update: (id, data) => ({
    type: 'API_REQUEST',
    payload: data,
    meta: {
      name: singular,
      method: 'PUT',
      url: `/api/${endpoint}/${id}`,
    },
  }),

  search: (query) => ({
    type: 'API_REQUEST',
    payload: query,
    meta: {
      name: plural,
      url: `/api/${endpoint}`,
    },
  }),

  more: (url) => ({
    type: 'API_REQUEST',
    meta: {
      name: `MORE_${plural}`,
      url,
    },
  }),
});
