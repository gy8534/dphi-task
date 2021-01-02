import { ADD_PAGE, DELETE_PAGE, EDIT_PAGE, FILTER_ACCORDING_TO_DATE, RESET_FILTER, SORT_ACCORDING_TO_DATE } from "./pageTypes";

// Add
export const addPage = (page) => {
    return {
        type: ADD_PAGE,
        payload: page
    }
}

export const deletePage = (id) => {
    return {
        type : DELETE_PAGE,
        payload: id
    }
}

export const editPage = (page) => {
    return {
        type:EDIT_PAGE,
        payload: page
    }
}


export const sortAccordingToDate = (sortType) => {
    console.log(sortType);
    return {
        type: SORT_ACCORDING_TO_DATE,
        sortType
    }
}

export const filterAccordingToData = (startDate, endDate) => {
    return {
        type: FILTER_ACCORDING_TO_DATE,
        startDate,
        endDate
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER
    }
}
