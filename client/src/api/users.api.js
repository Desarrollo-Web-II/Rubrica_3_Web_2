import axios from "axios";

export const LoginRequest = async(usuario)=>await axios.post('http://localhost:5000/api/users', usuario)