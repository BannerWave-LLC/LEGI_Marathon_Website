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
        'dark-green-3': '#262B2A',
        'gray': '#D9D9D9',
        'gray-2': '#D1D1D1',
        'gray-3': '#B0B0B0',
        'gray-4': '#E7E7E7',
        'gray-5': '#888888',
        'gray-6': '#6D6D6D',
        'gray-7': '#979797',
        'gray-8': '#F9F8F6',
        'gray-9': '#DDDDDD',
        'gray-10-opacity-50': 'rgba(102, 100, 100, 0.50)',
        'blue': '#296782',
        'black': '#000000',
        'dark-charcoal': '#333333',
        'yellow': '#EAB44A',
        'hero-gradient-to-bottom': 'linear-gradient(to bottom, rgba(31,51,50,0.95) 0%,rgba(38,43,42,1) 60%,rgba(38,43,42,0) 100%)'
        },
      fontFamily: {
        'apparat' : ['apparat', 'serif'],
        'apparat-light' : ['apparat-light', 'serif'],
        'freight-disp-pro' : ['freight-display-pro', 'serif'],
      },
      lineHeight: {
        '1.046' : '1.046',
        '1.06' : '1.06',
        '1.125' : '1.125',
        '1.175' : '1.175',
        '1.28' : '1.28',
        '1.39' : '1.39',
        '1.43' : '1.43',
        '1.56' : '1.56',
        '1.64' : '1.64',
      },
      fontSize: {
        '19' : '19px',/* 19px */
        '28' : '28px',/* 28px */
        '32' : '32px',/* 32px */
        '36' : '36px',/* 36px */
        '44' : '44px',/* 44px */
        '50' : '50px',/* 50px */
        '64' : '64px',/* 64px */
        '64' : '4rem',/* 64px */
        '90' : '90px',/* 90px */
        '194' : '194px',/* 194px */
      },
      padding: {
        '3p': '3px',
        '5p': '5px',
        '7p': '7px',
        '9p': '9px',
        '11p': '11px',
        '15p': '15px',
        '17p': '17px',
        '18p': '18px',
        '22p': '22px',
        '25p': '25px',
        '26p': '26px',
        '28p': '28px',
        '29p': '29px',
        '30p': '30px',
        '31p': '31px',
        '34p': '34px',
        '38p': '38px',
        '46p': '46px',
        '49p': '49px',
        '50p': '50px',
        '52p': '52px',
        '53p': '53px',
        '54p': '54px',
        '58p': '58px',
        '59p': '59px',
        '60p': '60px',
        '62p': '62px',
        '66p': '66px',
        '67p': '67px',
        '69p': '69px',
        '70p': '70px',
        '72p': '72px',
        '73p': '73px',
        '76p': '76px',
        '77p': '77px',
        '80p': '80px',
        '82p': '82px',
        '88p': '88px',
        '90p': '90px',
        '92p': '92px',
        '98p': '98px',
        '100p': '100px',
        '120p': '120px',
        '204p': '204px',
      },
      margin: {
        '5p': '5px',
        '9p': '9px',
        '11p': '11px',
        '15p': '15px',
        '18p': '18px',
        '22p': '22px',
        '25p': '25px',
        '26p': '26px',
        '29p': '29px',
        '30p': '30px',
        '31p': '31px',
        '34p': '34px',
        '35p': '35px',
        '38p': '38px',
        '42p': '42px',
        '47p': '47px',
        '48p': '48px',
        '50p': '50px',
        '51p': '51px',
        '53p': '53px',
        '54p': '54px',
        '60p': '60px',
        '69p': '69px',
        '74p': '74px',
        '94p': '94px',
        '99p': '99px',
        '201p': '201px',
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
        '0.579p': '0.579px', //0.579px
        '0.6p': '0.6px', //0.6px
        '0.946p': '0.946px', //0.946px
        '0.95p': '0.95px', //0.946px
        '1p': '1px', //1px
        '1.018p': '1.018px', //1.018px
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
