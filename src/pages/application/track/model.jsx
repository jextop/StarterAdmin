import { track } from './service';

const initState = {
  chk: undefined,
  msg: undefined,
  text: undefined,
  msgList: [
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
      const { msgList } = state;
      msgList.unshift(payload);

      if (msgList.length > 10) {
        msgList.splice(msgList.length - 1, 1);
      }

      return {
        ...state,
        ...payload,
        msgList,
      };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;
