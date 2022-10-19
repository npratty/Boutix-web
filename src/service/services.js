import Ajax from "./Ajax";

export function getDataFromServer(url) {
  return Ajax.get(url).then((response) => {
    return response;
  });
}

export function sendDataToServer(url, data) {
  return Ajax.post(url, data).then((response) => {
    return response;
  });
}
export function deleteDataFromServer(url) {
  return Ajax.delete(url).then((response) => {
    return response;
  });
}

export function updateDataFromServer(url, data) {
  return Ajax.patch(url, data).then((response) => {
    return response;
  });
}

export function signIn(url, data) {
  return Ajax.post(url, data).then((response) => {
    storeUser(response);
    return response;
  });
}
function storeUser(user) {
  localStorage.setItem("user", JSON.stringify(user.data));
}
export function deleteUser() {
  localStorage.removeItem("user");
}

