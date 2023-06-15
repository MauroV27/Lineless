import { EventController } from "../Controllers/Events";

const eventConnect = new EventController();

export function connectEventsRoutes(router) {

    // (post) /event/complaint -> Fazer denûncia

    // (get) /event/products -> recebe produtos do evento
    // (get) /event/products/product -> recebe dados de UM só produto

    // (get) /event -> Recebe eventos abertos naquele momento.....

    // (post) /event/order -> Cria pedido do cliente
    // (get) /event/order -> Cliente recebe estado dos pedido
    // (del) /event/order -> Cancela o pedido feito ( Será que precisa? )

    router.post('/event/complaint/', eventConnect.createSale);

    router.get('/event/products', eventConnect.getProducts );
    router.get('/event/products/product', eventConnect.getProduct);

    router.get('/event', eventConnect.getCurentlyEvents );
    
    router.post('/event/order', eventConnect.createOrder );
    router.get('/event/order', eventConnect.getOrder );
    router.del('/event/order', eventConnect.cancelOrder );
}