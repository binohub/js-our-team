const teamMembers = [
    {
        nome: `Wayne Barnett`,
        ruolo: `Chief Editor`,
        "img-src": `wayne-barnett-founder-ceo.jpg`,
    },
    {
        nome: `Angela Caroll`,
        ruolo: `Founder & CEO`,
        "img-src": `angela-caroll-chief-editor.jpg`,
    },
    {
        nome: `Walter Gordon`,
        ruolo: `Office Manager`,
        "img-src": `walter-gordon-office-manager.jpg`,
    },
    {
        nome: `Angela Lopez`,
        ruolo: `Social Media Manager`,
        "img-src": `angela-lopez-social-media-manager.jpg`,
    },
    {
        nome: `Scott Estrada`,
        ruolo: `Developer`,
        "img-src": `scott-estrada-developer.jpg`,
    },
    {
        nome: `Barbara Ramos`,
        ruolo: `Graphic Designer`,
        "img-src": `barbara-ramos-graphic-designer.jpg`,
    },
];



const parentInfo = document.getElementById('parent-info');
for (let i=0; i<teamMembers.length; i++){
    console.log(teamMembers[i]);
    console.log(teamMembers[i].nome);
    console.log(teamMembers[i]["ruolo"]);
    console.log(teamMembers[i]["img-src"]);

    const newPre = document.createElement("pre");
    newPre.innerHTML = `${teamMembers[i].nome}, ${teamMembers[i].ruolo}, ${teamMembers[i]["img-src"]}`
    parentInfo.append(newPre);
}