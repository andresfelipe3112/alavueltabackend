'use strict';

/**
 *  front controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::front.front');
