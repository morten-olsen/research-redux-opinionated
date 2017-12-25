import withList from 'decorators/with-list';
import PetList from 'components/pet-list';
import actions from 'actions/pets';

export default withList(
  state => state.pets,
  actions,
)(PetList);
