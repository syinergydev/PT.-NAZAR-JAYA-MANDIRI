const nav=document.querySelector('#nav'),toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();
const grid=document.querySelector('#packageGrid'),search=document.querySelector('#searchPackage'),sort=document.querySelector('#sortPackage');
function filterPackages(){let cards=[...grid.querySelectorAll('.package-card')],q=search.value.toLowerCase();cards.forEach(c=>c.hidden=!c.dataset.name.includes(q));if(sort.value!=='default'){cards.sort((a,b)=>sort.value==='low'?(+a.dataset.price||Infinity)-(+b.dataset.price||Infinity):(+b.dataset.price)-(+a.dataset.price));cards.forEach(c=>grid.append(c));}}
search.addEventListener('input',filterPackages);sort.addEventListener('change',filterPackages);
const modal=document.querySelector('#reservationModal'),selected=document.querySelector('#selectedPackage');
function openModal(pkg){selected.value=pkg||'Umrah Syawal';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.reserve-btn').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.package)));
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();document.querySelector('#lightbox').classList.remove('open')}});
document.querySelector('#reservationForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Assalamualaikum PT. Nazar Jaya Mandiri.%0A%0ASaya ingin konsultasi mengenai paket Umrah.%0A%0ANama: ${encodeURIComponent(d.get('name'))}%0ANomor WhatsApp: ${encodeURIComponent(d.get('phone'))}%0APaket: ${encodeURIComponent(d.get('package'))}%0AJumlah jamaah: ${encodeURIComponent(d.get('people'))}%0ACatatan: ${encodeURIComponent(d.get('note')||'-')}%0A%0EMohon informasi harga, jadwal, fasilitas, dan ketersediaan terbaru. Terima kasih.`;window.open('https://wa.me/6281237378080?text='+msg,'_blank','noopener');closeModal();});
const lightbox=document.querySelector('#lightbox');document.querySelectorAll('.gallery-item').forEach(b=>b.addEventListener('click',()=>{lightbox.querySelector('img').src=b.dataset.full;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
lightbox.querySelector('button').addEventListener('click',()=>lightbox.classList.remove('open'));lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});
