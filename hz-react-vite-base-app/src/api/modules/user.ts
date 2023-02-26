/*

 * @FilePath: /vite-project/src/api/modules/user.ts
 * @Description: login api
 *
 */
import request from '@/utils/request';

// 登录
export const login = async (params: Expand<API.LoginParams>) =>
  request.post<any, ExpandRecursively<API.LoginData>>('/user/login', params);

// 获取用户信息
export const getUserInfo = async () => request.get('/user/getUserInfo');

// 获取用户列表
export const getUserList = async (params: Expand<API.ListParams>) =>
  request.get('/user/getUserList', {
    params
  });

// 新增用户
export const addUser = async (params: Expand<API.AddUserParams>) => request.post('/user/register', params);

// 根据用户id查询当前用户绑定的角色
export const getRoleInfoByUserId = async (params: Expand<API.GetRoleByUserIdParams>) =>
  request.get('/user/getRoleInfoByUserId', {
    params
  });

// 编辑用户信息
export const editUserInfo = async (params: Expand<API.EditUserInfoParams>) => request.post('/user/editUserInfo', params);
