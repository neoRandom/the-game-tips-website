import { get } from "svelte/store";
import { apiLink } from "../stores";

/**
 * @param {string} request
 * @param {RequestInit | null} body
 */
async function requestApi(request, body) {
    let link = get(apiLink);

    if (body)
        return await fetch(`${link}${request}`, body);
    return await fetch(`${link}${request}`);
}

/**
 * @param {string} path
 */
function fetchImage(path) {
    if (!path)
        return;

    let link = get(apiLink);
    return `${link}${path}`;
}

export { requestApi, fetchImage };
