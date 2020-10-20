import { mount } from 'enzyme';
import React from 'react';
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { Sidebar } from '../../../components/journal/Sidebar';
import { startNewNotes } from '../../../actions/notes';
import { startLogout } from '../../../actions/auth';

jest.mock("../../../actions/auth", () => ({
  startLogout: jest.fn(),
}));

jest.mock("../../../actions/notes", () => ({
  startNewNotes: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    name: "Edgar"
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    notes: [],
    active: null
  }
};
let store = mockStore(initState);
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <Sidebar/>
  </Provider>
)
describe('test in <Sidebar/>', () => {
  
  test('should snap correctly', () => {

    expect(wrapper).toMatchSnapshot()
  })

  test('should call startLogout action', () => {
    wrapper.find("button").prop("onClick")()

    expect(startLogout).toHaveBeenCalled()
  })

  test('should call startNewNote', () => {
    wrapper.find(".journal__new-entry").prop("onClick")()

    expect(startNewNotes).toBeCalled()
  })
  
  
  
})
