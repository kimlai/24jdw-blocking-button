import { expensiveComputation } from "./utils.js";

const sendAnalytics = eventName => {
  for (let i = 0; i < 40; i++) {
    if (checkConsentCookie()) {
      // send analytics
    }
  }
};

const sendAnalyticsInBatches = eventName => {
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      if (checkConsentCookie()) {
        // send analytics
      }
    });
  }
};

const sendAnalyticsInDistributedBatches = eventName => {
  doSendDistributed(70);
};

const doSendDistributed = i => {
  if (i === 0) {
    return;
  }

  if (checkConsentCookie()) {
    // send analytics
  }
  setTimeout(() => {
    doSendDistributed(i - 1);
  });
};

const sendAnalyticsWithRequestIdleCallback = eventName => {
  let i = 0;
  const callback = deadline => {
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && i < 40) {
      if (checkConsentCookie()) {
        // send analytics
      }
      i++;
    }
    if (i < 40) {
      requestIdleCallback(callback);
    }
  };
  requestIdleCallback(callback, { timeout: 2000 });
};

const checkConsentCookie = () => {
  expensiveComputation(); // remplace l'implémentation originale pour simplifier
};

export {
  sendAnalytics,
  sendAnalyticsInBatches,
  sendAnalyticsInDistributedBatches,
  sendAnalyticsWithRequestIdleCallback
};
