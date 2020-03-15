import { track } from './service';

const initState = {
  code: undefined,
  msg: undefined,
  items: [
  ],
};

const Model = {
  namespace: 'application',
  state: initState,

  effects: {
    *track(_, { call, put }) {
      const response = yield call(track);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;
