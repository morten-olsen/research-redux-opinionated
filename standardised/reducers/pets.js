import {
  create,
  listApi,
} from 'utils/reducers';

export default create({
  ...listApi('PETS'),
  REQUEST_USER: () => ({}),
});
