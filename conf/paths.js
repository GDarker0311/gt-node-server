/**
 * @since 2016-09-08 18:07
 * @author vivaxy
 */

const path = require('path');

const projectBase = path.join(__dirname, '..');
const log = path.join(projectBase, 'logs');

exports.projectBase = projectBase;
exports.log = log;
