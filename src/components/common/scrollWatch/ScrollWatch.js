import { withPubSub, withDOM } from "@hocs";
import {
  PUBSUB_SCROLL,
  PUBSUB_SCROLL_WATCH,
  SW_TYPE_ENTER,
  SW_TYPE_EXIT,
  SW_DIR_DOWN,
  SW_DIR_UP
} from "@constants";

const ScrollWatch = ({
  pubSub,
  window,
  child,
  topMargin = 0,
  bottomMargin = 0
}) => {
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

    const bottomThreshold = windowHeight - bottomMargin * windowHeight;
    const topThreshold = topMargin * windowHeight;

    if (top >= bottomThreshold && lastTop < bottomThreshold) {
      // Exit from bottom
      handleScrollEvent(SW_TYPE_EXIT, SW_DIR_DOWN);
    } else if (top <= bottomThreshold && lastTop > bottomThreshold) {
      // Enter from bottom
      handleScrollEvent(SW_TYPE_ENTER, SW_DIR_UP);
    } else if (bottom >= topThreshold && lastBottom < topThreshold) {
      // Enter from top
      handleScrollEvent(SW_TYPE_ENTER, SW_DIR_DOWN);
    } else if (bottom <= topThreshold && lastBottom > topThreshold) {
      // Exit from top
      handleScrollEvent(SW_TYPE_EXIT, SW_DIR_UP);
    }

    lastTop = top;
    lastBottom = bottom;
  });

  return child;
};

export default withPubSub(withDOM(ScrollWatch));
