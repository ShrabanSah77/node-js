

const bcrypt = require('bcryptjs');
 
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw error;
    }
}
 
const checkHash = async (password, hash) => {
    try {
        const result = await bcrypt.compare(password, hash);
        return result;
    } catch (error) {
        throw error;
    }
}