module.exports = {
    authenticator: (req, res, next) => {
        if (req.isAuthenticated()){
            return next()
        }
        req.flash('warning_msg', 'PLEASE LOG IN FIRST')
        res.redirect('/users/login')
    }
}