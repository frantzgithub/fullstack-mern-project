
const isBodyValid = (req, res, next) => {
    if(!req.body.name && !req.body.email && !req.body.phone) {
        return res.status(400).json({error: "all fill required"})
    }

    if(!req.body.name) {
        return res.status(400).json({error: "missing name"})
    }
    if(!req.body.email) {
        return res.status(400).json({error: "missing email"})
    }
    if(!req.body.phone) {
        return res.status(400).json({error: "missing phone"})
    }
    next();
}
module.exports = {isBodyValid}