import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const { login, logout, startLogout, startLoginEmailPassword } = require("../../actions/auth");
const { types } = require("../../types/types");

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);

describe("ACTION AUTH", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("should login & logout function correctly", () => {
    const action = login("testUser", "Edgar");
    expect(action).toEqual({
      type: types.login,
      payload: {
        uid: "testUser",
        displayName: "Edgar",
      },
    });

    const logoutTest = logout();
    expect(logoutTest).toEqual({
      type: types.logout,
    });
  });

  test("should dispatch startLogout", async () => {
    await store.dispatch(startLogout())
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: types.logout
    })
    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning
    })

  });

  test('should dispatch startLoginWithEmailAndPassword', async () => {
    await store.dispatch(startLoginEmailPassword("test@testing.com", "123456"))

    const actions = store.getActions()
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: "LwkVJWmdZSX4iylRkblpmTju7al2",
        displayName: null
      }
    })

  })
  
});
