export default function EventBus () {
  const _events = {};

  return {
    get events() { return _events; },
    subscribe(type, callback) {
      if (!_events[type]) _events[type] = [];
      _events[type].push(callback);

      return () => {
        _events[type] = _events[type].filter(cb => cb !== callback);
        if (!_events[type].length) delete _events[type]
      }
    },
    emmit(type, payload) {
      if (_events[type]) {
        _events[type].forEach(cb => cb(payload));
      }
    }
  }
}
