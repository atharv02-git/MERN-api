const express = require('express');
const router = express.Router();

const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// router.get('/', getGoals)
// router.post('/', setGoals)
// or
router.route('/').get(protect, getGoals).post(protect, setGoals);

// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals);

module.exports = router