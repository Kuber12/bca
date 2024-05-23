import axios from 'axios'
import React from 'react'

const SubjectApi = () => {
    const URL = "https://bca-file-backend.onrender.com"
  
    async function getSemester(id){
        try {
        const endpoint  = `${URL}/subject/${id}`;
        // console.log(endpoint);
        const response  = await axios.get(endpoint);
        const data = await response.data;
        // console.log(data);
        return data;
        } catch (error) {
            console.error(error)
        }
    }

    return {getSemester}
}

export default SubjectApi
