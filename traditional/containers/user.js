import { connect } from 'react-redux';
import User from 'components/user';
import {
  search,
} from 'actions/pets';

const mapStateToProps = state => ({
  item: state.user.item,
  status: state.user.status,
});

const mapDispatchToProps = dispatch => ({
  searchByOwner: (id) => {
    dispatch(search({ owner: id }));
  },
});

const mergeProps = ({
  item,
  status,
}, {
  searchByOwner,
}, own) => ({
  item,
  status,
  searchPets: () => searchByOwner(item.id),
  ...own,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(User);
