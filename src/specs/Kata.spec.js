import React from 'react';
import { shallow } from 'enzyme';
import Kata from '../Kata';

describe('Kata', () => {
  let component;
  let props;
  let instance;

  const render = () => {
    component = shallow(<Kata {...props} />);
    instance = component.instance();
  };

  beforeEach(() => {
    render();
  });

  describe('on instance', () => {
    it('should defined default states and props', () => {
      instance.generateArray(3, 5);
      expect(instance.state.printerArray).toEqual([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ]);
    });

/* Test Caracol */
it('Deberia retornar la impresion de una matriz n*n en forma de caracol',()=>{
instance.state.printerArray=[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

instance.loopArrayInSnail();
expect(instance.state.resultArray).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});


/* Test caracol de matri n*m */

fit('Deberia retornar la impresion de una matriz n*m en forma de caracol',()=>{
  instance.state.printerArray=[
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
  ];
  
  instance.loopArrayInSnail();
  expect(instance.state.resultArray).toEqual([1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]);
  });


  });


});

