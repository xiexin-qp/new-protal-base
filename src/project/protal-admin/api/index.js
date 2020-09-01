import homeApi from './home'
import userApi from './user'
import schoolApi from './school'
import subjectApi from './subject'
import canpointApi from './canpoint'
import calendarApi from './calendar'
import yearApi from './year'
import bureauApi from './bureau'
import appApi from './app'
import noticeApi from './notice'

const apiList = {
  ...homeApi,
  ...noticeApi,
  ...userApi,
  ...schoolApi,
  ...subjectApi,
  ...canpointApi,
  ...calendarApi,
  ...yearApi,
  ...bureauApi,
  ...appApi
}
export default apiList
