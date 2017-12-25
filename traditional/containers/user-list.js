import { connect } from 'react-redux';
import UserList from 'components/user-list';
import {
  get,
  more,
  search,
} from 'actions/users';

const mapStateToProps = state => ({
  items: state.users.items,
  status: state.users.status,
  next: state.users.next,
});

const mapDispatchToProps = dispatch => ({
  search: () => {
    dispatch(search());
  },
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
  search,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(UserList);
