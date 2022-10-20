"use strict";

const { Expo } = require("expo-server-sdk");

/**
 *  notification controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::notification.notification",
  ({ strapi }) => ({
    async find(ctx) {
      const response = await super.find(ctx);
      return response;
    },

    async update(ctx) {
      const response = await super.update(ctx);
      return response;
    },

    async findOne(ctx) {
      const response = await super.findOne(ctx);
      return response;
    },

    async create(ctx) {
      const response = await super.create(ctx);
      return response;
    },

    async activeSend(ctx) {
      const body = ctx?.request?.body || {};

      return { data: "done" };
    },
  })
);
