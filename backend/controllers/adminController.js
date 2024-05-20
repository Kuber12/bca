const loginAdminController = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, password } = req.body;
        let admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const token = jwt.sign(
            { userId: admin._id, username: admin.username },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );
        res.status(200).json({ success: true, token: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { loginAdminController };
