const storageHelper = {
  auth: {
    getToken: () => sessionStorage.getItem("authToken"),
    set: (token: string) => sessionStorage.setItem("authToken", token),
  },
};

export default storageHelper;
