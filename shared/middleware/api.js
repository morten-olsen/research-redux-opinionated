const addQuery = (endpoint, query = {}) => {
  const keys = Object.keys(query);
  const querystring = keys.map(key => `${key}=${query[key]}`).join('&');
  return `${endpoint}?${querystring}`;
};

export default store => next => action => {
  if (action.type === 'API_REQUEST') {
    const { payload, meta } = action;
    const { name, url } = meta;
    next({
      type: `REQUEST_${name}`,
      payload,
      meta,
    });

    return fetch(addQuery(url, payload))
      .then(async response => {
        const data = await response.json();
        next({
          type: `RESPONSE_${name}`,
          payload: data,
          meta: {
            ...meta,
            request: payload,
          },
        });
      })
      .catch(err => {
        console.error(err);
        next({
          type: `FAILED_${name}`,
          payload: err,
          meta: {
            ...meta,
            request: payload,
          },
        });
      });
  } else {
    return next(action);
  }
};
