// @ts-ignore
/* eslint-disable */

declare namespace API {
  // 获取用户信息
  type CurrentUser = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender: string;
    phone: string;
    email: string;
    userStatus: number;
    createTime: Date;
    userRole: string;
    userCode: string;
  };

  /**
   * 修改密码的信息模板
   */
  type ModifyPasswordParam = {
    userPassword: string;
    newPassword: string;
  };
  /**
   * 删除的参数
   */
  type DeleteParam = {
    id: number;
  };

  /**
   * 创建用户变量
   */
  type CreateParams = {
    username?: string;
    userAccount: string;
    userPassword?: string;
    avatarUrl?: string;
    gender: string;
    phone: string;
    email: string;
    userStatus: number;
    createTime: Date;
    userRole: string;
    userCode: string;
  };

  /**
   * 上传头像
   */
  type FileUpload = {
    file?: string;
  };

  /**
   * 统一返回类型
   */
  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  };

  // 登录结果
  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  // 登录的参数
  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  // 注册的参数
  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    userCode?: string;
    type?: string;
  };
}
