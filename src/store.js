import reisTypeColor from "./utils/reisColorMapper";

export const initialStore = {
  data: null,
  reizen: [],
  reis_types: [],
  schip_types: [],
  schip_type: null,
  filterPanel: false,
  ships: [],
  people: [],
  blogs: [],
  blogActiveFilter: 0,
  blogFilterList: [
    {
      id: 0,
      title: "Alle",
    },
    {
      id: 1,
      title: "Reizen",
    },
    {
      id: 2,
      title: "Schepen",
    },
    {
      id: 3,
      title: "Archief",
    },
    {
      id: 4,
      title: "Handelsgoederen",
    },
  ],
  error: false,
  mapDetailPanel: {
    open: false,
    content: null,
  },
  time: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    /*
     * Initial data load
     */
    case "SET_INITIAL_DATA":
      return { ...state, data: action.payload };
    /*
     * Set reizen
     */
    case "SET_REIZEN":
      return { ...state, reizen: action.payload };
    /*
     * Set schip types
     */
    case "SET_SCHIP_TYPES":
      return { ...state, schip_types: action.payload };
    /*
     * Set schip type filter
     */
    case "SET_SCHIP_TYPE":
      return { ...state, schip_type: action.payload };
    /*
     * Set reis types
     */
    case "SET_REIS_TYPES":
      return {
        ...state,
        reis_types: action.payload.map((reis) => {
          return { ...reis, color: reisTypeColor(reis.id) };
        }),
      };
    /*
     * Set initial ship list
     */
    case "SET_SHIP_LIST":
      return { ...state, ships: action.payload };
    /*
     * Set initial person list
     */
    case "SET_PEOPLE_LIST":
      return { ...state, people: action.payload };
    /*
     * Set initial blog list
     */
    case "SET_BLOG_LIST":
      return { ...state, blogs: action.payload };
    /*
     * Set initial blog filter
     */
    case "SET_BLOG_FILTER":
      return { ...state, blogActiveFilter: action.payload };
    /*
     * Set initial blog filter list
     */
    case "SET_BLOG_FILTER_LIST":
      return { ...state, blogFilterList: action.payload };
    /*
     * Open or close the filter panel
     */
    case "OPEN_FILTER_PANEL":
      return { ...state, filterPanel: true };
    case "CLOSE_FILTER_PANEL":
      return { ...state, filterPanel: false };
    /*
     * Open or close the map detail panel
     */
    case "OPEN_MAP_DETAIL_PANEL":
      return {
        ...state,
        mapDetailPanel: { open: true, content: action.payload },
      };
    case "CLOSE_MAP_DETAIL_PANEL":
      return {
        ...state,
        mapDetailPanel: { ...state.mapDetailPanel, open: false },
      };
    case "UPDATE_TIME":
      return {
        ...state,
        time: action.payload,
      };
    /*
     * Initial error handling
     */
    case "SET_ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};
