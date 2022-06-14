const asyncHandler = require('express-async-handler')

// @desc    Get Goals
// @route   Get /api/goals
// @access  Private 
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get Goals!" })
})

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private 
const setGoals = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({ message: "Set Goals!" })
})

// @desc    update Goals
// @route   PUT /api/goals
// @access  Private 
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
})

// @desc    delete Goals
// @route   Delete /api/goals
// @access  Private 
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}