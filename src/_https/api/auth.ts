import { TODO_API } from '../apis';

/**
 * 회원가입
 * @param body
 */
export const signupAPI = (body: any) => {
    return TODO_API.post('/member/register', body);
}

export const signinAPI = (body: any) => {
    return TODO_API.post('/member/login', body);
}
