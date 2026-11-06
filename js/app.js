(()=>{
const WA='6281237378080',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const rp=n=>'Rp '+n.toLocaleString('id-ID');
const PK=[
{id:'syawal',name:'Umrah Special Syawal 1448 H',tag:'Paket 12D',price:29500000,dur:'12 hari',dep:'Surabaya',when:'Syawal 1448 H (tanggal dikonfirmasi tim)',air:'Emirates, Saudia, Qatar Airways',hm:'Zwar Al Bait (bintang 3 setaraf)',hd:'Manazil Al Zahra (bintang 3 setaraf)',img:'brosur-syawal',pos:'50% 8%',br:'brosur-syawal',
 inc:['Tiket pesawat PP','Visa Umrah','Hotel Makkah dan Madinah','Bus city tour Saudi','Asuransi','Makan 3x sehari','Tour leader dan muthawwif','Perlengkapan','Buku panduan','Air Zam Zam 5 liter'],
 exc:['Biaya paspor','Vaksin meningitis dan polio','Keperluan pribadi','Tour di luar program','Perjalanan dari daerah'],
 sk:['Wajib vaksin booster, meningitis, dan polio','DP wajib Rp 5 juta','Pelunasan H-60 keberangkatan']},
{id:'regular',name:'Umrah Reguler Surabaya',tag:'Reguler',price:32500000,dur:'12 hari',dep:'Surabaya',when:'23 September 2026 (per brosur, sudah lewat)',air:'Tidak tercantum pada brosur',hm:'Bintang 3 setaraf',hd:'Bintang 3 setaraf',img:'brosur-regular',pos:'50% 14%',br:'brosur-regular',
 inc:['Tiket pesawat PP','Visa Umrah','Hotel Makkah dan Madinah','Bus city tour Saudi','Asuransi','Makan 3x sehari','Tour leader dan muthawwif','Perlengkapan','Buku panduan','Air Zam Zam 5 liter'],
 exc:['Biaya paspor','Vaksin meningitis dan polio','Keperluan pribadi','Tour di luar program','Perjalanan dari daerah'],
 sk:['Wajib vaksin booster, meningitis, dan polio','DP wajib Rp 5 juta','Pelunasan H-30 keberangkatan']},
{id:'turkey',name:'Umrah Plus Turkey',tag:'16 hari',price:40000000,dur:'16 hari',dep:'Jakarta (CGK-IST-JED-CGK)',when:'Winter, Desember 2026',air:'Emirates',hm:'Bintang 3 (Makkah 4 hari)',hd:'Bintang 3 (Madinah 3 hari); Turkey 7D6N hotel bintang 4',img:'brosur-turkey',pos:'50% 12%',br:'brosur-turkey',
 inc:['Tiket pesawat PP','Visa Umrah','Hotel Saudi dan Turkey','Bus city tour Saudi dan Turkey','Asuransi','Makan 3x sehari','Muthawwif / TL','Tiket boat, tip wisata, tiket entrance','Air Zam Zam 5 liter'],
 exc:['Biaya paspor','Vaksin meningitis dan polio','Tip muthawwif dan supir Turkey (+50 USD)','Cable car (+50 USD)','Tour di luar program'],
 sk:['Wajib vaksin booster, meningitis, dan polio','DP wajib Rp 10 juta','Pelunasan H-30 keberangkatan']}];
const GL=[['g-makkah-sunset','Makkah','Jamaah dengan latar menara Makkah saat senja'],['g-masjidil-haram','Makkah','Masjidil Haram, Makkah'],['g-kabah-jamaah','Makkah','Rombongan jamaah di depan Ka\'bah'],['g-makan-bersama','Jamaah','Makan bersama jamaah'],['g-keberangkatan','Keberangkatan','Jamaah berkumpul sebelum berangkat'],['g-jamaah-banner','Keberangkatan','Jamaah membawa banner di Tanah Suci'],['g-tips-bandara','Informasi','Tips menjaga koper di bandara'],['g-tips-koper','Informasi','Daftar barang bawaan koper jamaah']];
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
/* packages */
$('#pk').innerHTML=PK.map(p=>`<article class="card rv"><div class="ph"><img src="assets/img/${p.img}.webp" alt="${p.name}" loading="lazy" style="object-position:${p.pos}"><span class="tag">${p.tag}</span></div><div class="bd"><h3>${p.name}</h3><div class="price">${rp(p.price)} <small>/ jamaah, sesuai brosur</small></div><ul><li><b>Durasi:</b> ${p.dur}</li><li><b>Berangkat:</b> ${p.dep}</li><li><b>Jadwal:</b> ${p.when}</li></ul><div class="act"><button class="btn btn-o btn-sm" data-d="${p.id}">Detail Paket</button><a class="btn btn-p btn-sm" target="_blank" rel="noopener" href="${wa('Assalamualaikum, saya ingin konsultasi paket '+p.name)}">Konsultasi</a></div></div></article>`).join('');
$('#pk2').innerHTML='<option value="">Pilih paket</option>'+PK.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
/* modal */
const md=$('#md'),mb=$('#mbx');let lastBtn;
const li=a=>a.map(x=>`<li>${x}</li>`).join('');
function openD(id,btn){const p=PK.find(x=>x.id===id);lastBtn=btn;
mb.innerHTML=`<figure><img src="assets/img/${p.br}.webp" alt="Brosur ${p.name}"></figure><div class="mc"><button class="x" aria-label="Tutup detail">×</button><h3 id="mt">${p.name}</h3><div class="price">${rp(p.price)}</div><dl class="kv"><dt>Durasi</dt><dd>${p.dur}</dd><dt>Berangkat</dt><dd>${p.dep}</dd><dt>Jadwal</dt><dd>${p.when}</dd><dt>Maskapai</dt><dd>${p.air}</dd><dt>Hotel Makkah</dt><dd>${p.hm}</dd><dt>Hotel Madinah</dt><dd>${p.hd}</dd></dl><h4>Harga termasuk</h4><ul>${li(p.inc)}</ul><h4>Harga tidak termasuk</h4><ul>${li(p.exc)}</ul><h4>Syarat dan ketentuan</h4><ul>${li(p.sk)}</ul><div class="cta" style="margin-top:6px"><a class="btn btn-o btn-sm" target="_blank" rel="noopener" href="${wa('Assalamualaikum, saya ingin konsultasi paket '+p.name)}">Konsultasi</a><button class="btn btn-p btn-sm" data-r="${p.id}">Reservasi</button></div></div>`;
md.classList.add('open');document.body.style.overflow='hidden';mb.querySelector('.x').focus()}
const closeD=()=>{md.classList.remove('open');document.body.style.overflow='';lastBtn&&lastBtn.focus()};
document.addEventListener('click',e=>{const d=e.target.closest('[data-d]'),r=e.target.closest('[data-r]');
if(d)openD(d.dataset.d,d);
if(r){closeD();$('#pk2').value=r.dataset.r;$('#reservasi').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#nm').focus({preventScroll:true}),500)}
if(e.target===md||e.target.closest('.mc .x'))closeD()});
/* gallery + lightbox */
$('#gl').innerHTML=GL.map((g,i)=>`<figure data-c="${g[1]}"><button aria-label="Perbesar: ${g[2]}" data-i="${i}"><img src="assets/img/${g[0]}.webp" alt="${g[2]}" loading="lazy"><figcaption>${g[2]}</figcaption></button></figure>`).join('');
let vis=GL.map((_,i)=>i),cur=0;const lb=$('#lb'),lbi=lb.querySelector('img'),lbp=lb.querySelector('p');
function show(k){cur=(k+vis.length)%vis.length;const g=GL[vis[cur]];lbi.src=`assets/img/${g[0]}.webp`;lbi.alt=g[2];lbp.textContent=`${g[2]} (${cur+1}/${vis.length})`}
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));const f=b.dataset.f;vis=[];$$('#gl figure').forEach((fg,i)=>{const on=f==='all'||fg.dataset.c===f;fg.hidden=!on;if(on)vis.push(i)})});
$('#gl').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;show(vis.indexOf(+b.dataset.i));lb.classList.add('open');document.body.style.overflow='hidden';lb.querySelector('.x').focus()});
const closeL=()=>{lb.classList.remove('open');document.body.style.overflow=''};
lb.querySelector('.x').onclick=closeL;lb.querySelector('.pv').onclick=()=>show(cur-1);lb.querySelector('.nx').onclick=()=>show(cur+1);lb.onclick=e=>{if(e.target===lb)closeL()};
document.addEventListener('keydown',e=>{if(lb.classList.contains('open')){if(e.key==='Escape')closeL();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)}else if(md.classList.contains('open')&&e.key==='Escape')closeD()});
/* nav */
const hd=$('#hd'),bg=$('#bg'),nav=$('#nav');
bg.onclick=()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Tutup menu':'Buka menu')};
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');bg.setAttribute('aria-expanded',false)}});
addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>8),{passive:true});
const secs=$$('main section[id]');const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});secs.forEach(s=>so.observe(s));
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.12});$$('.rv').forEach(x=>ro.observe(x));
/* form */
const f=$('#rf'),sm=$('#sm'),mg=$('#mg');const dt=$('#dt');dt.min=new Date().toISOString().slice(0,10);
const rules={nm:v=>v.trim().length>=3||'Isi nama lengkap (minimal 3 huruf).',wa:v=>/^(\+?62|0)8\d{7,12}$/.test(v.replace(/[\s-]/g,''))||'Gunakan nomor WhatsApp Indonesia, contoh 08123456789.',em:v=>!v||/^\S+@\S+\.\S+$/.test(v)||'Format email belum benar.',pk2:v=>!!v||'Pilih salah satu paket.',dt:v=>!!v||'Pilih tanggal keberangkatan.',jm:v=>(+v>=1&&+v<=50)||'Jumlah jamaah 1 sampai 50.'};
function check(){let ok=true;for(const k in rules){const el=f.elements[k],r=rules[k](el.value),box=el.closest('.f');box.classList.toggle('bad',r!==true);box.querySelector('.err').textContent=r===true?'':r;el.setAttribute('aria-invalid',r!==true);if(r!==true)ok=false}return ok}
f.addEventListener('input',e=>{if(e.target.closest('.f.bad'))check();sm.classList.remove('show');mg.className='msg'});
f.addEventListener('submit',e=>{e.preventDefault();mg.className='msg';
if(!check()){mg.className='msg er';mg.textContent='Beberapa kolom belum lengkap. Periksa kolom yang bertanda merah.';return}
const p=PK.find(x=>x.id===f.pk2.value),d=new Date(f.dt.value).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
const msg=`Assalamualaikum, saya ingin pra-reservasi umrah.\n\nNama: ${f.nm.value.trim()}\nWhatsApp: ${f.wa.value.trim()}\n${f.em.value?'Email: '+f.em.value.trim()+'\n':''}Paket: ${p.name} (${rp(p.price)} per brosur)\nTanggal diinginkan: ${d}\nJumlah jamaah: ${f.jm.value}\n${f.ct.value.trim()?'Catatan: '+f.ct.value.trim()+'\n':''}\nMohon info ketersediaan. Terima kasih.`;
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
sm.innerHTML=`<b>Ringkasan reservasi</b><dl><dt>Nama</dt><dd>${esc(f.nm.value)}</dd><dt>Paket</dt><dd>${p.name}</dd><dt>Tanggal</dt><dd>${d}</dd><dt>Jamaah</dt><dd>${f.jm.value} orang</dd><dt>Estimasi</dt><dd>${rp(p.price*f.jm.value)} (belum final)</dd></dl><a class="btn btn-p" id="send" target="_blank" rel="noopener" href="${wa(msg)}">Kirim lewat WhatsApp</a>`;
sm.classList.add('show');sm.scrollIntoView({behavior:'smooth',block:'nearest'});
$('#send').onclick=()=>{mg.className='msg ok';mg.textContent='Pesan sudah disiapkan di WhatsApp. Pendaftaran belum tercatat sampai Anda menekan Kirim dan tim kami membalas.'}});
})();
