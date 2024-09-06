const token = localStorage.getItem("token");
const user = localStorage.getItem("userName");
const id = localStorage.getItem("userId");

const credentials = { token: token, user: user, id: id };

export default credentials;
