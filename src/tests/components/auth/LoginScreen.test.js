import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};
let store = mockStore(initState);
store.dispatch = jest.fn()

import { LoginScreen } from "../../../components/auth/LoginScreen";
const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  </MemoryRouter>
);

describe("Pruebas en <LoginScreen/>", () => {
  beforeEach(()=> {
    store = mockStore(initState)
    jest.clearAllMocks()
  })

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should dispatch startGoogleLogin", () => {
    wrapper.find(".google-btn").prop("onClick")();
    // evaluamos si se disparo la función
    expect(startGoogleLogin).toHaveBeenCalled()
  });

  test('should dispatch startLoginEmailPassword', () => {
    wrapper.find("form").prop("onSubmit")({
      preventDefault(){}
    })

    expect(startLoginEmailPassword).toHaveBeenCalledWith("moises@gmail.com", "123456")
  })
  
});
