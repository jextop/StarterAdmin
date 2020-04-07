import { info } from './service';

const initState = {
  items: [
  ],
};

const Model = {
  namespace: 'speech',
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
      const { items } = state;
      items.unshift(payload);

      if (items.length > 12) {
        items.splice(items.length - 1, 1);
      }

      return {
        ...state,
        items,
      };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;
