/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./ordernow.html", "./productcards.html", "/productcaketoppers.html", "/productballoons.html", "/productbottles.html", "/productothers.html"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Roboto Slab', 'serif']
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#5C7F67",
            "secondary": "#ECF4E7",
            "accent": "#C18C3E",
            "neutral": "#5D5656",
            "base-100": "#E9E7E7",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
                    },
                  },
                ],
  },

}

