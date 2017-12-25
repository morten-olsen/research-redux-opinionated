import { connect } from 'react-redux';

const withList = (getReducer, actions) => WrappedComponent => {
  const mapStateToProps = state => ({
    items: getReducer(state).items,
    status: getReducer(state).status,
    next: getReducer(state).next,
  });

  const mapDispatchToProps = dispatch => ({
    moreByUrl: (url) => {
      dispatch(actions.more(url));
    },
    select: (id) => {
      dispatch(actions.get(id));
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

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  )(WrappedComponent);
};

export default withList;
