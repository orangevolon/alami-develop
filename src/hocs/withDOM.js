export default InnerComponent => ({ ...props }) => {
  return InnerComponent({ ...props, document, window });
};
