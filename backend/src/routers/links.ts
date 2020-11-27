import {Router} from 'express';
import linksController from '../controller/links';

const router = Router();    

router.post('/links',linksController.postLink);

router.get('/links/:code',linksController.hitLink);

router.get('/links/:code/stats',linksController.getLink);

export default router;