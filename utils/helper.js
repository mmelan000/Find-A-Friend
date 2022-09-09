module.exports = {
<<<<<<< HEAD
    // the helper method 'format_time' will take in a timestamp and return a custom formatted string
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
    //cuts the length of blog content down for front page/index
    format_summary: (content) => {
        if (content.length > 300) {
            return content.substring(0, 300) + "...";
        } else {
            return content;
        }
    },
};
=======
  withAuth: (req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.status(500).json({ message: 'YOU NEED TO BE LOGGED IN!' });
    }
  },
};
>>>>>>> 6781a0642c404584eeb64569fccb9951e310c958
