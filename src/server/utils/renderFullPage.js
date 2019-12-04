import { getManifest } from "./getManifest";

let files = false;
if (process.env.NODE_ENV !== "development") {
  files = getManifest();
}

export function renderFullPage(html, styleTags, preloadedState) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="descrition"
        content="With DubDubChat you can generate the craziest conversations with the phrases of Rick and Morty."
      />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <styles>${styleTags}</styles>
      <title>DubDubChat | Rick & Morty Chat Generator</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script type="text/javascript">

        ${
          files
            ? `if ("serviceWorker" in navigator) {
            window.addEventListener("load", function() {
              navigator.serviceWorker
                .register("/service-worker.js")
                .then(registration => {
                  console.log("SW registered: ", registration);
                })
                .catch(registrationError => {
                  console.log("SW registration failed: ", registrationError);
                });
            });
          }
        `
            : ""
        }
         
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          "\\u003c"
        )}
      </script>
      <script src="${
        files ? files["main.js"] : "assets/app.js"
      }" type="text/javascript"></script>
      <script src="${
        files ? files["vendors.js"] : "assets/vendors.app.js"
      }" type="text/javascript"></script>

    </body>
  </html>
  `;
}
