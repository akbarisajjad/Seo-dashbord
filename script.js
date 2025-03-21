document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('expanded');
    document.getElementById('mainContent').classList.toggle('expanded');
});

const ctx = document.getElementById('performanceChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12/1/23', '2/14/24', '4/29/24', '7/12/24', '9/25/24'],
        datasets: [{
            label: 'کلیک‌ها',
            data: [50, 30, 60, 70, 10],
            borderColor: 'blue',
            fill: false
        }, {
            label: 'ایمپرشن‌ها',
            data: [1000, 700, 1200, 1500, 300],
            borderColor: 'purple',
            fill: false
        }]
    }
});

flatpickr("#dateFilter", { mode: "range", dateFormat: "Y-m-d" });
