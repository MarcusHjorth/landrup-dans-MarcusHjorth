module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Racing': ['Racing Sans One', 'cursive']
      },
      fontSize: {
        "18": "18px",
        "24": "24px",
        "36": "36px",
      },

      colors: {
        "Primary": "#5E2E53",
        "Secondary": "#EAEAEA",
        "Theme": "#E1A1E9",
        "Dark": "#000000",
        "Theme2": "#913693",
        "Title1": "#431567",
        "Title2": "#E856EB",
      },
    },
  },
  plugins: [],
}