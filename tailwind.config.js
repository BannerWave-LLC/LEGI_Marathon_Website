module.exports = {
  corePlugins: {
    container: true,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    screens: {
			'sm': '375px',
			'smd' : '576px',
			'md' : '768px',
			'lg' : '1024px',
			'xl' : '1200px',
			'2xl' : '1400px'
		},
    container: {
			center: true,
			padding: {
				DEFAULT: '21px',
				xl: '28px',
			},
			screens: {
				xl: '1440px'
			}
		},
    extend: {
      minHeight: {
        'screenh' : '100vh',
      },
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'primary': '#191A1A',
        'text': '#101E1A',
        'green': '#39B077',
        'green-2': '#DAEDE9',
        'green-3': '#D5F6E1',
        'green-4': '#79B397',
        'green-5': '#D6E9E4',
        'dark-green': '#1F3332',
        'dark-green-2': '#39725E',
        'gray': '#D9D9D9',
        'gray-2': '#D1D1D1',
        'gray-3': '#B0B0B0',
        'gray-4': '#E7E7E7',
        'gray-5': '#888888',
        'gray-6': '#6D6D6D',
        'gray-7': '#979797',
        'gray-8': '#F9F8F6',
        'blue': '#296782',
        'black': '#000000',
        },
      fontFamily: {
        'apparat' : ['apparat', 'serif'],
        'apparat-light' : ['apparat-light', 'serif'],
        'freight-disp-pro' : ['freight-display-pro', 'serif'],
      },
      lineHeight: {
        '1.046' : '1.046',
        '1.125' : '1.125',
        '1.175' : '1.175',
        '1.28' : '1.28',
        '1.39' : '1.39',
        '1.43' : '1.43',
        '1.64' : '1.64',
      },
      fontSize: {
        '28' : '28px',/* 28px */
        '32' : '32px',/* 32px */
        '44' : '44px',/* 44px */
        '64' : '64px',/* 64px */
        '64' : '4rem',/* 64px */
        '90' : '90px',/* 90px */
      },
      padding: {
        '5p': '5px',
        '15p': '15px',
        '11p': '11px',
        '15p': '15px',
        '17p': '17px',
        '18p': '18px',
        '25p': '25px',
        '26p': '26px',
        '28p': '28px',
        '30p': '30px',
        '34p': '34px',
        '46p': '46px',
        '50p': '50px',
        '52p': '52px',
        '53p': '53px',
        '60p': '60px',
        '90p': '90px',
        '100p': '100px',
        '120p': '120px',
        '204p': '204px',
      },
      margin: {
        '5p': '5px',
        '15p': '15px',
        '22p': '22px',
        '25p': '25px',
        '26p': '26px',
        '30p': '30px',
        '31p': '31px',
        '34p': '34px',
        '35p': '35px',
        '38p': '38px',
        '47p': '47px',
        '48p': '48px',
        '50p': '50px',
        '69p': '69px',
        '94p': '94px',
        '99p': '99px',
      },
      gap: {
        '15p': '15px',
      },
      borderWidth:{
        '1': '1px',/* 1px */
      },
      borderRadius: {
        '20': '20px',
      },
      letterSpacing: {
        '0.029': '0.029em',//2.61px;
        '0.02': '0.02em', //0.32px
        '0.32p': '0.32px', //0.32px
        '0.525p': '0.525px', //0.525px
        '0.6p': '0.6px', //0.6px
        '0.946p': '0.946px', //0.946px
        '1p': '1px', //1px
        '1.655p': '1.655px',//1.655px
        '2.607p': '2.607px'//2.607px
      },
      zIndex: {
        '1': '1',
      },
      boxShadow: {
        'shadow-1': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'shadow-button': '0px 0px 0px .2px #39B077',
        'shadow-bottom-green': '0px 2px 0px 0px #39B077',
      },
      aspectRatio: {
        '1/1': '1/1',
        'auto': 'auto',
      },
    },
    fontFamily: {
      sans: ['apparat', 'serif'],
      serif: ['freight-display-pro', 'serif'],
    },
  },
};
