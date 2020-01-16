import { chk, log, mq, cache, db } from '@/services/server';

export default {
  namespace: 'server',

  state: {
    data: {
      list: [],
      url: '',
      code: -1,
      msg: '',
    },
  },

  effects: {
    *chk({ payload }, { call, put }) {
      const response = yield call(chk, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *log({ payload, callback }, { call, put }) {
      const response = yield call(log, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *db({ payload, callback }, { call, put }) {
      const response = yield call(db, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *cache({ payload, callback }, { call, put }) {
      const response = yield call(cache, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *mq({ payload, callback }, { call, put }) {
      const response = yield call(mq, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
