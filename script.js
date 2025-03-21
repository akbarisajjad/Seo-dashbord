document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('expanded');
    document.getElementById('mainContent').classList.toggle('expanded');
});

const ctx = document.getElementById('performanceChart').getContext('2d');
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Load stats
        data.stats.forEach(stat => {
            const statBox = document.createElement('div');
            statBox.className = 'stat-box';
            statBox.innerHTML = `<p>${stat.value}</p><span>${stat.label}</span>`;
            document.getElementById('statsContainer').appendChild(statBox);
        });

        // Load chart
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.chart.labels,
                datasets: data.chart.datasets
            }
        });

        // Load queries table
        const tbody = document.getElementById('queriesTable').querySelector('tbody');
        data.queries.forEach(query => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${query.keyword}</td>
                             <td>${query.clicks}</td>
                             <td>${query.impressions}</td>
                             <td>${query.ctr}</td>
                             <td>${query.position}</td>`;
            tbody.appendChild(row);
        });
    });

flatpickr("#dateFilter", { mode: "range", dateFormat: "Y-m-d" });

// Google API setup
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: 'YOUR_API_KEY',
        clientId: 'YOUR_CLIENT_ID',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/webmasters/v3/rest"],
        scope: 'https://www.googleapis.com/auth/webmasters.readonly'
    }).then(() => {
        // Handle sign-in process
    });
}

document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = JSON.parse(e.target.result);
            // Process and display data
        };
        reader.readAsText(file);
    } else {
        alert("لطفاً یک فایل JSON انتخاب کنید.");
    }
});

handleClientLoad();
