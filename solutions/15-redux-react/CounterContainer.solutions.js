/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
 */

/**
 * Import something form Redux here
 */
import { connect } from "react-redux";
import Counter from "./Counter";
import { increaseCount, decreaseCount } from "../../actions";

/**
 * Import the actions that you need
 */

/**
 * Complete this function. You may need to pass in arguements
 */
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

/**
 * Complete this function. You may need to pass in arguements
 */
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
  };
}

/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
