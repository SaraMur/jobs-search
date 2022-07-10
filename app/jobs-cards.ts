const drawCards = (tableJobs, jobs) => {
    tableJobs.innerHTML = '';
    jobs.forEach(job =>{
        const container = document.createElement('div');
        container.className='card'

        const title = document.createElement('h3');
        const description = document.createElement('p');
        const location = document.createElement('span');
        const seniority = document.createElement('span');
        const category = document.createElement('span');

        //const textID = document.createTextNode(job.id);
        //h3.appendChild(textID);
        const textName = document.createTextNode(job.name);
        title.appendChild(textName);
        const textDescription = document.createTextNode(job.description);
        description.appendChild(textDescription);
        const textLocation = document.createTextNode(job.location);
        location.appendChild(textLocation);
        const textCategory = document.createTextNode(job.category);
        category.appendChild(textCategory);
        const textSeniority = document.createTextNode(job.seniority);
        seniority.appendChild(textSeniority);
        
        const editBtn = document.createElement('a');
        editBtn.setAttribute('href', `edit-job.html?id=${job.id}`);
        editBtn.appendChild(document.createTextNode('edit'));
        editBtn.className='button-28';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('delete'));
        deleteBtn.className='button-28';
        
        deleteBtn.addEventListener('click', async () =>{
            await deleteJob(job.id)
            loadCards(tableJobs)
        })

        container.appendChild(title);
        container.appendChild(document.createElement('br'));
        container.appendChild(description);
        container.appendChild(document.createElement('br'));
        container.appendChild(location);
        container.appendChild(document.createElement('br'));
        container.appendChild(category);
        container.appendChild(document.createElement('br'));
        container.appendChild(seniority);
        container.appendChild(document.createElement('br'));
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);
        tableJobs.appendChild(container);
    })
}

const loadCards = async (tableJobs) =>{
    loader('show');
    const jobs = await getJobs();
    loader('hide');
    drawCards(tableJobs, jobs)
}

const tableJobs = document.getElementById('table-jobs');
const locationOption = document.getElementById("new-job-location-tag");
const seniorityOption = document.getElementById("new-job-seniority-tag");
const categoryOption = document.getElementById("new-job-category-tag");

locationOption?.addEventListener('change', async () =>{
    const locationToSearch = (<HTMLSelectElement>locationOption).value;
    loader('show');
    const jobs = await getJobs();
    loader('hide');
    //filter
    const filteredJobs = jobs.filter(x=> x.location === locationToSearch)
    drawCards(tableJobs, filteredJobs)
})

seniorityOption?.addEventListener('change', async () =>{
    const seniorityToSearch = (<HTMLSelectElement>seniorityOption).value;
    loader('show');
    const jobs = await getJobs();
    loader('hide');
    //filter
    const filteredJobs = jobs.filter(x=> x.seniority === seniorityToSearch)
    drawCards(tableJobs, filteredJobs)
})

categoryOption?.addEventListener('change', async () =>{
    const categotyToSearch = (<HTMLSelectElement>categoryOption).value;
    loader('show');
    const jobs = await getJobs();
    loader('hide');
    //filter
    const filteredJobs = jobs.filter(x=> x.category === categotyToSearch)
    drawCards(tableJobs, filteredJobs)
})

loadCards(tableJobs);