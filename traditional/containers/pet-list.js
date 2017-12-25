import { connect } from 'react-redux';
import PetList from 'components/pet-list';
import {
  get,
  more,
  search,
} from 'actions/pets';

const mapStateToProps = state => ({
  items: state.pets.items,
  status: state.pets.status,
  next: state.pets.next,
});

const mapDispatchToProps = dispatch => ({
  moreByUrl: (url) => {
    dispatch(more(url));
  },
  select: (id) => {
    dispatch(get(id));
  },
});

const mergeProps = ({
  items,
  status,
  next,
}, {
  moreByUrl,
  select,
  search,
}, own) => ({
  ...own,
  items,
  status,
  more: next ? () => moreByUrl(next) : undefined,
  select,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(PetList);
