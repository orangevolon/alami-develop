import createPubSub from "../lib/pubSub";

const pubSub = createPubSub();

export default InnerComponent => ({ ...props }) => {
  return InnerComponent({ ...props, pubSub });
};
