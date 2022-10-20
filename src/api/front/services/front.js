'use strict';

/**
 * front service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::front.front');
