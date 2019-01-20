import * as sagas from "./Sagas";

export const initSagas = sagaMiddleware =>
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
