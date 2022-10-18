class JWTHelper {
  static parse = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
}

export default JWTHelper;
