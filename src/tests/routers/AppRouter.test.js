import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";

import { login } from "../../actions/auth";
import { AppRouter } from "../../routes/AppRouter";
import { act } from "react-dom/test-utils";

import {firebase} from "../../firebase/firebaseConfig"

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

jest.mock("sweetalert2",()=>({
  Swal: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: "ABC",
    },
    notes: []
  }
};
let store = mockStore(initState);
store.dispatch = jest.fn();

describe("test in <AppRouter/>", () => {
  test("should call login if i am authenticated", async () => {
    await act(async () => {
      const userCredential = await firebase.auth().signInWithEmailAndPassword("test@testing.com", "123456")
      const user = userCredential.user

      const wrapper = mount(
        <MemoryRouter>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>
      );
    });

    expect(login).toHaveBeenCalled()
    expect(login).toHaveBeenCalledWith("LwkVJWmdZSX4iylRkblpmTju7al2", null)
  });
});
