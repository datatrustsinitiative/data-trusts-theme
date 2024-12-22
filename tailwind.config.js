/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./_includes/**/*.{html,md}",
    "./_layouts/**/*.{html,md}",
    "./_posts/**/*.{html,md}",
      "./*.{html,md}",
    // Content repo files
    "../datatrustsinitiative.github.io/_posts/**/*.md",
    "../datatrustsinitiative.github.io/_events/**/*.md",
    "../datatrustsinitiative.github.io/_people/**/*.md",
    "../datatrustsinitiative.github.io/_publications/**/*.md",
    "../datatrustsinitiative.github.io/_research/**/*.md",
    "../datatrustsinitiative.github.io/_images/**/*.md",
    "../datatrustsinitiative.github.io/_projects/**/*.md",
    "../datatrustsinitiative.github.io/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#101827',
          blue: '#031927',
          'secondary-blue': '#133348',
          'tertiary-blue': '#081D2B',
          'dark-blue': '#556787',
          blue: '#1E537B',
        },
        orange: '#DB3900',
        cream: {
          DEFAULT: '#D0D2C6',
          light: '#F4F5F0',
          dark: '#CED0C8'
        },
        grey: {
          charcoal: '#2A2A2A',
          regular: '#CCCCCC',
          light: '#F5F5F5',
          medium: '#D8D8D8',
          dark: '#979797',
          darkest: '#7A7A7A'
        },
        dark: {
          DEFAULT: '#121315',
          darker: '#121315',
          darkest: '#000000'
        },
        light: {
          DEFAULT: '#eaeaea',
          lighter: '#f2f2f2',
          lightest: '#ffffff'
        }
      },
      fontFamily: {
        sans: [
          '"Lato"',
          'HelveticaNeue-Light',
          'Helvetica Neue Light',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Lucida Grande',
          'sans-serif'
        ],
        'sans-alt': [
          '"Space Grotesk"',
          'HelveticaNeue-Light',
          'Helvetica Neue Light', 
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Lucida Grande',
          'sans-serif'
        ],
        header: [
          '"DM Sans"',
          'HelveticaNeue-Light',
          'Helvetica Neue Light',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Lucida Grande',
          'sans-serif'
        ],
        'header-alt': [
          '"Space Mono"',
          'HelveticaNeue-Light',
          'Helvetica Neue Light',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Lucida Grande',
          'sans-serif'
        ]
      },
      fontSize: {
        'base': '1.6rem',
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'lg': '2.0rem',
        'xl': '2.2rem',
        '2xl': '2.4rem',
        '3xl': '2.8rem',
        '4xl': '3.2rem',
        '5xl': '3.8rem',
        '6xl': '4.2rem',
        '7xl': '4.8rem'
      },
      spacing: {
        '1': '0.5rem',
        '2': '1rem',
        '3': '1.5rem',
        '4': '2rem',
        '5': '2.5rem',
        '6': '3rem',
        '8': '4rem',
        '10': '5rem',
        '12': '6rem',
        '16': '8rem',
        '20': '10rem',
        '24': '12rem',
        '32': '16rem',
        '40': '20rem',
      },
      maxWidth: {
        'container': '1400px',
        'content': '920px'
      },
      screens: {
        'mobile': {'max': '640px'},
        'tablet': '768px',
        'phablet': '960px',
        'desktop': '1200px',
        'desktop-xl': '1600px'
      },
      borderRadius: {
        DEFAULT: '4px',
        'full': '1000px'
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      },
      lineHeight: {
        'tight': 1.2,
        'base': 1.5,
        'relaxed': 1.6,
        'loose': 2
      },
      height: {
        'header': '54px',
        'hero-mobile': 'calc(75vh - 54px)',
        'hero-tablet': '580px',
        'hero-desktop': '800px'
      }
    }
  },
    plugins: [require('@tailwindcss/typography')],
}
