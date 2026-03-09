// Data survei dari CSV yang telah diproses
const rawData = [
    {
        nama: "Jl. Tunjungsari No. 24 C",
        kamar: 0, penghuni: 0, jenis: "Perempuan",
        sumberAir: false, airSepanjangHari: true, airJernih: false, riwayatKotor: false,
        penyimpananTertutup: true,
        saluranLimbah: true, saluranTertutup: true, tidakBerbau: false, pengolahanLimbah: true,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: false,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: true, bebasHama: false, jauhSampah: false, penghunipeduli: true,
        perangkatDigital: true, internetStabil: true, aktifRT: true
    },
    {
        nama: "Kost Cendekia",
        kamar: 30, penghuni: 30, jenis: "Perempuan",
        sumberAir: true, airSepanjangHari: true, airJernih: true, riwayatKotor: false,
        penyimpananTertutup: true,
        saluranLimbah: true, saluranTertutup: true, tidakBerbau: true, pengolahanLimbah: false,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: true,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: true, bebasHama: false, jauhSampah: true, penghunipeduli: true,
        perangkatDigital: true, internetStabil: true, aktifRT: true
    },
    {
        nama: "Kost Mandiri",
        kamar: 11, penghuni: 10, jenis: "Perempuan",
        sumberAir: true, airSepanjangHari: true, airJernih: true, riwayatKotor: false,
        penyimpananTertutup: true,
        saluranLimbah: true, saluranTertutup: true, tidakBerbau: true, pengolahanLimbah: true,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: true,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: true, bebasHama: true, jauhSampah: true, penghunipeduli: true,
        perangkatDigital: true, internetStabil: true, aktifRT: true
    },
    {
        nama: "Kost Griya Mikalla",
        kamar: 7, penghuni: 5, jenis: "Perempuan",
        sumberAir: true, airSepanjangHari: true, airJernih: true, riwayatKotor: false,
        penyimpananTertutup: true,
        saluranLimbah: true, saluranTertutup: true, tidakBerbau: true, pengolahanLimbah: false,
        tempatSampah: true, pilahSampah: true, angkutRutin: true, tidakMenumpuk: true,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: true, bebasHama: true, jauhSampah: true, penghunipeduli: true,
        perangkatDigital: true, internetStabil: true, aktifRT: true
    },
    {
        nama: "Kost Sofiea",
        kamar: 19, penghuni: 16, jenis: "Perempuan",
        sumberAir: true, airSepanjangHari: true, airJernih: true, riwayatKotor: false,
        penyimpananTertutup: true,
        saluranLimbah: true, saluranTertutup: true, tidakBerbau: true, pengolahanLimbah: false,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: false,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: false, bebasHama: true, jauhSampah: false, penghunipeduli: true,
        perangkatDigital: true, internetStabil: true, aktifRT: false
    },
    {
        nama: "Kost Bu Surip",
        kamar: 8, penghuni: 3, jenis: "Perempuan",
        sumberAir: true, airSepanjangHari: true, airJernih: true, riwayatKotor: true,
        penyimpananTertutup: true,
        saluranLimbah: true, saluranTertutup: true, tidakBerbau: true, pengolahanLimbah: true,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: false,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: false, bebasHama: true, jauhSampah: false, penghunipeduli: false,
        perangkatDigital: true, internetStabil: true, aktifRT: false
    },
    {
        nama: "Kost Karlis",
        kamar: 9, penghuni: 5, jenis: "Perempuan",
        sumberAir: true, airSepanjangHari: true, airJernih: false, riwayatKotor: true,
        penyimpananTertutup: false,
        saluranLimbah: false, saluranTertutup: true, tidakBerbau: true, pengolahanLimbah: true,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: false,
        toiletBersih: false, airToilet: true, ventilasiToilet: false, jumlahToiletCukup: true,
        bebasGenangan: false, bebasHama: false, jauhSampah: true, penghunipeduli: false,
        perangkatDigital: true, internetStabil: true, aktifRT: true
    },
    {
        nama: "Kost Bu Ipah",
        kamar: 28, penghuni: 28, jenis: "Laki-laki",
        sumberAir: true, airSepanjangHari: true, airJernih: true, riwayatKotor: false,
        penyimpananTertutup: false,
        saluranLimbah: true, saluranTertutup: true, tidakBerbau: true, pengolahanLimbah: true,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: true,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: false, bebasHama: true, jauhSampah: true, penghunipeduli: true,
        perangkatDigital: true, internetStabil: true, aktifRT: false
    },
    {
        nama: "Kost Orange",
        kamar: 20, penghuni: 17, jenis: "Campuran",
        sumberAir: true, airSepanjangHari: true, airJernih: true, riwayatKotor: true,
        penyimpananTertutup: true,
        saluranLimbah: false, saluranTertutup: true, tidakBerbau: false, pengolahanLimbah: false,
        tempatSampah: true, pilahSampah: false, angkutRutin: true, tidakMenumpuk: false,
        toiletBersih: true, airToilet: true, ventilasiToilet: true, jumlahToiletCukup: true,
        bebasGenangan: true, bebasHama: false, jauhSampah: true, penghunipeduli: false,
        perangkatDigital: true, internetStabil: true, aktifRT: true
    }
];

// Fungsi untuk menghitung skor sanitasi
function calculateSanitationScore(kos) {
    const airBersih = [kos.sumberAir, kos.airSepanjangHari, kos.airJernih, !kos.riwayatKotor, kos.penyimpananTertutup];
    const limbah = [kos.saluranLimbah, kos.saluranTertutup, kos.tidakBerbau, kos.pengolahanLimbah];
    const sampah = [kos.tempatSampah, kos.pilahSampah, kos.angkutRutin, kos.tidakMenumpuk];
    const toilet = [kos.toiletBersih, kos.airToilet, kos.ventilasiToilet, kos.jumlahToiletCukup];
    const lingkungan = [kos.bebasGenangan, kos.bebasHama, kos.jauhSampah, kos.penghunipeduli];

    const skorAirBersih = (airBersih.filter(Boolean).length / airBersih.length) * 100;
    const skorLimbah = (limbah.filter(Boolean).length / limbah.length) * 100;
    const skorSampah = (sampah.filter(Boolean).length / sampah.length) * 100;
    const skorToilet = (toilet.filter(Boolean).length / toilet.length) * 100;
    const skorLingkungan = (lingkungan.filter(Boolean).length / lingkungan.length) * 100;

    const skorTotal = (skorAirBersih + skorLimbah + skorSampah + skorToilet + skorLingkungan) / 5;

    return {
        ...kos,
        skorAirBersih,
        skorLimbah,
        skorSampah,
        skorToilet,
        skorLingkungan,
        skorTotal,
        kategori: skorTotal >= 80 ? 'Baik' : skorTotal >= 60 ? 'Sedang' : 'Perlu Perbaikan'
    };
}

// Proses data
const processedData = rawData.map(calculateSanitationScore);

// Inisialisasi dashboard
function initDashboard() {
    // Update summary cards
    updateSummaryCards();
    
    // Create charts
    createCategoryChart();
    createAspectChart();
    createTypeDistributionChart();
    createTypeScoreChart();
    
    // Fill table
    fillDataTable();
    
    // Update date
    updateDate();
    
    // Initialize Lucide icons
    lucide.createIcons();
}

// Update summary cards
function updateSummaryCards() {
    const totalIndekos = processedData.length;
    const totalPenghuni = processedData.reduce((sum, kos) => sum + kos.penghuni, 0);
    const rataRataSkor = Math.round(processedData.reduce((sum, kos) => sum + kos.skorTotal, 0) / processedData.length);
    const perluPerbaikan = processedData.filter(kos => kos.kategori === 'Perlu Perbaikan').length;

    document.getElementById('totalIndekos').textContent = totalIndekos;
    document.getElementById('totalPenghuni').textContent = totalPenghuni;
    document.getElementById('rataRataSkor').textContent = rataRataSkor;
    document.getElementById('perluPerbaikan').textContent = perluPerbaikan;
}

// Create category pie chart
function createCategoryChart() {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    
    const categoryData = {
        'Baik': processedData.filter(d => d.kategori === 'Baik').length,
        'Sedang': processedData.filter(d => d.kategori === 'Sedang').length,
        'Perlu Perbaikan': processedData.filter(d => d.kategori === 'Perlu Perbaikan').length
    };

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                data: Object.values(categoryData),
                backgroundColor: ['#A4B465', '#F5ECD5', '#F0BB78'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Create aspect bar chart
function createAspectChart() {
    const ctx = document.getElementById('aspectChart').getContext('2d');
    
    const aspects = ['Air Bersih', 'Limbah', 'Sampah', 'Toilet', 'Lingkungan'];
    const scores = aspects.map(aspect => {
        const key = `skor${aspect.replace(' ', '')}`;
        return Math.round(processedData.reduce((sum, kos) => sum + kos[key], 0) / processedData.length);
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: aspects,
            datasets: [{
                label: 'Skor Rata-rata',
                data: scores,
                backgroundColor: '#626F47',
                borderColor: '#fff',
                borderWidth: 1
            }, {
                label: 'Target',
                data: [85, 85, 85, 85, 85],
                backgroundColor: '#A4B465',
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            }
        }
    });
}

// Create type distribution chart
function createTypeDistributionChart() {
    const ctx = document.getElementById('typeDistChart').getContext('2d');
    
    const types = ['Perempuan', 'Laki-laki', 'Campuran'];
    const counts = types.map(type => processedData.filter(d => d.jenis === type).length);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: types,
            datasets: [{
                label: 'Jumlah Indekos',
                data: counts,
                backgroundColor: '#F0BB78',
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Create type score chart
function createTypeScoreChart() {
    const ctx = document.getElementById('typeScoreChart').getContext('2d');
    
    const types = ['Perempuan', 'Laki-laki', 'Campuran'];
    const avgScores = types.map(type => {
        const kosOfType = processedData.filter(d => d.jenis === type);
        if (kosOfType.length === 0) return 0;
        return Math.round(kosOfType.reduce((sum, kos) => sum + kos.skorTotal, 0) / kosOfType.length);
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: types,
            datasets: [{
                label: 'Rata-rata Skor',
                data: avgScores,
                backgroundColor: '#F5ECD5',
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Rata-rata Skor: ${context.parsed.y}%`;
                        }
                    }
                }
            }
        }
    });
}

// Fill data table
function fillDataTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    processedData.forEach(kos => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="font-weight: 500; color: #1f2937;">${kos.nama}</td>
            <td>${kos.jenis}</td>
            <td>${kos.penghuni}</td>
            <td>${Math.round(kos.skorTotal)}</td>
            <td>
                <span class="status-badge ${getStatusClass(kos.kategori)}">
                    ${kos.kategori}
                </span>
            </td>
            <td>
                <i data-lucide="${kos.skorTotal >= 80 ? 'check-circle' : 'x-circle'}" 
                   class="status-icon ${kos.skorTotal >= 80 ? 'good' : 'bad'}"></i>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Reinitialize Lucide icons for the new table content
    lucide.createIcons();
}

// Get status class for badges
function getStatusClass(kategori) {
    switch (kategori) {
        case 'Baik': return 'status-baik';
        case 'Sedang': return 'status-sedang';
        case 'Perlu Perbaikan': return 'status-buruk';
        default: return 'status-sedang';
    }
}

// Update current date
function updateDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Jakarta'
    };
    const dateString = now.toLocaleDateString('id-ID', options);
    document.getElementById('currentDate').textContent = dateString;
}

// Panggil pertama kali
updateDate();

// Update setiap 60 detik (opsional)
setInterval(updateDate, 60000);

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);