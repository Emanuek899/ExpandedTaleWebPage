export async function loadComponent(id, file){
    try{
        const response = await fetch(`https://emanuek899.github.io/ExpandedTaleWebPage/html/${file}`);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    }catch(error){
        console.log(`error al cargar el contenido ${file}`);
    }
}