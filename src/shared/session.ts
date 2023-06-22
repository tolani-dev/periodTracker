import { useRouter } from "vue-router";

export const session = {
  get: (key: string) => {
    const data: any = localStorage.getItem(key);
    return JSON.parse(data);
  },

  set: (key: string, data: any) => {
    return localStorage.setItem(key, JSON.stringify(data));
  },

  clear: () => {
    return localStorage.clear();
  },
  logout: () => {
    localStorage.clear();
    // window.location.reload();
  },
  exists: (key: string) => {
    const data = localStorage.getItem(key);
    if (data) {
      return true;
    } else {
      return false;
    }
  },
};
