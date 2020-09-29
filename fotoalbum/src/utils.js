export function checkFetchReponseStatus(response) {
    if (!response.ok) {
        throw Error(response.status+" "+response.statusText);
    }
    return response;
  }
  