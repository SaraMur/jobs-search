const params = new URLSearchParams(window.location.search);

const formEdit = document.getElementById('form-edit-job');

const loadForm = async () =>{
    
    const job = await getJob(params.get('id'));

    form?.name.value = job.name;
    form?.description.value = job.description;
    form?.location.value = job.location;
    form?.seniority.value = job.seniority;
    form?.category.value = job.category;
    
}
loadForm();


formEdit?.addEventListener('submit', async (event) => {
    event.preventDefault()

    let name = (<HTMLInputElement>document.getElementById("new-job-name")).value;
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
    const data = editJob(requestData);

    console.log('data Result');
    console.log(data);
});