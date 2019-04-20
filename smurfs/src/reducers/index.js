/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURF,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  POST_SMURF,
  POST_SUCCESS,
  POST_FAILURE
} from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  name: "",
  age: "",
  height: "",
  isFetching: false,
  isPosting: false,
  error: ""
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCHING_SMURF:
      return {
        ...state,
        error: "",
        isFetching: true
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: action.payload
      };

    case FETCHING_FAILURE:
      return {
        ...state,
        errorStatusCode: action.payload.status
      };

    case POST_SMURF:
      return {
        ...state,
        error: "",
        isPosting: true
      };

    case POST_SUCCESS:
      return {
        ...state,
        error: "",
        isPosting: false,
        smurfs: action.payload
      };

    case POST_FAILURE:
      return {
        ...state,
        errorStatusCode: action.payload.status
      };

    default:
      return state;
  }
};

export default smurfReducer;
