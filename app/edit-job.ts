const params = new URLSearchParams(window.location.search);
const formEdit = document.getElementById('form-edit-job');

const loadForm = async () =>{
    loader('show');
    const job = await getJob(params.get('id'));
    loader('hide');
    (<HTMLInputElement>document.getElementById("new-job-title")).value = job.name;
    (<HTMLInputElement>document.getElementById("new-job-description")).value = job.description;
    (<HTMLInputElement>document.getElementById("new-job-location-tag")).value = job.location;
    (<HTMLInputElement>document.getElementById("new-job-seniority-tag")).value = job.seniority;
    (<HTMLInputElement>document.getElementById("new-job-category-tag")).value = job.category;
}
loadForm();


formEdit?.addEventListener('submit', async (event) => {
    event.preventDefault()

    let name = (<HTMLInputElement>document.getElementById("new-job-title")).value;
    let description =  (<HTMLInputElement>document.getElementById("new-job-description")).value;
    let location =  (<HTMLInputElement>document.getElementById("new-job-location-tag")).value;
    let seniority =  (<HTMLInputElement>document.getElementById("new-job-seniority-tag")).value;
    let category =  (<HTMLInputElement>document.getElementById("new-job-category-tag")).value;

    const requestData ={
        id: params.get('id'),
        name,
        description,
        location,
        seniority,
        category 
    }
    
    loader('show');
    await editJob(requestData);
    loader('hide');
    window.location.href = 'jobs-cards.html'
});
