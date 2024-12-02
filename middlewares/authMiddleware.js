import admin from "firebase-admin";

const verifyToken = async(req,res,next) => {
    const authHeader = req.headers.authorization
    
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split('Bearer ').join('') : null
    
    
    
    
    if (!token) return res.status(403).send("Token required")

    try {
        const decodeToken = await admin.auth().verifyIdToken(token)
        req.uid = decodeToken.uid;
        next()
    } catch (error) {
        console.error("Token verification feiled:",error);
        res.status(401).send('Invalid token')
        
    }
}

export default verifyToken