import { TODO_API } from '../apis';

export const getMemberAPI = () => {
  return TODO_API.get('/member/info', { headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}});
}
