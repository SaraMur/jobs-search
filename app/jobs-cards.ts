const loadCards = async (jobsTable) =>{
    const jobs = await getJobs();

    jobsTable.querySelector('tbody').innerHTML = '';

    jobs.forEach(job =>{
        const tr = document.createElement('tr');
        const tdID = document.createElement('td');
        const tdName = document.createElement('td');
        const tdDescription = document.createElement('td');
        const tdCategory = document.createElement('td');
        const tdSenority = document.createElement('td');
        
        const tdActions = document.createElement('td');
        
        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdCategory);
        tr.appendChild(tdSenority);
        tdSenority.appendChild(tdActions);
        
        const textID = document.createTextNode(job.id);
        tdID.appendChild(textID);
        const textName = document.createTextNode(job.name);
        tdName.appendChild(textName);
        const textDescription = document.createTextNode(job.description);
        tdDescription.appendChild(textDescription);
        const textCategory = document.createTextNode(job.category);
        tdCategory.appendChild(textCategory);
        const textSenority = document.createTextNode(job.senority);
        tdSenority.appendChild(textSenority);
        
        const editBtn = document.createElement('a');
        editBtn.setAttribute('href', `edit-job.html?=id${job.id}`);
        editBtn.appendChild(document.createTextNode('edit'));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('delete'));
        
        deleteBtn.addEventListener('click', async () =>{
            await deleteJob(job.id)
            loadCards(jobsTable)
        })
        
        tdActions.appendChild(editBtn);
        tdActions.appendChild(deleteBtn);
      
        //deleteBtn.innerHTML = '';
        jobsTable?.querySelector('tbody')?.appendChild(tr);
        
    })
}

const jobsTable = document.getElementById('table-jobs');
loadCards(jobsTable);