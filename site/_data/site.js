module.exports = {
  name: "Portfolio of Allison Kufta",
  shortDesc:
    "Portfolio.",
  url: "",
  authorEmail: "allisonkufta@gmail.com",
   
  authorName: "Allison",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "#55a4ed",
    },
    secondary: {
      background: "#edeef5",
      text: "white",
      highlight: "#5567ed",
    },
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
