import { TODO_API } from '../apis';


export const loginCheckAPI = () => {
    return TODO_API.get('/member', { headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}});
}

/**
 * 회원가입
 * @param body
 */
export const signupAPI = (body: any) => {
    return TODO_API.post('/member/register', body);
}
/**
 * 로그인
 * @param body
 */
export const signinAPI = (body: any) => {
    return TODO_API.post('/member/login', body);
}
