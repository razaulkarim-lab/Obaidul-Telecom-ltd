// Example Middleware to check admin role
function isAdmin(req, res, next) {
  // ধরে নিচ্ছি req.user.jwt token থেকে user data এসেছে
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
}
