module.exports = {
  routes: [
    {
      method: "POST",
      path: "/notifications/activeSend",
      handler: "api::notification.notification.activeSend",
    },
  ],
};
