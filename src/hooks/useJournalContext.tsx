import { Action, JournalState } from "src/@types";
import { useJournalReducer } from "./useJournalReducer";
import { createContext } from "react";
import { INITIAL_STATE } from "src/reducers";

// dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
// https://www.npmjs.com/package/react-combine-reducers

const JournalContext = createContext<{
  state: JournalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const JournalContextProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useJournalReducer();

  return (
    <JournalContext.Provider value={{ state, dispatch }}>
      {children}
    </JournalContext.Provider>
  );
};

export { JournalContext, JournalContextProvider };
