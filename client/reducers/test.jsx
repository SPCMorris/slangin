import * as Actions from '../constants/constants';

export default function example(state = {}, action) {
  switch (action.type) {
  case Actions.TEST:
    return {};

  default:
    return state;
  }
}
