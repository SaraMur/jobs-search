const jobsTable = document.getElementById('table-jobs');
const loadCards = async () =>{
    const jobs = await getJobs();

    console.log(jobs);
}

loadCards();