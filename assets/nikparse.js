
$("#proses").click(function() {
  const nik = $("#nik").val();
  
  if (!nik.trim()) {
    // Show error if NIK is empty
    $("#hasil").html(`
      <div class="notification is-danger is-light has-text-centered">
        <span class="icon mr-2">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
        NIK tidak boleh kosong
      </div>
    `);
    return;
  }
  
  // Show loading indicator
  $("#hasil").html(`
    <div class="card has-text-centered p-5">
      <div class="content">
        <span class="icon is-large has-text-link">
          <i class="fas fa-circle-notch fa-spin fa-2x"></i>
        </span>
        <p class="mt-3">Sedang memproses...</p>
      </div>
    </div>
  `);
  
  // Call your nikParse function (keeping the original functionality)
  nikParse(nik, function(result) {
    const status = result.status;
    const pesan = result.pesan;
    const data = result.data;
    const tambahan = data.tambahan;
    
    const statusClass = status === "success" ? "is-success" : "is-danger";
    const statusIcon = status === "success" ? "check-circle" : "times-circle";
    
    const html = `
      <div class="card has-background-grey-darker has-text-light">
        <header class="card-header ${statusClass}">
          <p class="card-header-title has-text-white">
            <span class="icon mr-2">
              <i class="fas fa-${statusIcon}"></i>
            </span>
            Hasil Analisis
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="notification ${statusClass} is-light mb-4">
              <p class="has-text-weight-bold">${pesan}</p>
            </div>
            
            <div class="columns is-multiline">
              <!-- Data Section -->
              <div class="column is-12">
                <h5 class="title is-5 has-text-link-light">
                  <span class="icon mr-2">
                    <i class="fas fa-database"></i>
                  </span>
                  Data Utama
                </h5>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">NIK</label>
                  <p class="has-text-white is-size-5">${data.nik}</p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Kelamin</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-${data.kelamin === 'LAKI-LAKI' ? 'mars' : 'venus'}"></i>
                    </span>
                    ${data.kelamin}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Lahir</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-birthday-cake"></i>
                    </span>
                    ${data.lahir}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Provinsi</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-map"></i>
                    </span>
                    ${data.provinsi}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Kota/Kab</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-city"></i>
                    </span>
                    ${data.kotakab}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Kecamatan</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                    ${data.kecamatan}
                  </p>
                </div>
              </div>
              
              <div class="column is-12">
                <div class="field">
                  <label class="label has-text-grey-light">Uniqcode</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-fingerprint"></i>
                    </span>
                    ${data.uniqcode}
                  </p>
                </div>
              </div>
              
              <!-- Tambahan Section -->
              <div class="column is-12 mt-4">
                <h5 class="title is-5 has-text-link-light">
                  <span class="icon mr-2">
                    <i class="fas fa-info-circle"></i>
                  </span>
                  Info Tambahan
                </h5>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Kodepos</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-mail-bulk"></i>
                    </span>
                    ${tambahan.kodepos}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Pasaran</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-calendar-day"></i>
                    </span>
                    ${tambahan.pasaran}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Usia</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-user-clock"></i>
                    </span>
                    ${tambahan.usia}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Ultah</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-hourglass-half"></i>
                    </span>
                    ${tambahan.ultah}
                  </p>
                </div>
              </div>
              
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-grey-light">Zodiak</label>
                  <p class="has-text-white is-size-5">
                    <span class="icon mr-1">
                      <i class="fas fa-star"></i>
                    </span>
                    ${tambahan.zodiak}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item has-text-link" onclick="$('#nik').val('').focus()">
            <span class="icon mr-1">
              <i class="fas fa-redo-alt"></i>
            </span>
            Cek NIK Lain
          </a>
        </footer>
      </div>
    `;
    
    $("#hasil").html(html);
  });
});

// Add Enter key functionality
$("#nik").keypress(function(e) {
  if(e.which == 13) {
    $("#proses").click();
  }
});