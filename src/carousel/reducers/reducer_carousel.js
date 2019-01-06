import { FETCH_IMAGES } from '../../constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES: {
      const { images } = action;
      return { ...state, images };
    }
    default: 
      return state;
  }
}