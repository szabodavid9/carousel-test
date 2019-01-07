import { 
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FALIURE, 
} from '../../constants';

export const fetchImages = () => {
  return dispatch => {
    dispatch(fetchImagesStarted());

    fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo#')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setTimeout(() => {
          dispatch(fetchImagesSuccess(myJson.hits));
        }, 2500);
      }).catch(err => {
        dispatch(fetchImagesFailure(err));
      });
  };
};

const fetchImagesStarted = () => {
  const action = {
    type: FETCH_IMAGES_STARTED,
  };
  return action;
};

const fetchImagesSuccess = (images) => {
  const action = {
    type: FETCH_IMAGES_SUCCESS,
    images,
  };
  return action;
};

const fetchImagesFailure = (err) => {
  const action = {
    type: FETCH_IMAGES_FALIURE,
    err,
  };
  return action;
};


