import {
  ADD_PAGE,
  DELETE_PAGE,
  EDIT_PAGE,
  SORT_ACCORDING_TO_DATE,
  FILTER_ACCORDING_TO_DATE,
  RESET_FILTER
} from "./pageTypes";

const initialState = {
  pages: [
    {
      id: "efgbtdfhghn",
      title: "Third Page",
      body: "this is the Third page",
      createdAt: new Date(2020, 9, 12),
    },
    {
      id: "dfgrdgewfrerfe",
      title: "Second Page",
      body: "this is the Second page",
      createdAt: new Date(2019, 8, 17),
    },
    {
      id: "ewdfeswdgfrdfgdr",
      title: "First Page",
      body: "this is the first page",
      createdAt: new Date(2018, 11, 24),
    },
  ],
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add
    case ADD_PAGE:
      return {
        ...state,
        filterData: undefined,
        pages: [action.payload,...state.pages],
      };
    case DELETE_PAGE:
      return {
        ...state,
        filterData: state?.filterData?.filter((page) => page.id !== action.payload),
        pages: state.pages.filter((page) => page.id !== action.payload),
      };
    case EDIT_PAGE:
      return {
        ...state,
        filterData: undefined,
        pages: action.payload,
      };
    case SORT_ACCORDING_TO_DATE: {
      let currPages = [...state.pages];
      if(state.filterData){
        currPages = [...state.filterData];
      }
      const { sortType } = action;

      if (sortType === "desc") {
        currPages = currPages.sort((b, a) => {
          return a.createdAt - b.createdAt;
        });
      } else {
        currPages = currPages.sort((a, b) => {
          return a.createdAt - b.createdAt;
        });
      }
      console.log("Pages", currPages, sortType);
      if(state.filterData){
        return {
          ...state,
          filterData: currPages,
        }
      }
      return {
        ...state,
        filterData: undefined,
        pages: currPages,
      };
    }
    case FILTER_ACCORDING_TO_DATE: {
      const { pages } = state;
      const { startDate, endDate } = action;
      const filterData = pages.filter((item) => {
        const currItemDate = item.createdAt;
        console.log(startDate, currItemDate, endDate);
        return currItemDate >= startDate && currItemDate <= endDate;
      });
      return {
        ...state,
        filterData,
      };
    }
    case RESET_FILTER: return {
      ...state,
      filterData: undefined,
    }
    default:
      return state;
  }
};

export default pageReducer;
