/*

 * @FilePath: /vite-project/src/api/modules/role.ts
 * @Description: 角色相关接口
 *
 */
import request from '@/utils/request';

// 新增角色
export const addRole = async (params: Expand<API.AddRoleParams>) => request.post('role/addRole', params);

// 获取角色列表
export const getRoleList = async (params?: Expand<API.ListParams>) => request.get('role/getRoleList', { params });

// 获取用户对应角色的权限信息
export const getRolePermissions = async (params?: { id: number }) => request.get('role/getRolePermissions', { params });

// 编辑角色信息
export const editRoleInfo = async (params: Expand<API.EditRoleParams>) => request.post('role/editRoleInfo', params);
