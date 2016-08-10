import * as types from './../../mutation-types';

export const addNotification = ({ dispatch }, notification) => {
  dispatch(types.ADD_NOTIFICATION, notification);
};

export const deleteNotification = ({ dispatch }, notification) => {
  dispatch(types.DELETE_NOTIFICATION, notification);
};
