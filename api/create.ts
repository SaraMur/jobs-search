const getJobs = async () =>{
    const response = await fetch('https://62aa6bf93b31438554472401.mockapi.io/jobs')
    const data = await response.json()
    return data;
}

const getJob = async (id) =>{
    const response = await fetch(`https://62aa6bf93b31438554472401.mockapi.io/jobs/${id}`)
    const data = await response.json()
    return data;
}

const addJob = async (job) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(job),
        headers:{
            "content-type": 'application/json'
        }
    }
    
    const response = await fetch('https://62aa6bf93b31438554472401.mockapi.io/jobs', options)
    const data = await response.json()
    return data;
}

const editJob = async (job) =>{
    const options = {
        method: 'PUT',
        body: JSON.stringify(job),
        headers:{
            "content-type" : 'application/json'
        }
    }

    const response = await fetch(`https://62aa6bf93b31438554472401.mockapi.io/jobs/${job.id}`, options)
    const data = await response.json()
    return data;
}

const deleteJob = async (id) =>{
    const options = {
        method: 'DELETE',
        }
    const response = await fetch(`https://62aa6bf93b31438554472401.mockapi.io/jobs/${id}`, options)
    const data = await response.json()
    return data;
}


//Boton de Onload 
function loader(action:string):void {
    if (action === 'show') {
        (<HTMLInputElement>document.getElementById("loader")).style.display = "";
        (<HTMLInputElement>document.getElementById("cover-spin")).style.display = "";
    } else {
        (<HTMLInputElement>document.getElementById("loader")).style.display = "none";
        (<HTMLInputElement>document.getElementById("cover-spin")).style.display = "none";
    }
}