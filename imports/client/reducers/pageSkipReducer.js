const PER_PAGE_SKIP = 10

function pageSkip(state = 0, action = {}){
  switch(action.type) {
    case 'CHANGE_PAGE':
      return action.currentPageNumber * PER_PAGE_SKIP;
    default:
      return state;
  }
}

export default pageSkip;