import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

import "@testing-library/jest-dom";

describe("AuthReducer", () => {
  test("should return state", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: 1,
        displayName: "Edgar",
      },
    };
    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: 1,
      name: "Edgar",
    });
  });

  test("should return {}", () => {
    const initState = {
      uid: 1,
      name: "Edgar"
    };
    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });
  test("should return the same state", () => {
    const initState = {
      uid: 1,
      name: "Edgar"
    };
    const action = {
      type: "nothing",
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(state);
  });
});
