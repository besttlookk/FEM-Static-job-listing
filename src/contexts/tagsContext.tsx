import React, { createContext, useReducer } from "react";

type TagsContextType = {
  tags: string[];
  dispatch: React.Dispatch<{ type: string; payload?: string }>;
};

export const TagsContext = createContext<TagsContextType>(
  {} as TagsContextType
);

const actionTypes = {
  ADD_TAG: "ADD_TAG",
  REMOVE_TAG: "REMOVE_TAG",
  CLEAR_TAG: "CLEAR_TAG",
};

export const addTagAction = (tag: string) => ({
  type: actionTypes.ADD_TAG,
  payload: tag,
});

export const removeTagAction = (tag: string) => ({
  type: actionTypes.REMOVE_TAG,
  payload: tag,
});

export const clearTagsAction = () => ({
  type: actionTypes.CLEAR_TAG,
});

const reducer = (
  state: string[] = [],
  { type, payload }: { type: string; payload?: string }
): any => {
  switch (type) {
    case actionTypes.ADD_TAG:
      if (payload && state.includes(payload)) return;
      return [...state, payload];
    case actionTypes.REMOVE_TAG:
      return state.filter((tag) => tag !== payload);
    case actionTypes.CLEAR_TAG:
      return [];
    default:
      return state;
  }
};

const initialState: string[] = [];

const TagsProvider = ({ children }: { children: React.ReactNode }) => {
  const [tags, dispatch] = useReducer(reducer, initialState);

  return (
    <TagsContext.Provider value={{ tags, dispatch }}>
      {children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
