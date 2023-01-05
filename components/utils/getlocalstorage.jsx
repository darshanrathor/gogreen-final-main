import Cookies from "js-cookie";

export function getLocalstorage(name) {
    const userdata = Cookies.get(name);
    if (userdata !== undefined) {
      if (userdata !== "" && userdata !== "{}") {
        return JSON.parse(userdata);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  


  export function storeUser(name, rea) {
    const userdata = Cookies.set(name, JSON.stringify(rea), {
      expires: 3,
      sameSite: "strict",
    });
  }
  


