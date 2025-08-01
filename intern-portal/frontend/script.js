 function loadData() {
  fetch('http://localhost:3000/api/dashboard')
    .then(res => res.json())
    .then(data => {
      document.getElementById('name').innerText = data.name;
      document.getElementById('referral').innerText = data.referralCode;
      document.getElementById('donations').innerText = data.donations;
    });
}

