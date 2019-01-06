import { FETCH_IMAGES, PREV_IMAGE, NEXT_IMAGE } from '../../constants';

const initialState = {
  offset: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES: {
      const { images } = action;
      return { ...state, images };
    }
    case PREV_IMAGE: {
      const { offset, images } = state;
      const newOffset = offset-1 < 0 ? images.length-1 : offset-1;
      return { ...state, offset: newOffset };
    }
    case NEXT_IMAGE: {
      const { offset, images } = state;
      const newOffset = offset+1 > images.length-1 ? offset+1-images.length : offset+1;
      return { ...state, offset: newOffset };
    }
    default: 
      return state;
  }
}