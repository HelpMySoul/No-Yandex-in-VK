(function () {
  const PROMO_ID = "l_invite_promo";

  function removeInvitePromo() {
    document.getElementById(PROMO_ID)?.remove();
  }

  function removeFromNode(node) {
    if (!(node instanceof Element)) return;
    if (node.id === PROMO_ID) {
      node.remove();
      return;
    }
    node.querySelector(`#${PROMO_ID}`)?.remove();
  }

  function startObserver() {
    removeInvitePromo();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          removeFromNode(node);
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  function whenReady(fn) {
    if (document.documentElement) {
      fn();
      return;
    }
    requestAnimationFrame(() => whenReady(fn));
  }

  whenReady(startObserver);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", removeInvitePromo, {
      once: true,
    });
  } else {
    removeInvitePromo();
  }
})();
