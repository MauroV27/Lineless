import axios from 'axios';
import { baseURL } from './baseurl';

const URL = baseURL + '/organizer';

// pass a valid userID
export const registerOrganizer  = async (userID) => {
    return await axios.post(`${URL}/register`, {userID});
};

