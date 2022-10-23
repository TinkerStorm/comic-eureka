const events = {};

function listenerPredicate(eventName) {
  console.log(`Event: ${eventName}`);
  events[eventName].forEach(callback => callback());
}

const on = (eventName, callback) => {
  if (!events[eventName]) {
    events[eventName] = [];
  }
  events[eventName].push(callback);

  console.log(eventName, events[eventName].length);

  if (events[eventName].length === 1) {
    document.addEventListener(eventName, listenerPredicate(eventName));
  }
}

const off = (eventName, callback) => {
  if (!events[eventName]) {
    return;
  }
  if (!callback) {
    events[eventName] = [];
  } else {
    events[eventName] = events[eventName].filter(cb => cb !== callback);
  }

  console.log(eventName, events[eventName].length);

  if (events[eventName].length === 0) {
    document.removeEventListener(eventName, listenerPredicate(eventName));
  }
}

// https://stackoverflow.com/a/9899701

// Adaptation to ensure that all content is loaded, even if the event fires before the DOM is ready
const onReady = (fn) => {
  const _inner = () => setTimeout(fn, 1);

  if (document.readyState !== 'loading') {
    _inner();
  } else {
    on('DOMContentLoaded', _inner);
  }

  return _inner;
}