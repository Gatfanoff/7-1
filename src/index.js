export default class Validator {
  validateUsername(username) {

    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (
      username.length < 1 ||
      username.length > 20 || 
      !usernameRegex.test(username) || 
      /\d{4,}/.test(username) || 
      /^[\d_-]/.test(username) || 
      /[\d_-]$/.test(username) 
    ) {
      return false;
    }
    return true;
  }
}
