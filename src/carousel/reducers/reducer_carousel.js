import { FETCH_IMAGES, PREV_IMAGE, NEXT_IMAGE, NUMBER_OF_VISABLE_IMAGES } from '../../constants';

const indexArray = Array.from(Array(NUMBER_OF_VISABLE_IMAGES), (_,x) => x);

const initialState = {
  indexArray,
  images: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES: {
      const { images } = action;
      return { ...state, images };
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