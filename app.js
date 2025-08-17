async function loadData(){
  const res = await fetch('data/seed.json');
  const data = await res.json();
  const list = document.getElementById('list');
  list.innerHTML = '';
  data.forEach(item=>{
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.title}</h3><p>${item.issuer} | ${item.region}</p>`;
    list.appendChild(div);
  });
}
window.onload = loadData;