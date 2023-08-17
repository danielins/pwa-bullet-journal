import { JournalAction, JournalState, JournalTaskActionKind } from "src/@types";
import { useReducer, createContext } from "react";

const INITIAL_STATE: JournalState = {
  tasks: [],
};

//dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

function journalStateReducer(
  state: JournalState,
  action: JournalAction
): JournalState {
  console.log("reducer", state, action);
  switch (action.type) {
    case JournalTaskActionKind.ADD:
      return {
        tasks: [
          ...state.tasks,
          {
            taskId: `${new Date().valueOf()}`,
            taskName: action.payload,
            isDone: false,
          },
        ],
      };
    default:
      return state;
  }
}

const JournalContext = createContext<{
  state: JournalState;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const JournalContextProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(journalStateReducer, INITIAL_STATE);

  return (
    <JournalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JournalContext.Provider>
  );
};

export { JournalContext, JournalContextProvider };
