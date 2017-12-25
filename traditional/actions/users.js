export const get = (id) => ({
  type: 'API_REQUEST',
  meta: {
    name: 'USER',
    url: `/api/users/${id}`
  }
});

export const remove = (id) => ({
  type: 'API_REQUEST',
  meta: {
    name: 'USER',
    method: 'DELETE',
    url: `/api/users/${id}`,
  },
});

export const add = (data) => ({
  type: 'API_REQUEST',
  payload: data,
  meta: {
    name: 'USER',
    method: 'POST',
    url: '/api/users',
  },
});

export const update = (id, data) => ({
  type: 'API_REQUEST',
  payload: data,
  meta: {
    name: 'USER',
    method: 'PUT',
    url: `/api/users/${id}`,
  },
});

export const search = (query) => ({
  type: 'API_REQUEST',
  payload: query,
  meta: {
    name: 'USERS',
    url: `/api/users`,
  },
});

export const more = (url) => ({
  type: 'API_REQUEST',
  meta: {
    name: 'MORE_USERS',
    url,
  },
});
