import { mount } from "enzyme";
import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from "../../../actions/notes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
  id:10,
  date: 0,
  title: "Titulo",
  body:"mundo",
  url: "https://algunhost.com/picture.jpg"
}

const wrapper = mount(
  <Provider store={store}>
    <JournalEntry {...nota}/>
  </Provider>
);

describe("test in <JournalEntr/>", () => {
  test("should snap correctly", () => {
    expect(wrapper).toMatchSnapshot()
  });

  test('should dispatch active note', async () => {
    wrapper.find(".journal__entry").prop("onClick")()

    expect(store.dispatch).toHaveBeenCalledWith(activeNote(nota.id, {...nota}))
    

  })
  
});
