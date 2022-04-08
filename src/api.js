import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";

// Axios queries
export const getVoyagesByShip = async (id) => {
  return await axios
    .get(`${process.env.REACT_APP_HOST}/items/reizen`, {
      params: {
        filter: {
          schip: {
            _eq: id,
          },
        },
      },
    })
    .then(({ data }) => data);
};

export const getVoyagesByPerson = async (id) => {
  return await axios
    .get(`${process.env.REACT_APP_HOST}/items/reizen`, {
      params: {
        filter: {
          bemanning: {
            id: {
              _eq: id,
            },
          },
        },
      },
    })
    .then(({ data }) => data);
};

export const getVoyageTypesByIDs = async (ids) => {
  return await axios
    .get(`${process.env.REACT_APP_HOST}/items/reis_types`, {
      params: {
        filter: {
          id: {
            _in: ids,
          },
        },
      },
    })
    .then(({ data }) => data);
};

export const getBlogsByLang = async (lang) => {
  const locale = lang === "nl" ? "nl-NL" : "en-EN";

  return await axios
    .get(
      `${process.env.REACT_APP_HOST}/items/artikelen?fields[]=id&fields[]=afbeelding&fields[]=date_created&fields[]=status&fields[]=translations.*&deep[translations][_filter][languages_id][_eq]=${locale}`
    )
    .then(({ data }) => data);
};

export const getBlogsBySlug = async (slug) => {
  return await axios
    .get(
      `${process.env.REACT_APP_HOST}/items/artikelen?fields[]=id&fields[]=status&fields[]=afbeelding&fields[]=date_created&fields[]=status&fields[]=translations.*&deep[translations][_filter][slug][_eq]=${slug}`
    )
    .then(({ data }) => data);
};

// GQL queries

export const main = gql`
  query {
    schip_types {
      id
      naam
    }
    reis_types {
      id
      naam
    }
    reizen {
      id
      schip {
        id
        naam
      }
      datum_aanvang_reis
      plaats_aanvang_reis {
        id
        plaats
        marker
      }
      plaats_einde_reis {
        id
        plaats
      }
      bestemmingen {
        bestemming {
          id
          plaats
        }
      }
    }
  }
`;

export const overviewShips = gql`
  query {
    schepen {
      naam
      aantal_reizen_mcc
      id
      scheepstype {
        id
        naam
      }
    }
  }
`;

export const journeyDetail = (id) => gql`
  query {
    reizen_by_id(id: "${id}") {
      id
      type {
        naam
      }
      schip {
        naam
        aantal_reizen_mcc
      }
      bemanning {
        rol {
          id
          rol
        }
        personen_id {
          naam
        }
      }
    }
    bestemmingen {
      bestemming {
        plaats
      }
    }
  }
`;

export function shipByID(id) {
  /* TODO:
   Add: 
   - Archief link
   - Reizen
   - Archieven
   - Blogs
  */

  return gql`
  query {
    schepen_by_id(id:"${id}"){
      id
      naam
      lengte
      breedte
      diepgang
      hoogte_tussendek
      inhoud
      lasten
      aantal_reizen_geannuleerd
      aantal_reizen_mcc
      aantal_reizen_verhuurd
      plaats_van_bouw{
       plaats
      }
      herkomst_schip
      jaar_voltooiing_bouw
      scheepstimmerman
      scheepstype{
       naam
      }
    } 
   }
  `;
}

/* TODO:
   Add: 
   - Aantal schepen van persoon
   - Type persoon
   - Archieven
   - Blogs
  */
export const overviewPeople = gql`
  query {
    personen {
      naam
      id
    }
  }
`;

export function personByID(id) {
  /* TODO:
   Add: 
   - Aantal schepen van persoon
   - Type persoon
   - Archieven
   - Blogs
   - Reizen
  */

  return gql`
  query {
    personen_by_id(id:"${id}"){
      naam
      id
    } 
   }
  `;
}

// bootstrap

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_HOST}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const GraphqlProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default GraphqlProvider;
