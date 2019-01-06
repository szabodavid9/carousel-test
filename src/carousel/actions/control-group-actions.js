import { PREV_IMAGE, NEXT_IMAGE } from '../../constants';

export const prevImage = () => {
  const action = {
    type: PREV_IMAGE,
  };
  return action;
};

export const nextImage = () => {
  const action = {
    type: NEXT_IMAGE,
  };
  return action;
};