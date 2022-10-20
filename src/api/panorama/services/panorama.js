'use strict';

/**
 * panorama service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::panorama.panorama');
