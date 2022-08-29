module.exports = {
  
  
  theme: {
  },
  variants: {
    extend: {
      
    },
  },
  content: [
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js', 
    
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin'),
    
  ],
}
