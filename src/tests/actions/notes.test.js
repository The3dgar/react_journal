import "@testing-library/jest-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNotes,
  startSaveNote,
  startUpLoading,
} from "../../actions/notes";
import { db } from "../../firebase/firebaseConfig";
import { fileUpload } from "../../helpers/fileUpload";
import { types } from "../../types/types";

jest.mock("../../helpers/fileUpload",()=>({
  fileUpload: jest.fn(()=> {
    return "https://hola-edgar.com/cosa.jpg"
  })
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: "testing",
  },
  notes: {
    active: {
      id: "4uAek8n03TQfbz1tviXT",
      title: "test.jpg",
      body: "myPhotico"
    }
  }
};

let store = mockStore(initState);

describe("ACTION NOTE", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("should create a new note ", async () => {
    await store.dispatch(startNewNotes());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        note: {
          title: "",
          body: "",
          date: expect.any(Number),
        },
      },
    });

    const id = actions[1].payload.id;
    await db.doc(`testing/journal/notes/${id}`).delete();
  });

  test("should loading notes", async () => {
    await store.dispatch(startLoadingNotes("testing"));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const note = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number)
    };

    expect(actions[0].payload[0]).toMatchObject(note)
  });

  test('should update the note', async () => {
    const note = {
      id:  "4uAek8n03TQfbz1tviXT",
      title: "Titulo",
      body: "body"
    }
    await store.dispatch(startSaveNote(note))

    const actions = store.getActions()

    expect(actions[0].type).toBe(types.notesUpdate)


    const document = await db.doc(`/testing/journal/notes/${note.id}`).get()
    expect(document.data().title).toBe(note.title)
  })

  test('should startUploading a picture', async () => {
    const file = new File([], "foto.jpg")
    await store.dispatch(startUpLoading(file))

    const docRef = await db.doc(`/testing/journal/notes/${initState.notes.active.id}`).get()

    expect(docRef.data().url).toBe("https://hola-edgar.com/cosa.jpg")


  })
  
  
});
