import { LOADING_HEADER_MESSAGE } from '../../actions/actions';

export default function loadingHeaderMessage(state = true, action) {
  switch (action.type) {
    case LOADING_HEADER_MESSAGE:
      return action.payload;
  }
  return state;
}
