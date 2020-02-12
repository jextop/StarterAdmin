import { chk } from './service';

const initState = {
  chk: undefined,
  msg: undefined,
  date: undefined,
  services: [
    {
      chk: undefined,
      msg: undefined,
      status: undefined,
      count: undefined,
    }, {
      chk: undefined,
      msg: undefined,
    },
  ],
};

const Model = {
  namespace: 'setting',
  state: initState,

  effects: {
    *chk(_, { call, put }) {
      const response = yield call(chk);
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
