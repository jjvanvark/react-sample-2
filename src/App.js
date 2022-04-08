import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Ships from "./pages/Ships";
import Explain from "./pages/Explain";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import People from "./pages/People";
import Map from "./pages/Map";
import Information from "./pages/Information";
import Nav from "./components/MainNavigation";
import Error from "./components/Error";
import GraphqlProvider, {
  main,
  overviewShips,
  overviewPeople,
  getBlogsByLang,
} from "./api";
import { useQuery } from "@apollo/client";
import ReducerProvider, { useDispatch } from "./hooks/useReducer";
import { useTranslation } from "react-i18next";

import "leaflet/dist/leaflet.css";

const Bootstrap = () => {
  const { i18n } = useTranslation();
  const mainQuery = useQuery(main);
  const shipQuery = useQuery(overviewShips);
  const peopleQuery = useQuery(overviewPeople);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mainQuery.data !== undefined || mainQuery.error !== undefined) {
      if (mainQuery.error) {
        dispatch({ type: "SET_ERROR" });
      } else {
        dispatch({
          type: "SET_REIS_TYPES",
          payload: mainQuery.data.reis_types,
        });
      }
    }
  }, [mainQuery.data, mainQuery.error, dispatch]);

  useEffect(() => {
    if (shipQuery.data !== undefined || shipQuery.error !== undefined) {
      if (shipQuery.error) {
        dispatch({ type: "SET_ERROR" });
      } else {
        dispatch({ type: "SET_SHIP_LIST", payload: shipQuery.data.schepen });
      }
    }
  }, [shipQuery.data, shipQuery.error, dispatch]);

  useEffect(() => {
    if (peopleQuery.data !== undefined || peopleQuery.error !== undefined) {
      if (peopleQuery.error) {
        dispatch({ type: "SET_ERROR" });
      } else {
        dispatch({
          type: "SET_PEOPLE_LIST",
          payload: peopleQuery.data.personen,
        });
      }
    }
  }, [peopleQuery.data, peopleQuery.error, dispatch]);

  useEffect(() => {
    if (i18n.language !== undefined) {
      getBlogsByLang(i18n.language).then((data) => {
        if (data.data !== undefined || data.error !== undefined) {
          if (data.error) {
            dispatch({ type: "SET_ERROR" });
          } else {
            dispatch({
              type: "SET_BLOG_LIST",
              payload: data.data,
            });
          }
        }
      });
    }
  }, [i18n.language]);

  return null;
};

function App() {
  return (
    <Suspense fallback="">
      <ReducerProvider>
        <GraphqlProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Bootstrap />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />}>
                  <Route path=":voyageId" element={<Map />} />
                </Route>
                <Route path="/ships" element={<Ships />}>
                  <Route path=":shipId" element={<Ships />} />
                </Route>
                <Route path="/people" element={<People />}>
                  <Route path=":peopleId" element={<People />} />
                </Route>
                <Route path="/information" element={<Information />} />
                <Route path="/explain" element={<Explain />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
              </Routes>
              <Nav />
              <Error />
            </ThemeProvider>
          </BrowserRouter>
        </GraphqlProvider>
      </ReducerProvider>
    </Suspense>
  );
}

export default App;
