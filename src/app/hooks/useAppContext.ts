import { useContext } from 'react';
import { USE_APP_CONTEXT_ERROR } from '../constants';
import AppContext from '../AppContext';

export default function useAppContext () {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error(USE_APP_CONTEXT_ERROR);
  }

  return appContext;
}