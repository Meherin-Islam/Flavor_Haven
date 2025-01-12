import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://flavor-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;