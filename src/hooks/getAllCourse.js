import axios from 'axios';
// Fetch All Courses
export const getAllCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api');
      const responseData = response.data;
  
      // Return the response data
      return responseData;
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  }
