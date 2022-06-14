// @desc    Get Goals
// @route   Get /api/goals
// @access  Private 
const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Goals!" })
}

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private 
const setGoals = (req, res) => {
    res.status(200).json({ message: "Set Goals!" })
}
// @desc    update Goals
// @route   PUT /api/goals
// @access  Private 
const updateGoals = (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
}
// @desc    delete Goals
// @route   Delete /api/goals
// @access  Private 
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}