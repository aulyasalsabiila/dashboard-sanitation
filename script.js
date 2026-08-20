/* ════════════════════════════════
   DATA
════════════════════════════════ */
const kosData = [
  { nama: "Kos Melati",    jenis: "Putri",  penghuni: 14, skor: 82, aspek: [85,80,78,88,82] },
  { nama: "Kos Kenanga",   jenis: "Putra",  penghuni: 12, skor: 68, aspek: [70,65,72,68,65] },
  { nama: "Kos Mawar",     jenis: "Campur", penghuni: 18, skor: 91, aspek: [92,90,88,94,91] },
  { nama: "Kos Dahlia",    jenis: "Putri",  penghuni: 10, skor: 55, aspek: [58,52,50,60,55] },
  { nama: "Kos Anggrek",   jenis: "Putra",  penghuni: 15, skor: 74, aspek: [75,72,70,78,75] },
  { nama: "Kos Flamboyan", jenis: "Campur", penghuni: 16, skor: 88, aspek: [90,86,85,92,87] },
  { nama: "Kos Teratai",   jenis: "Putri",  penghuni: 11, skor: 45, aspek: [48,42,44,50,41] },
  { nama: "Kos Lotus",     jenis: "Putra",  penghuni: 9,  skor: 78, aspek: [80,75,76,82,77] },
  { nama: "Kos Sakura",    jenis: "Campur", penghuni: 9,  skor: 63, aspek: [65,60,62,68,60] },
];

function getKategori(s) {
  if (s >= 80) return { label: 'Baik',   cls: 'badge-good' };
  if (s >= 60) return { label: 'Sedang', cls: 'badge-mid'  };
  return              { label: 'Buruk',  cls: 'badge-bad'  };
}
function getStatus(s) {
  if (s >= 80) return { label: 'Memenuhi Syarat',    cls: 'badge-good' };
  if (s >= 60) return { label: 'Perlu Perhatian',    cls: 'badge-mid'  };
  return              { label: 'Tidak Memenuhi',     cls: 'badge-bad'  };
}
function scoreColor(s) {
  if (s >= 80) return '#a4b465';
  if (s >= 60) return '#d4a853';
  return '#c97b7b';
}

/* ════════════════════════════════
   TABLE
════════════════════════════════ */
const tbody = document.getElementById('tableBody');
kosData.forEach(k => {
  const kat = getKategori(k.skor);
  const st  = getStatus(k.skor);
  const col = scoreColor(k.skor);
  tbody.innerHTML += `
    <tr>
      <td class="name">${k.nama}</td>
      <td class="center"><span class="badge badge-type">${k.jenis}</span></td>
      <td class="center">${k.penghuni}</td>
      <td class="center">
        <div class="score-bar-wrap">
          <div class="score-bar">
            <div class="score-fill" style="width:${k.skor}%;background:${col}"></div>
          </div>
          <span class="score-num">${k.skor}</span>
        </div>
      </td>
      <td class="center"><span class="badge ${kat.cls}">${kat.label}</span></td>
      <td class="center"><span class="badge ${st.cls}">${st.label}</span></td>
    </tr>`;
});

/* ════════════════════════════════
   DATE
════════════════════════════════ */
const now = new Date();
const opts = { day:'2-digit', month:'short', year:'numeric' };
const dateStr = now.toLocaleDateString('id-ID', opts);
document.getElementById('currentDate').textContent = dateStr;
document.getElementById('footerDate').textContent  = 'Data diperbarui: ' + dateStr;

/* ════════════════════════════════
   CHART DEFAULTS
════════════════════════════════ */
Chart.defaults.color = '#6a6660';
Chart.defaults.borderColor = 'rgba(255,255,255,.06)';
Chart.defaults.font.family = "'DM Sans', sans-serif";

const COLORS = {
  sage:  '#a4b465',
  sage2: 'rgba(164,180,101,.25)',
  amber: '#d4a853',
  rose:  '#c97b7b',
  sky:   '#7bafc9',
  lilac: '#9b8abf',
};

/* ── Category Chart (doughnut) ── */
const catCounts = [
  kosData.filter(k => k.skor >= 80).length,
  kosData.filter(k => k.skor >= 60 && k.skor < 80).length,
  kosData.filter(k => k.skor < 60).length,
];
new Chart(document.getElementById('categoryChart'), {
  type: 'doughnut',
  data: {
    labels: ['Baik (≥80)', 'Sedang (60-79)', 'Buruk (<60)'],
    datasets: [{
      data: catCounts,
      backgroundColor: [COLORS.sage, COLORS.amber, COLORS.rose],
      borderColor: '#0e0f0d',
      borderWidth: 3,
      hoverOffset: 6,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    cutout: '68%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#a8a49c', font: { size: 11 },
          padding: 16,
          usePointStyle: true, pointStyleWidth: 8,
        }
      },
      tooltip: {
        backgroundColor: '#181a17',
        borderColor: 'rgba(255,255,255,.1)',
        borderWidth: 1,
        titleColor: '#e8e6e0',
        bodyColor: '#a8a49c',
        padding: 12,
      }
    }
  }
});

/* ── Aspect Chart (bar) ── */
const aspekLabels = ['Air Bersih', 'Toilet', 'Sampah', 'Drainase', 'Ventilasi'];
const aspekAvg = aspekLabels.map((_, i) =>
  Math.round(kosData.reduce((s, k) => s + k.aspek[i], 0) / kosData.length)
);
new Chart(document.getElementById('aspectChart'), {
  type: 'bar',
  data: {
    labels: aspekLabels,
    datasets: [{
      label: 'Skor rata-rata',
      data: aspekAvg,
      backgroundColor: [COLORS.sage, COLORS.sky, COLORS.amber, COLORS.lilac, COLORS.rose]
        .map(c => c + (c.startsWith('rgba') ? '' : 'cc')),
      borderColor: 'transparent',
      borderRadius: 6,
      borderSkipped: false,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#181a17',
        borderColor: 'rgba(255,255,255,.1)',
        borderWidth: 1,
        titleColor: '#e8e6e0',
        bodyColor: '#a8a49c',
        padding: 12,
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#6a6660', font: { size: 11 } } },
      y: {
        min: 0, max: 100,
        grid: { color: 'rgba(255,255,255,.05)' },
        ticks: { color: '#6a6660', font: { size: 11 }, stepSize: 20 }
      }
    }
  }
});

/* ── Type Distribution (doughnut) ── */
const jenisCount = ['Putri','Putra','Campur'].map(j => kosData.filter(k=>k.jenis===j).length);
new Chart(document.getElementById('typeDistChart'), {
  type: 'doughnut',
  data: {
    labels: ['Kos Putri','Kos Putra','Kos Campur'],
    datasets: [{
      data: jenisCount,
      backgroundColor: [COLORS.rose, COLORS.sky, COLORS.amber],
      borderColor: '#0e0f0d',
      borderWidth: 3,
      hoverOffset: 6,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    cutout: '68%',
    plugins: {
      legend: {
        position: 'right',
        labels: { color: '#a8a49c', font:{size:11}, padding:16, usePointStyle:true, pointStyleWidth:8 }
      },
      tooltip: {
        backgroundColor:'#181a17', borderColor:'rgba(255,255,255,.1)', borderWidth:1,
        titleColor:'#e8e6e0', bodyColor:'#a8a49c', padding:12,
      }
    }
  }
});

/* ── Type Score (horizontal bar) ── */
const jenisLabel = ['Putri','Putra','Campur'];
const jenisAvg = jenisLabel.map(j => {
  const arr = kosData.filter(k=>k.jenis===j);
  return Math.round(arr.reduce((s,k)=>s+k.skor,0)/arr.length);
});
new Chart(document.getElementById('typeScoreChart'), {
  type: 'bar',
  data: {
    labels: jenisLabel.map(j=>'Kos '+j),
    datasets: [{
      label: 'Rata-rata Skor',
      data: jenisAvg,
      backgroundColor: [COLORS.rose+'cc', COLORS.sky+'cc', COLORS.amber+'cc'],
      borderColor: 'transparent',
      borderRadius: 6,
      borderSkipped: false,
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor:'#181a17', borderColor:'rgba(255,255,255,.1)', borderWidth:1,
        titleColor:'#e8e6e0', bodyColor:'#a8a49c', padding:12,
      }
    },
    scales: {
      x: {
        min: 0, max: 100,
        grid: { color: 'rgba(255,255,255,.05)' },
        ticks: { color:'#6a6660', font:{size:11}, stepSize:20 }
      },
      y: {
        grid: { display: false },
        ticks: { color:'#a8a49c', font:{size:12} }
      }
    }
  }
});