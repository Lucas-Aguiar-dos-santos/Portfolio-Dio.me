
function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
     photo.src = profileData.photo
     photo.alt = profileData.name


    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job 

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel: ${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto: ${profileData.email}`
}

function updateSoftSkills(profileData){

    const softSkill = document.getElementById('profile.skills.softSkills')

    softSkill.innerHTML = profileData.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skills => `<li> <img src="${skills.logo}" alt="${skills.name}" title="${skills.name}"></li>`).join('')

}

function updateLanguage(profileData){

    const language = document.getElementById('profile.language')

    language.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')

}

function updatePortfolio(profileData){

    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return`
            <li>
                <h3 ${project.github ? 'class="git" ': '' }>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
    `}).join('')

}

function updateExperience(profileData){
    const   experience = document.getElementById('profile.experience')

    experience.innerHTML = profileData.professionalExperience.map(exp => {
        
        return`
            <li>
                <h3 class="title">${exp.name}</h3>
                <p class="">${exp.period}</p>
                <p>
                ${exp.description}
                </p>
            </li>
    `}).join('')


}


(async ()=>{

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguage(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()