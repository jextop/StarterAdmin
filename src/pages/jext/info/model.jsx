import { info } from './service';

const initState = {
  cto51: {
    course: {
        count: undefined,
        userCount: undefined,
        user: [],
    },
    blog: {
        reader: [],
        count: [],
    },
  },
  csdn: {
    course: {
        count: undefined,
        userCount: undefined,
        user: [],
    },
    blog: {
        reader: [],
        count: [],
        score: undefined,
        rank: undefined,
    },
  },
};

const Model = {
  namespace: 'jext',
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

    clear() {
      return initState;
    },
  },
};
export default Model;
