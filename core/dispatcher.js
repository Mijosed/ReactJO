class Dispatcher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== fn);
  }

  notify(data) {
    for (const fn of this.subscribers) {
      fn(data);
    }
  }
}

const dispatcher = new Dispatcher();

export function subscribe(fn) {
  dispatcher.subscribe(fn);
}

export function unsubscribe(fn) {
  dispatcher.unsubscribe(fn);
}

export function notify(data) {
  dispatcher.notify(data);
}
