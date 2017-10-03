import * as types from '../constants/constants';

export function test(text) {
  return { type: types.TEST, text };
}