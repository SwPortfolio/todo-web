import { TODO_API } from '../apis';

export const getProjectListAPI = () => {
  return TODO_API.get('/project/list', { headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}});
}
