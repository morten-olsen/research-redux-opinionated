import withEntity from 'decorators/with-entity';
import User from 'components/user';
import {
  search
} from 'actions/pets';

export default withEntity(
  state => state.user,
  undefined,
  (dispatch) => ({
    searchByOwner: (id) => {
      dispatch(search({ owner: id }));
    },
  }),
  (stateProps, dispatchProps) => ({
    searchPets: () => dispatchProps.searchByOwner(stateProps.item.id),
  }),
)(User);
