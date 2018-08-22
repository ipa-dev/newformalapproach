import { GET_HEADER_MESSAGE } from '../../actions/actions';

export default function getHeaderMessage(state = {}, action) {
  switch (action.type) {
    case GET_HEADER_MESSAGE:
      return action.payload
  }
  return state;
}
