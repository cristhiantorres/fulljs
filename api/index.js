import express from 'express';

const router = express.Router();

router.get('/contests', (req, res) => {
  res.send({ contests: []});
});

export default router;
