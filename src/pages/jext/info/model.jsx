import { info } from './service';

const initState = {
  cto51: {
    course: {
        count: "",
        userCount: "",
        user: [],
    },
    blog: {
        reader: [],
        count: [],
    },
  },
  csdn: {
    course: {
        count: "",
        userCount: "",
        user: [],
    },
    blog: {
        reader: [],
        count: [],
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
      console.log("save", state)
      return { ...state, ...payload };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;
