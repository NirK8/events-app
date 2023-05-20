import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  useReducer,
} from 'react';
import { EventType } from '@events-app/types';

export const allEventTypes = Object.values(EventType);

export const initialFilters = {
  page: 0,
  setPage: () => null,
  rowsPerPage: 0,
  setRowsPerPage: () => null,
  eventTypes: allEventTypes,
};

export const FiltersContext = createContext<{
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<React.SetStateAction<number>>;
  eventTypes: EventType[];
  updateEventTypes: (eventType: EventType[]) => void;
  removeEventType: (eventType: EventType) => void;
}>({
  ...initialFilters,
  updateEventTypes: () => null,
  removeEventType: () => null,
});

enum EventTypeAction {
  UPDATE = 'update',
  REMOVE = 'remove',
}

type EventTypesReducer = (
  state: EventType[],
  action: {
    type: EventTypeAction;
    payload: EventType | EventType[];
  }
) => EventType[];

const eventTypesReducer: EventTypesReducer = (state, action) => {
  switch (action.type) {
    case EventTypeAction.UPDATE:
      return action.payload as EventType[];
    case EventTypeAction.REMOVE: {
      const stateClone = state.slice();
      const indexOfDeletedValue = stateClone.indexOf(
        action.payload as EventType
      );
      stateClone.splice(indexOfDeletedValue, 1);
      return stateClone;
    }
    default:
      return state;
  }
};

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [eventTypes, dispatch] = useReducer<EventTypesReducer>(
    eventTypesReducer,
    allEventTypes
  );

  const updateEventTypes = (newEventTypes: EventType[]) => {
    dispatch({
      type: EventTypeAction.UPDATE,
      payload: newEventTypes,
    });
  };
  const removeEventType = (eventType: EventType) => {
    dispatch({
      type: EventTypeAction.REMOVE,
      payload: eventType,
    });
  };

  const value = {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    eventTypes,
    updateEventTypes,
    removeEventType,
  };
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
