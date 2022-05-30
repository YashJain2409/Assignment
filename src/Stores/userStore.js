import create from "zustand";


// define data and methods on userStore. 

const userStore = (set) => ({
  userDetails: {
    name: "",
    age: "",
    gender: "",
  },
  updateInfo: (userDetail) => {
    set((state) => ({ userDetails: userDetail }));
  },
});

// create userStore to save user details.

const useUserStore = create(userStore);

export default useUserStore;
