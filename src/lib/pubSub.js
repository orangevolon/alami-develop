export default () => {
  let subscribers = {};

  const publish = (channel, event) => {
    if (subscribers[channel]) {
      subscribers[channel].forEach(sub => sub(event));
    }
  };

  const subscribe = (channel, cb) => {
    if (!subscribers[channel]) {
      subscribers[channel] = [];
    }

    subscribers[channel].push(cb);

    return {
      unsubscribe: () => {
        subscribers = subscribers[channel].filter(sub => sub !== cb);
      }
    };
  };

  return {
    publish,
    subscribe
  };
};
