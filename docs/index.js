const basicInfo = require('./basicInfo');
const components = require('./components');
const projects = require('./projects');

module.exports = {
    ...basicInfo,
    ...components,
    ...projects
};