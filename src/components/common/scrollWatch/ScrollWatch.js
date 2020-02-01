import { withPubSub, withDOM } from "@hocs";
import {
  PUBSUB_SCROLL,
  PUBSUB_SCROLL_WATCH,
  SW_TYPE_ENTER,
  SW_TYPE_EXIT,
  SW_DIR_DOWN,
  SW_DIR_UP
} from "@constants";

const ScrollWatch = ({ pubSub, window, child }) => {
  let lastTop;
  let lastBottom;

  const handleScrollEvent = (type, direction) => {
    pubSub.publish(PUBSUB_SCROLL_WATCH, {
      type,
      direction,
      target: child
    });
  };

  pubSub.subscribe(PUBSUB_SCROLL, () => {
    const { top, bottom } = child.getBoundingClientRect();
    const { innerHeight: windowHeight } = window;

    if (top >= windowHeight && lastTop < windowHeight) {
      // Exit from bottom
      handleScrollEvent(SW_TYPE_EXIT, SW_DIR_DOWN);
    } else if (top <= windowHeight && lastTop > windowHeight) {
      // Enter from bottom
      handleScrollEvent(SW_TYPE_ENTER, SW_DIR_UP);
    } else if (bottom >= 0 && lastBottom < 0) {
      // Enter from top
      handleScrollEvent(SW_TYPE_ENTER, SW_DIR_DOWN);
    } else if (bottom <= 0 && lastBottom > 0) {
      // Exit from top
      handleScrollEvent(SW_TYPE_EXIT, SW_DIR_UP);
    }

    lastTop = top;
    lastBottom = bottom;
  });

  return child;
};

export default withPubSub(withDOM(ScrollWatch));
