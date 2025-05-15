const navbar = require('./db/navbar.json');
const accordion = require('./db/accordion.json');
const brands = require('./db/brands.json');
const footer = require('./db/footer.json');

module.exports = () => ({
  navbar: navbar,
  accordion: accordion,
  brands: brands,
  footer: footer
});
