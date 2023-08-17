import { useReducer } from 'react'
import combineReducers from 'react-combine-reducers'
import { Action, JournalReducer, JournalState } from 'src/@types'
import { tasksReducer, trackReducer } from 'src/reducers'

export function useJournalReducer(): [JournalState, React.Dispatch<Action>]{

  const [journalReducer, initialJournalState] = combineReducers<JournalReducer>({
    tasks: [tasksReducer, []],
    tracks: [trackReducer, []],
  })

  const [state, dispatch] = useReducer<JournalReducer>(
    journalReducer,
    initialJournalState
  )

  return [ state, dispatch ]
}