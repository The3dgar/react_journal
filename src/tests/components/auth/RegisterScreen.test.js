

import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { types } from "../../../types/types";

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
// store.dispatch = jest.fn()

const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
  </MemoryRouter>
);

describe('Testing in <RegisterScreen/>', () => {
  test('should snap correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should dispatch actions correctly', () => {
    const emailField = wrapper.find('input[name="email"]')

    emailField.simulate("change", {
      target: {
        value: "",
        name: "email"
      }
    })

    // disparar error
    wrapper.find("form").prop("onSubmit")({preventDefault(){}})
    const actions = store.getActions()
    
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: "Email is not valid"
    })

  })
  
  // simular alertas precargadas del store

  test('should shave error alert box for invalid email', () => {
    const initState = {
      auth: {},
      ui: {
        loading: false,
        msgError: "Email is not valid",
      },
    };
    let store = mockStore(initState);
    
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <RegisterScreen />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(".auth__alert-error").exists()).toBe(true)
    expect(wrapper.find(".auth__alert-error").text().trim()).toBe(initState.ui.msgError)


  })
  
  
})
