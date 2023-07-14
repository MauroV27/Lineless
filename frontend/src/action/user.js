import * as api from '../api/user';

export const loginUser = async (login, password) => {
  try {
      return await api.loginUser(login, password);
      
    } catch (error) {
      console.log(error.message);
    }
}

export const createUser = async (name, email, password, username) => {
    try {
        return await api.registerUser({name, email, password, username});
        
      } catch (error) {
        console.log(error.message);
      }
}