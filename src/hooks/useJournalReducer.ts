import { useReducer } from 'react'
import combineReducers from 'react-combine-reducers'
import { Action, JournalReducer, JournalState } from 'src/@types'
import { INITIAL_MONTH_STATE, INITIAL_TASKS_STATE, INITIAL_TRACKS_STATE, INITIAL_YEAR_STATE, monthReducer, tasksReducer, trackReducer, yearReducer } from 'src/reducers'

export function useJournalReducer(): [JournalState, React.Dispatch<Action>]{

  const [journalReducer, initialJournalState] = combineReducers<JournalReducer>({
    month: [monthReducer, INITIAL_MONTH_STATE],
    year: [yearReducer, INITIAL_YEAR_STATE],
    tasks: [tasksReducer, INITIAL_TASKS_STATE],
    tracks: [trackReducer, INITIAL_TRACKS_STATE],
  })

  const [state, dispatch] = useReducer<JournalReducer>(
    journalReducer,
    initialJournalState
  )

  return [ state, dispatch ]
}