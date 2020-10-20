import { types } from "../../types/types";
import "@testing-library/jest-dom";

describe("Pruebas en types", () => {
  test("should return types", () => {
    expect(types).toEqual({
      login: "[Auth] login",
      logout: "[Auth] logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",

      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",

      notesAddNew: "[Notes] New note",
      notesActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load note",
      notesUpdate: "[Notes] Updated note",
      notesFileUrl: "[Notes] Updated image url",
      notesDelete: "[Notes] Deleted note",
      notesLogoutCleaning: "[Notes] Logout cleaning",
    });
    expect(types.login).toBe("[Auth] login");
  });
});
