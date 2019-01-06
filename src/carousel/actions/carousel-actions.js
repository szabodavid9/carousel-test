import { FETCH_IMAGES } from '../../constants';

export const fetchImages = () => {
  return dispatch => {
    fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo#')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        dispatch(fetchImagesSuccess(myJson.hits));
      });
  };
};

const fetchImagesSuccess = (images) => {
  const action = {
    type: FETCH_IMAGES,
    images,
  };
  return action;
}
