
function toggleDropdown() {
    document.querySelector('.dropdown-options').classList.toggle('show');
  }
  
  function selectOption(option) {
    document.querySelector('#selected-option').innerText = option;
    document.querySelector('#selected-item').value = option; // Simpan pilihan ke input tersembunyi
    document.querySelector('.dropdown-options').classList.remove('show');
  }
  
  window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelector('.dropdown-options').classList.remove('show');
    }
  };
  
  
  const barangForm = document.getElementById('barangForm');
  const barangTable = document.getElementById('barangTable').getElementsByTagName('tbody')[0];
  
  // Fungsi untuk menambahkan data barang ke dalam tabel
  function tambahBarang(event) {
      event.preventDefault(); // Mencegah form submit secara default
  
      const nomorBarang = document.getElementById('nomorBarang').value;
      const namaBarang = document.getElementById('namaBarang').value;
      const fotoBarang = document.getElementById('fotoBarang').files[0];
      const kondisiBarang = document.querySelector('input[name="kondisiBarang"]:checked').value;
  
      // Membaca file foto barang
      const reader = new FileReader();
      reader.onload = function(e) {
          const fotoURL = e.target.result;
  
          // Menambahkan data barang ke dalam tabel
          const row = barangTable.insertRow();
          row.innerHTML = `
              <td>${nomorBarang}</td> 
              <td><img src="${fotoURL}" alt="Foto Barang" width="100"></td>
              <td>${namaBarang}</td>
              <td>${kondisiBarang}</td>
              <td>
                  <button onclick="editBarang(this)"><span class="material-icons">&#xe3c9;</span></button>
                  <button onclick="hapusBarang(this)"><span class="material-icons">&#xe872;</span></button>
              </td>
          `;
      };
      
      reader.readAsDataURL(fotoBarang);
  
      // Reset form
      barangForm.reset();
  }
  
  // Fungsi untuk mengedit data barang
  function editBarang(button) {
      const row = button.closest('tr');
      const cells = row.getElementsByTagName('td');
  
      // Ambil nilai dari kolom yang sesuai
      document.getElementById('nomorBarang').value = cells[0].innerText;
      document.getElementById('namaBarang').value = cells[2].innerText;
  
      // Pilih radio button berdasarkan kondisi barang
      document.querySelector(`input[name="kondisiBarang"][value="${cells[3].innerText}"]`).checked = true;
  
      // Menghapus baris yang akan diedit
      row.remove();
  }
  
  // Fungsi untuk menghapus data barang
  function hapusBarang(button) {
      const row = button.closest('tr');
      row.remove();
  }
  
  // Tambahkan event listener untuk form
  barangForm.addEventListener('submit', tambahBarang);
  
  
  //google sheet
  
  //form
  function submitForm() {
      event.preventDefault(); // Mencegah reload halaman
    
      // Ambil nilai dari input form
      const nama = document.getElementById('nama').value;
      const kelas = document.getElementById('kelas').value;
      const barang = document.getElementById('barang').value;
      const namapetugas = document.getElementById('namapetugas').value;
      const darijam = document.getElementById('darijam').value;
      const sampaijam = document.getElementById('sampaijam').value;
    
      // Validasi jika input belum lengkap
      if (!nama || !kelas || !barang || !namapetugas || !darijam || !sampaijam) {
        alert('Harap lengkapi semua data sebelum menyimpan.');
        return;
      }
    
      // Akses tabel dan tambahkan baris baru
      const tableBody = document.getElementById('outputBody');
      const newRow = document.createElement('tr');
    
      // Tambahkan data ke baris baru
      newRow.innerHTML = `
        <td>${nama}</td>
        <td>${kelas}</td>
        <td>${barang}</td>
        <td>${namapetugas}</td>
        <td>${darijam}</td>
        <td>${sampaijam}</td>
      `;
    
      tableBody.appendChild(newRow);
    
      // Reset form setelah data ditambahkan
      document.getElementById('formpeminjaman').reset();
    }
    
  
  //struk 
  function submitForm(){
      const nama = document.getElementById('nama').value;
      const kelas = document.getElementById('kelas').value;
      const barang = document.getElementById('barang').value;
      const namapetugas = document.getElementById('namapetugas').value;
      const darijam = document.getElementById('darijam').value;
      const sampaijam = document.getElementById('sampaijam').value;
  
      const strukHTML = `
     <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Struk</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
      <style>
        .Nota{
          background-color: #FEFAE0;
          padding-bottom: 100px;
        }
          .struk{
            background-color: white;
              /* align-items: center;
              justify-content: center;
              flex-direction: column;
              display: flex; */
            margin-top: 50px;
              padding: 80px;
             border-radius: 20px;
          }
          .struk img{
              margin-top: -50px;
              width: 100px;
              margin-left: 180px;
              margin-bottom: 10px;
          }
          .col-lg-6{
              margin-left: 350px;
          }
          .Garis-struk{
              border: 2px solid black;
          }
          .struk h2{
              margin-bottom: 20px;
              font-weight: 700;
              text-transform: uppercase;
              text-align: center;
              font-size: 4vh;
          }
          .struk-p{
             
              justify-content: center;
              align-items: center;
              flex-direction: row;
               margin-top: 20px;
          }
          .struk-p p{
              text-align: left;
              justify-content: left;
              display: flex;
              align-items: center;
              
          }
          .struk-akhir{
              margin-top: 50px;
              margin-left: 10px;
              text-align: center;
              margin-bottom: -60px;
          }
              @media (max-width: 768px) {
              .Nota {
                  background-color: #FEFAE0;
                  padding-bottom: 100px;
              }
  
              .struk {
                  background-color: white;
                  margin-top: 50px;
                  padding: 80px;
                  border-radius: 20px;
              }
  
              .struk img {
                  margin-top: -50px;
                  width: 100px;
                  margin-left: 60px;
                  margin-bottom: 10px;
              }
  
              .col-lg-6 {
                  margin-left: 0px;
              }
  
              .Garis-struk {
                  border: 2px solid black;
              }
  
              .struk h2 {
                  margin-bottom: 20px;
                  font-weight: 700;
                  text-transform: uppercase;
                  text-align: center;
                  font-size: 4vh;
              }
  
              .struk-p {
  
                  justify-content: center;
                  align-items: center;
                  flex-direction: row;
  
              }
  
              .struk-p p {
                  text-align: left;
                  justify-content: left;
                  display: flex;
                  align-items: center;
              }
  
              .struk-akhir {
                  margin-top: 50px;
                  margin-left: 10px;
                  text-align: center;
                  margin-bottom: -60px;
              }
          }
      </style>
  </head>
  
  <body>
  <section class="Nota">
      <div class="container">
          <div class="row">
              <div class="col-lg-6">
                  <div class="struk">
                      <img src="../asset/img/logo-rpl.png" alt="">
                      <h2>Struk peminjaman</h2>
                      <hr class="Garis-struk">
                      <div class="struk-p">
                          <p><b>Nama peminjam: </b> ${nama}</p>
                          <p><b>Kelas peminjam: </b> ${kelas}</p>
                          <p><b>Barang peminjam: </b> ${barang}</p>
                          <p><b>Nama petugas: </b>${namapetugas}</p>
                          <p><b>Dari jam: </b> ${darijam}</p>
                          <p><b>Sampai jam: </b> ${sampaijam}</p>
                      </div>
                      <div class="struk-akhir">
                          <hr class="Garis-struk">
                          <p> Barang yang dipinjam harus dikembalikan tepat waktu. Jika ada kerusakan atau kehilangan, peminjam bertanggung jawab penuh atas barang yang dipinjam.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  </body>
  
  </html>
      `;
  
      const newWindow = window.open();
      newWindow.document.write(strukHTML);
      newWindow.document.close(); // Menutup dokumen untuk memastikan dapat dirender
  }