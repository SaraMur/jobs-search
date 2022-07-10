const formAddJob = document.getElementById('form-add-job');

formAddJob?.addEventListener('submit', async (event) => {
    event.preventDefault()

    let name = (<HTMLInputElement>document.getElementById("new-job-name")).value;
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
    await addJob(requestData);

    window.location.href = 'jobs-cards.html'
});
