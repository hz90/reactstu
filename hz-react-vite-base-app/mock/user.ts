import mockjs from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
const ajaxHeadersTokenKey = 'x-token';
export default [
  {
    url: '/api/user/login',
    method: 'POST',
    response: ({ body }) => {
      const { password, username } = body;
      const datatmp = {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEsImV4cCI6MTY3NzQ3ODgzNSwiaWF0IjoxNjc3MzkyNDM1fQ.yplOZzdT6ymAEMfv1vZf6ggKgRPMlP9mA9YZvcocbRY',
        id: 1,
        username: 'admin',
        signature: '我是zyh',
        avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png'
      };
      const send = { code: 0, data: datatmp, msg: '' };
      // if (username === 'admin' && password === '123456') {
      //     send['data'] = {
      //       token: 'admin',
      //     };
      // } else if (username === 'user' && password === '123456') {
      //     send['data'] = {
      //       token: 'user',
      //     };
      // } else if (username === 'test' && password === '123456') {
      //     send['data'] = {
      //       token: 'test',
      //     };
      // } else {
      send['code'] = 200;
      send['msg'] = '登录成功';
      // }
      return send;
    }
  },
  {
    url: '/api/user/register',
    method: 'POST',
    response: ({ body }) => {
      return {
        code: 0,
        data: '',
        msg: ''
      };
    }
  },
  {
    url: '/api/user/message',
    method: 'GET',
    response: ({ body }) => {
      return {
        code: 0,
        data: mockjs.mock('@integer(0,99)')
      };
    }
  },
  {
    url: '/api/user/getUserInfo',
    method: 'GET',
    response: ({ body }) => {
      return {
        code: 200,
        data: {
          id: 1,
          username: 'admin',
          signature: '我是zyh',
          avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png'
        },
        msg: '请求成功'
      };
    }
  },
  {
    url: '/api/role/getRoleList',
    method: 'GET',
    response: ({ body }) => {
      return {
        code: 200,
        data: {
          list: [
            {
              id: 1,
              roleName: '超级管理员',
              description: '超级管理员',
              permissions:
                '["/home/index","/proTable","/proTable/useHooks1","/proTable/useHooks2","/authorityManagement","/authorityManagement/user","/authorityManagement/position"]',
              created_at: '1676709098078',
              updated_at: '1676709098078'
            },
            {
              id: 5,
              roleName: '测试',
              description: '测试',
              permissions: '["/home/index"]',
              created_at: '1676704750019',
              updated_at: '1676901288064'
            },
            {
              id: 8,
              roleName: '测试2',
              description: '测试2',
              permissions: '["/proTable","/proTable/useHooks1","/proTable/useHooks2"]',
              created_at: '1676818724794',
              updated_at: '1676901294015'
            }
          ],
          current: 1,
          pageSize: 10,
          total: 3
        },
        msg: '请求成功'
      };
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    // statusCode: 401,
    response: ({ headers, body }) => {
      if (headers[ajaxHeadersTokenKey] === 'admin') {
        return {
          code: 0,
          data: {
            id: 1,
            name: 'Admins',
            avatar: '',
            roles: ['admin']
          }
        };
      } else if (headers[ajaxHeadersTokenKey] === 'user') {
        return {
          code: 0,
          data: {
            id: 2,
            name: 'Users',
            avatar: '',
            roles: ['user']
          }
        };
      } else if (headers[ajaxHeadersTokenKey] === 'test') {
        return {
          code: 0,
          data: {
            id: 3,
            name: 'Tests',
            avatar: '',
            roles: ['test']
          }
        };
      } else {
        return {
          code: 10002,
          data: {},
          msg: '未登录'
        };
      }
    }
  },
  {
    url: '/api/role/getRolePermissions',
    method: 'get',
    // statusCode: 401,
    response: ({ headers, body }) => {
      return {
        code: 200,
        msg: '请求成功',
        data: {
          permissions: [
            '/home/index',
            '/proTable',
            '/proTable/useHooks1',
            '/proTable/useHooks2',
            '/authorityManagement',
            '/authorityManagement/user',
            '/authorityManagement/position'
          ]
        }
      };
    }
  },
  {
    url: '/api/user/getUserList',
    method: 'get',
    // statusCode: 401,
    response: ({ headers, body }) => {
      return {
        code: 200,
        msg: '请求成功',
        data: {
          list: [
            {
              id: 1,
              username: 'admin',
              password: '123456',
              signature: '我是zyh',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1670901525863'
            },
            {
              id: 2,
              username: 'test',
              password: '123456',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1670910760508'
            },
            {
              id: 42,
              username: 'test2',
              password: '123456',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676709955849'
            },
            {
              id: 43,
              username: '',
              password: '123456',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676719753872'
            },
            {
              id: 44,
              username: 'test3',
              password: '111111',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676771449813'
            },
            {
              id: 45,
              username: 'test4',
              password: '111111',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676771727972'
            },
            {
              id: 46,
              username: 'test5',
              password: '123456',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676811377088'
            },
            {
              id: 47,
              username: 'test6',
              password: '123456',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676811482877'
            },
            {
              id: 48,
              username: 'test7',
              password: '123456',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676811673956'
            },
            {
              id: 49,
              username: 'test8',
              password: '123456',
              signature: '这个人很懒，什么都没有留下',
              avatar: 'http://file.dev.uplasm.com/file/2022/12/13/1bb87d41d15fe27b500a4bfcde01bb0e.png',
              ctime: '1676811782514'
            }
          ],
          current: 1,
          pageSize: 10,
          total: 20
        }
      };
    }
  }
] as MockMethod[];
