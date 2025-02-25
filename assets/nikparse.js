
$("#proses").click(function() {
  const nik = $("#nik").val();
  nikParse(nik, function(result) {
  const status = result.status;
  const pesan = result.pesan;
  const data = result.data;
  const tambahan = data.tambahan;
  
  const html = `
  <div class="card has-background-dark has-text-light">
  <div class="card-content">
  <div class="content">
    <p>Status: ${status}</p>
    <p>Pesan: ${pesan}</p>
    <h5>Data</h5>
    <p>NIK: ${data.nik}</p>
    <p>Kelamin: ${data.kelamin}</p>
    <p>Lahir: ${data.lahir}</p>
    <p>Provinsi: ${data.provinsi}</p>
    <p>Kota/Kab: ${data.kotakab}</p>
    <p>Kecamatan: ${data.kecamatan}</p>
    <p>Uniqcode: ${data.uniqcode}</p>
    <h5>Tambahan</h5>
    <p>Kodepos: ${tambahan.kodepos}</p>
    <p>Lahir: ${tambahan.pasaran}</p>
    <p>Usia: ${tambahan.usia}</p>
    <p>Ultah: ${tambahan.ultah}</p>
    <p>Zodiak: ${tambahan.zodiak}</p>
  </div>
  </div>
  </div>
  `;
  
  $("#hasil").html(html);
    });
  });