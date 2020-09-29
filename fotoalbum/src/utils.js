export function checkFetchReponseStatus(response) {
    if (!response.ok) {
        throw Error(response.status+" "+response.statusText);
    }
    return response;
}

export function fetchDataAsJson(url) {
    return fetch(url)
    .then(checkFetchReponseStatus)
    .then(res => res.json());
}
  