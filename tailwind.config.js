module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'joinus-pattern': "url('./src/assets/joinusBg.svg')",
      },
      colors: {
        primary: "#0076CE",
        falsycolor: "#FF6666",
        gray: "#616161",
        gray_two:"#f4f4f4",
        lightred:"#FF6666",
        row_color:'#EFD9F9',
        bgcolor_pink:"#EFD9F9",
        light_blue:"#DDF3FF",
        gray_3:"#C5C5C5",
        gray_two:"#999",
        card_gray:"#F4F4F4",
        input_gray:"#BFBFBF"
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Open_Sans: ['Open Sans', 'sans-serif'],
        Inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};