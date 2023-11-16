const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/Thoughts/:ThoughtId/reactions/:reaction_id
router.route('/:thoughtId/reactions/:reaction_id').delete(removeThoughtReaction);

module.exports = router;
