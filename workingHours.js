function workingHours(req, res, next) {
  const date = new Date();
  const dayOfWeek = date.getDay(); // Sunday is 0, Monday is 1, etc.
  const hourOfDay = date.getHours();

  if (dayOfWeek > 0 && dayOfWeek < 6 && hourOfDay >= 9 && hourOfDay < 17) {
    next(); // allow access to the requested page
  } else {
    res
      .status(403)
      .send(
        "<h1>Access denied: Web application is only available during working hours (Monday to Friday, from 9 to 17)</h1>"
      );
  }
}

module.exports = workingHours;
