import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import Routes from "../../client/routes/serverRoutes";
import store from "../../client/store";
import { renderFullPage } from "./renderFullPage";
import { Layout } from "../../client/components/Layout";
import apiService from "../../client/services/apiService";

export async function handleRender(req, res, next) {
  const sheet = new ServerStyleSheet();

  const { results } = await apiService.getCharactersByPage(1);

  const preloadedState = store.getState();

  const initializedState = {
    ...preloadedState,
    characters: {
      ...preloadedState.characters,
      characters: results
    }
  };

  try {
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <StyleSheetManager sheet={sheet.instance}>
            <Layout>{renderRoutes(Routes)}</Layout>
          </StyleSheetManager>
        </StaticRouter>
      </Provider>
    );
    const styleTags = sheet.getStyleTags();

    res.send(renderFullPage(html, styleTags, initializedState));
  } catch (err) {
    next(err);
  } finally {
    sheet.seal();
  }
}
