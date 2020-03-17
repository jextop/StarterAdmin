const initState = {
  items: [
  ],
};

const Model = {
  namespace: 'application',
  state: initState,

  reducers: {
    track(state, { payload }) {
      const { items } = state;
      items.unshift(payload);

      if (items.length > 30) {
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
