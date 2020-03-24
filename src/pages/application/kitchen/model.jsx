import { info } from './service';

const initState = {
  items: [
  ],
};

const Model = {
  namespace: 'kitchen',
  state: initState,

  effects: {
    *info(_, { call, put }) {
      const response = yield call(info);
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

    data(state, { payload }) {
      return {
        ...state,
        items: payload,
      };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;
