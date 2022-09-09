module.exports = {
    format_time: (date) => {
        //'toLocaleTimeString()' method to format the time with custom parameters
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    },
    format_summary: (content) => {
        if (content.length > 300) {
            return content.substring(0, 300) + "...";
        } else {
            return content;
        }
    },
    withAuth: (req, res, next) => {
      if (req.session.loggedIn) {
      next();
      } else {
      res.status(500).json({ message: 'YOU NEED TO BE LOGGED IN!' });
    }
  },
};
