import { OrganizerController } from "../Controllers/Organizer";

const organizerConnect = new OrganizerController();

export function connectOrganizersRoutes(router) {

    // (post) /organizer/register -> usuário vira organizador

    // (post) /organizer/event -> Cria evento
    // (put) /organizer/event -> Atualiza evento propriedades e status 
    
    // (get) /organizer/sellers -> Recebe lista de vendedores cadastrados no evento
    
    // (get) /organizer/seller -> Recebe dados sobre um vendedor do evento
    // (post) /organizer/seller -> Adiciona um vendedor ao evento
    // (del) /organizer/seller -> Remove vendedor do evento
    
    // (post) /organizer/product/add -> Adiciona um produto a um vendedor no evento
    // (put) /organizer/product/update -> Atualiza os dados de um produto 
    // (del) /organizer/product/remove -> Remove um produto do evento

    router.post('/organizer/register', organizerConnect.registerOrganizer );

    router.post('/organizer/event', organizerConnect.createEvent );
    router.put('/organizer/event', organizerConnect.updateEvent);

    router.get('/organizer/sellers', organizerConnect.getSellersInEvent );
    
    router.post('/organizer/seller', organizerConnect.registerSellerInEvent );
    router.get('/organizer/seller', organizerConnect.getSellerInEvent );
    router.del('/organizer/seller', organizerConnect.removeSellerInEvent );

    router.post('/organizer/product/', organizerConnect.addProductInEvent );
    router.put('/organizer/product/', organizerConnect.updateProductInEvent );
    router.del('/organizer/product/', organizerConnect.removeProductInEvent );

}