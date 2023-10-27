

async function fetchProfileData(){
    const url ='https://raw.githubusercontent.com/Lucas-Aguiar-dos-santos/js-developer-portfolio/main/data/profile.json'
    const fetchProfile = await fetch(url)
    return await fetchProfile.json()
}