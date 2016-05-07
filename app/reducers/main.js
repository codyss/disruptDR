import {
  SAVE_DATA
} from '../constants';

export default function main(state={}, action={}) {
  switch (action.type) {
    case SAVE_DATA:
      return state
    default:
      return state;
  }
}
