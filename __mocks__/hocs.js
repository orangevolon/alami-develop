export default {
  withDOM: Component => ({ ...props }) =>
    Component({ ...props, document: global.document })
};
