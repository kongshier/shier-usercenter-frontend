/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * 全局判断当前用户是否位管理员
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.userRole === 'admin',
  };
}
