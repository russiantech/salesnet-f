// src/services/local/OrderEventService.ts
type OrderSubscriber = (data: { unattendedCount: number }) => void;

class OrderEventService {
  private static subscribers: OrderSubscriber[] = [];
  private static unattendedCount = 0;

  static subscribe(callback: OrderSubscriber) {
    this.subscribers.push(callback);
    // Immediately send the current count
    callback({ unattendedCount: this.unattendedCount });
    return () => this.unsubscribe(callback);
  }

  static unsubscribe(callback: OrderSubscriber) {
    this.subscribers = this.subscribers.filter(cb => cb !== callback);
  }

  static publish(data: { unattendedCount: number }) {
    this.unattendedCount = data.unattendedCount;
    this.subscribers.forEach(cb => cb(data));
  }

  static getUnattendedCount() {
    return this.unattendedCount;
  }
}

export { OrderEventService };
