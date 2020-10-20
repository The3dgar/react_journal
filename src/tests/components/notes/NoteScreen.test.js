import { mount } from 'enzyme';
import React from 'react';
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn()
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
    active: {
      id: 1234,
      title: "hola",
      body:"mundo"
    }
  }
};
let store = mockStore(initState);
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen/>
  </Provider>
)

describe('test in <NoteScreen/>', () => {
  
  test('should snap correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should dispatch active note', () => {
    wrapper.find(`input[name="title"]`).simulate("change", {
      target: {
        name: "title",
        value: "Hola amigo"
      }
    })

    expect(activeNote).toHaveBeenLastCalledWith(
      1234,
      {
        body:"mundo",
        title: "Hola amigo",
        id: 1234
      }
    )
  })
  
  
})
