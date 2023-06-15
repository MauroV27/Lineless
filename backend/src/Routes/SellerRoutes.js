import { SellerController } from "../Controllers/Seller";

const sellerConnect = new SellerController();

export function connectSellersRoutes(router) {

    // (post) /seller/register -> usuário vira vendedor

    // (get) /seller/orders -> recebe os pedidos feitos para a loja do vendedor 
    // (put) /seller/orders/order -> atualiza o estado do pedido ( validar entrega entra aq )
    // (del) /seller/orders/order -> Cancela o pedido ( Será que precisa? )

    // (put) /seller/product/amount -> Atualiza quantidade disponível do produto (????)

    router.post('/seller/register', sellerConnect.registerSeller );

    router.get('/seller/orders', sellerConnect.getOrders );
    router.put('/seller/orders/order', sellerConnect.updateOrder );
    router.del('/seller/orders/order', sellerConnect.deleteOrder );
}