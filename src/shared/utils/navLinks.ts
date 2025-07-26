export const NAV_LINKS = {
  collections: '/app/collections',
  collection: (id: string) => `/app/collections/${id}`,
  auth: {
    login: '/auth/login',
    changePassword: '/auth/changePassword',
  }
};
