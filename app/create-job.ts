const createNewJob = document.getElementById('create-new-job');

const fxEventCreate = async (event) => {
    event.preventDefault()

    let name = (<HTMLInputElement>document.getElementById("new-job-title")).value;
    let description =  (<HTMLInputElement>document.getElementById("new-job-description")).value;
    let location =  (<HTMLInputElement>document.getElementById("new-job-location-tag")).value;
    let seniority =  (<HTMLInputElement>document.getElementById("new-job-seniority-tag")).value;
    let category =  (<HTMLInputElement>document.getElementById("new-job-category-tag")).value;

    const requestData ={
        name,
        description,
        location,
        seniority,
        category 
    }
    const data = addJob(requestData);

    console.log('data Result');
    console.log(data);
};

createNewJob?.addEventListener('submit', fxEventCreate);
