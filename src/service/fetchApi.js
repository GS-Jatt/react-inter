import { useParams } from "react-router-dom"
import axios from 'axios';

export default async function getData(search) {
    // const url = `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=7324be16&app_key=7baba3c713278176ae79604ada19d970&results_per_page=20&what=${search}&content-type=application/json`

    // const res = await fetch(url, { mode: 'no-cors' })
    // // const data = await JSON.stringify(res)
    // console.log(res)
    // return res
    // Define your Adzuna API key and endpoint
    const apiKey = '7baba3c713278176ae79604ada19d970'; // Replace with your Adzuna API key
    const apiUrl = 'https://api.adzuna.com/v1/api/jobs/us/search/1';

    // Define the search criteria
    const keywords = search; // Keywords related to the job description
    const location = 'remote'; // Location or location keyword

    // Construct the API URL with query parameters
    const params = {
        app_id: '7324be16', // Replace with your Adzuna App ID
        app_key: apiKey,
        what: keywords,
        where: location,
    };

    // Send a GET request to the Adzuna API
   const data = axios.get(apiUrl, { params })
        .then(response => {
            // Handle the API response here
            return response.data.results;
            // Display the job listings
            // jobListings.forEach(job => {
            //     console.log(`Title: ${job.title}`);
            //     console.log(`Company: ${job.company.display_name}`);
            //     console.log(`Location: ${job.location.display_name}`);
            //     console.log(`Salary: ${job.salary_min} - ${job.salary_max}`);
            //     console.log(`Apply URL: ${job.redirect_url}`);
            //     console.log('-------------------------');
            // });
        })
        .catch(error => {
            console.error('Error fetching job data:', error);
        });

        return data
}


