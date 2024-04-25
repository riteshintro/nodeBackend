
exports.getUserById = (req, res, next) => {
    const userId = req.params.id;
    const user = { id: userId, name: 'John Doe' };
    res.json(user);
};
