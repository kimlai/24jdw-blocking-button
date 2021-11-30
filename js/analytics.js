import { expensiveComputation } from "./utils.js";

const sendAnalytics = eventName => {
  for (let i = 0; i < 50; i++) {
    if (checkConsentCookie()) {
      // send analytics
    }
  }
};

const sendAnalyticsInBatches = eventName => {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      if (checkConsentCookie()) {
        // send analytics
      }
    });
  }
};

const sendAnalyticsWithRequestIdleCallback = eventName => {
  let i = 0;
  const callback = deadline => {
    while ((deadline.timeRemaining() > 20 || deadline.didTimeout) && i < 50) {
      if (checkConsentCookie()) {
        // send analytics
      }
      i++;
    }
    if (i < 50) {
      requestIdleCallback(callback);
    }
  };
  requestIdleCallback(callback, { timeout: 2000 });
};

const checkConsentCookie = () => {
  expensiveComputation(2); // remplace l'implémentation originale pour simplifier
};

export {
  sendAnalytics,
  sendAnalyticsInBatches,
  sendAnalyticsWithRequestIdleCallback
};
