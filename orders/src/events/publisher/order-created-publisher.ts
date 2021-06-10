import { Publisher } from './base';
import { Queues, OrderCreatedEvent, Topics } from '../types';

class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly topic: Topics.ORDER_CREATED = Topics.ORDER_CREATED;
  readonly queue: Queues.ORDERS = Queues.ORDERS;
}

export default OrderCreatedPublisher;