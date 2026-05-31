


function downloadFile(key){
  if(!uploads[key])return;

  const url=URL.createObjectURL(uploads[key]);

  const a=document.createElement('a');
  a.href=url;
  a.download=uploads[key].name;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadSite(){
  window.open('vittaconsultoria.html','_blank');
}

// Scroll suave para nav ativo
window.addEventListener('scroll',function(){

  const secs=['inicio','sobre','time','materiais','contato'];
  let cur='inicio';

  secs.forEach(id=>{
    const el=document.getElementById(id);

    if(el && window.scrollY>=el.offsetTop-120){
      cur=id;
    }
  });

  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.style.color=
      a.getAttribute('href')==='#'+cur
      ? '#F97316'
      : '';
  });

});