import issue1PageList from './issue-1/PageList'
import issue2PageList from './issue-2/PageList'
import issue3PageList from './issue-3/PageList'
import issue4PageList from './issue-4/PageList'
import issue5PageList from './issue-5/PageList'
import issue6PageList from './issue-6/PageList'
import issue7PageList from './issue-7/PageList'
import issue8PageList from './issue-8/PageList'
import issue9PageList from './issue-9/PageList'
import issue10PageList from './issue-10/PageList'

const issueList = {
  1: issue1PageList,
  2: issue2PageList,
  3: issue3PageList,
  4: issue4PageList,
  5: issue5PageList,
  6: issue6PageList,
  7: issue7PageList,
  8: issue8PageList,
  9: issue9PageList,
  10: issue10PageList
}

const getPageList = (issueId) => issueList[issueId]

export default getPageList
