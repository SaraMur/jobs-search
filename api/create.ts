const addJob = async (job) =>{
    console.log('job to send');
    console.log(job);

    const options = {
        method: 'POST',
        body: JSON.stringify(job),
        headers:{
            "content-type": 'application/json'
        }
    }
    
    const response = await fetch('https://62aa6bf93b31438554472401.mockapi.io/s1/jobs', options)

    const data = await response.json()

    return data;
}

const getJobs = async () =>{
    const response = await fetch('https://62aa6bf93b31438554472401.mockapi.io/s1/jobs')

    const data = await response.json()

    return data;
}
const editJob = async () =>{
    const response = await fetch('https://62aa6bf93b31438554472401.mockapi.io/s1/jobs')

    const data = await response.json()

    return data;
}