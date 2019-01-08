import React from 'react';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import carouselReducer from '../reducers/reducer_carousel';
import { NEXT_IMAGE, PREV_IMAGE } from '../../constants';

import { Carousel }  from '../Carousel';

configure({ adapter: new Adapter() });

describe('carousel test', () =>{
  const state = {
    indexArray: [0,1,2,3,4],
    images: [{id: '1', url: 'hht0'}, {id: '2', url: 'hht1'}, {id: '3', url: 'hht2'}, {id: '4', url: 'hht3'}, {id: '5', url: 'hht4'} ],
  };

  it('should generate in correct order', () => {
    const { indexArray, images } = state;

    const component = shallow(<Carousel indexArray={indexArray} images={images}/>);
    expect(component.instance().generateVisableImages()).toEqual([{id: '1', url: 'hht0'}, {id: '2', url: 'hht1'}, {id: '3', url: 'hht2'}, {id: '4', url: 'hht3'}, {id: '5', url: 'hht4'}]);
  }); 

  it('should generate next index array', () => {
    const action = {
      type: NEXT_IMAGE,
    };

    const nextState = carouselReducer(state,action);
    const nextIndexArray = nextState.indexArray;
    expect(nextIndexArray).toEqual([1,2,3,4,0]);
  });

  it('should generate prev index array', () => {
    const action = {
      type: PREV_IMAGE,
    };

    const nextState = carouselReducer(state,action);
    const nextIndexArray = nextState.indexArray;
    expect(nextIndexArray).toEqual([4,0,1,2,3]);
  });

});