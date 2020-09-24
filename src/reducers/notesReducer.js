/**
  {
    notes: [],
    active: null   ,
    active: {
      id:,
      title: string,
      body: string,
      date,
      imageUrl
    }
  }
 */

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((n) =>
          n.id === action.payload.id ? action.payload.note : n
        ),
      };
    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((n) => n.id !== action.payload),
      };
    case types.notesLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: [],
      };

    default:
      return state;
  }
};
