// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/**
 * 对应后端的接口
 * 后端请求地址配置
 */
/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 注销登录 POST /api/user/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 POST /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.RegisterParams>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索用户 /api/user/search*/
export async function searchUsers(options?: { [key: string]: any }) {
  return request<API.CurrentUser[]>('/api/user/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 注册接口 POST /api/user/create */
export async function create(body: API.CreateParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<Boolean>>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户 Post /api/user/update/my */
export async function userModify(body: API.CurrentUser, options?: { [key: string]: any }) {
  console.log(body);
  return request<API.BaseResponse<boolean>>('/api/user/update/my', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 修改用户 POST /api/user/update/my */
export async function updateUserInfoByAdmin(
  body: API.CurrentUser,
  options?: { [key: string]: any },
) {
  console.log(body);
  return request<API.BaseResponse<boolean>>('/api/user/update', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 删除用户 POST /api/user/delete */
export async function deleteUser(body: API.DeleteParam, options?: { [key: string]: any }) {
  return request<API.BaseResponse<boolean>>('/api/user/delete', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 修改密码 Post /api/user/modifyPassword */
export async function modifyPassword(
  body: API.ModifyPasswordParam,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse<boolean>>('/api/user/update/password', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 头像上传 POST /api/file/upload */
export async function fileUpload(body: API.FileUpload, options?: { [key: string]: any }) {
  return request<API.BaseResponse<boolean>>('/api/file/upload', {
    method: 'POST',
    data: body,
    ...options,
  });
}
