export async function loadComponent(id, file){
    try{
        const response = await fetch(`http://localhost:5500/html/${file}`);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    }catch(error){
        console.log(`error al cargar el contenido ${file}`);
    }
}