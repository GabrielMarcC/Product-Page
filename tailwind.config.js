module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  plugins: [require("daisyui")],
  theme: {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      "very-dark-blue": "hsl(220, 13%, 13%)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      "black-75": "hsl(0, 0%, 0%)",
      "light-box": "rgba(0,0,0, .8)",
    },

    screens: {
      sm: "640px",
      md: "768px",
      custom: [
        {
          max: "770px",
        },
      ],
      lg: "1024px",
    },
  },
};
