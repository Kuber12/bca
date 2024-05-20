const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const loginController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            const token = jwt.sign(
                { userId: user._id, email: user.email },
                process.env.SECRET_KEY,
                { expiresIn: '1h' }
            );
            res.status(200).json({ success: true, token: token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                return res.status(400).json({ error: 'Username, email and password are required' });
            }
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ error: 'Email already exists' });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user = new User({
                username,
                email,
                password: hashedPassword
            });
            await user.save();
            res.status(201).json({ success: true, message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = {
    login: loginController.login,
    register: loginController.register
    // verify: loginController.verify
}

