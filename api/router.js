import { Router } from 'express';
import entityController from './controllers/entityController';

const router = new Router();

router.get('/entities', entityController.findAll);
router.get('/entities/:id', entityController.findById);
router.post('/entities', entityController.create);
router.put('/entities/:id', entityController.update);
router.delete('/entities/:id', entityController.delete);

router.use((req, res, next) => {
  res.status(404).json({
    message: 'Nothing to do here.'
  });
});

module.exports = router;
