import { Router } from 'express';

import { connectUsersRoutes } from './UserRoutes.js';
import { connectEventsRoutes } from './EventRoutes.js';
import { connectOrganizersRoutes } from './OrganizerRoutes.js';
import { connectSellersRoutes } from './SellerRoutes.js';

const router = Router();

router.get('/', (req, res) => res.status(200).json({message:"Lineless API on", data:null, status:"OK"}));

connectUsersRoutes(router);
connectEventsRoutes(router);
connectOrganizersRoutes(router);
connectSellersRoutes(router);

export { router };