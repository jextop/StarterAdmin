import { info } from '@/services/jext';

export default {
  namespace: 'jext',

  state: {
    data: {
      course: {
          count: null,
          userCount: null,
          user: []
      },
      blog: {
          reader: [],
          count: []
      },
    },
  },

  effects: {
    *info({ payload, callback }, { call, put }) {
      const response = yield call(info, payload);
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
