import { 
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FALIURE, 
  PREV_IMAGE, NEXT_IMAGE, 
  NUMBER_OF_VISABLE_IMAGES,
} from '../../constants';

const indexArray = Array.from(Array(NUMBER_OF_VISABLE_IMAGES), (_,x) => x);

const initialState = {
  indexArray,
  images: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_STARTED: {
      return { ...state, loading: true};
    }
    case FETCH_IMAGES_SUCCESS: {
      const { images } = action;
      return { ...state, images, loading: false };
    }
    case FETCH_IMAGES_SUCCESS: {
      const { err } = action;
      return { ...state, err, loading: false };
    }
    case PREV_IMAGE: {
      const { indexArray, images } = state;

      const newIndexArray = indexArray.map(item => item-1 < 0 ? images.length-1 : item-1 );

      return { ...state, indexArray: newIndexArray };
    }
    case NEXT_IMAGE: {
      const { indexArray, images } = state;

      const newIndexArray = indexArray.map(item => 
        item+1 > images.length-1 ? item+1-images.length : item+1 
      );
      
      return { ...state, indexArray: newIndexArray };
    }
    default: 
      return state;
  }
}