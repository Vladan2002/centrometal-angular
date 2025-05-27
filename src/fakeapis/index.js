const navbar = require('./db/navbar.json');
const accordion = require('./db/accordion.json');
const footer = require('./db/footer.json');
const slider = require('./db/slider.json');
const brands=require('./db/brands.json');
const sections=require('./db/sections.json');
const products=require('./db/products.json');
const pictures=require('./db/pictures.json');
const description=require('./db/description.json');

module.exports = () => ({
  navbar: navbar,
  accordion: accordion,
  footer: footer,
  slider:slider,
  brands:brands,
  sections:sections,
  products:products,
  pictures:pictures,
  description:description,
});
