import {v1} from 'uuid'
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
      id: v1(),
      title: "Sixth Page",
      body: "this is the Sixth page",
      createdAt: new Date(),
      createdFor: new Date(2020, 9, 12),
    },
    {
      id: v1(),
      title: "Fifth Page",
      body: "this is the Fifth page",
      createdAt: new Date(),
      createdFor: new Date(2019, 8, 17),
    },
    {
      id: v1(),
      title: "Fourth Page",
      body: "this is the Fourth page",
      createdAt: new Date(),
      createdFor: new Date(2018, 11, 24),
    },
    {
      id: v1(),
      title: "Third Page",
      body: "this is the Third page",
      createdAt: new Date(),
      createdFor: new Date(2017, 11, 24),
    },
    {
      id: v1(),
      title: "Second Page",
      body: "this is the Second page",
      createdAt: new Date(),
      createdFor: new Date(2016, 11, 24),
    },
    {
      id: v1(),
      title: "First Page",
      body: "this is the first page",
      createdAt: new Date(),
      createdFor: new Date(2015, 11, 24),
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
    case EDIT_PAGE:{
      let pages = [...state.pages]
      for (let index in pages) {
        if (pages[index].id === action.payload.id ){
          pages[index] = action.payload
        } 
      }

      return {
        ...state,
        filterData: undefined,
        pages: pages
      }
    };
    case SORT_ACCORDING_TO_DATE: {
      let currPages = [...state.pages];
      if(state.filterData){
        currPages = [...state.filterData];
      }
      const { sortType } = action;

      if (sortType === "desc") {
        currPages = currPages.sort((b, a) => {
          return a.createdFor - b.createdFor;
        });
      } else {
        currPages = currPages.sort((a, b) => {
          return a.createdFor - b.createdFor;
        });
      }
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
        const currItemDate = item.createdFor;
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
