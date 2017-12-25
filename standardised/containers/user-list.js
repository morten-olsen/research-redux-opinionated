import withList from 'decorators/with-list';
import UserList from 'components/user-list';
import actions from 'actions/users';

export default withList(
  state => state.users,
  actions,
)(UserList);
