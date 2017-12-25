export const get = (id) => ({
  type: 'API_REQUEST',
  meta: {
    name: 'PET',
    url: `/api/pets/${id}`,
  },
});

export const remove = (id) => ({
  type: 'API_REQUEST',
  meta: {
    name: 'PET',
    method: 'DELETE',
    url: `/pets/${id}`,
  },
});

export const add = (data) => ({
  type: 'API_REQUEST',
  payload: data,
  meta: {
    name: 'PET',
    method: 'POST',
    url: `/api/pets`,
  },
});

export const update = (id, data) => ({
  type: 'API_REQUEST',
  payload: data,
  meta: {
    name: 'PET',
    method: 'PUT',
    url: `/api/pets/${id}`,
  },
});

export const search = (query) => ({
  type: 'API_REQUEST',
  meta: {
    name: 'PETS',
    url: `/api/pets`,
  },
});

export const more = (url) => ({
  type: 'API_REQUEST',
  meta: {
    name: 'MORE_PETS',
    url,
  },
});
