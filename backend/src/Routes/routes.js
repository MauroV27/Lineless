import { Router } from 'express';

import { connectUsersRoutes } from './UserRoutes';
import { connectEventsRoutes } from './EventRoutes';
import { connectOrganizersRoutes } from './OrganizerRoutes';
import { connectSellersRoutes } from './SellerRoutes';

const router = Router();

connectUsersRoutes(router);
connectEventsRoutes(router);
connectOrganizersRoutes(router);
connectSellersRoutes(router);

export { router };