import { connect } from 'react-redux';

const withEntity = (
  getReducer,
  additionalStateProps = () => ({}),
  additionalDispatchProps = () => ({}),
  additionalMergeProps = () => ({}),
) => WrappedComponents => {

  const mapStateToProps = state => ({
    ...additionalStateProps(state),
    item: state.user.item,
    status: state.user.status,
  });

  const mapDispatchToProps = dispatch => ({
    ...additionalDispatchProps(dispatch),
  });

  const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    item: stateProps.item,
    status: stateProps.status,
    ...additionalMergeProps(stateProps, dispatchProps, ownProps),
    ...ownProps,
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  )(WrappedComponents);
};

export default withEntity;
