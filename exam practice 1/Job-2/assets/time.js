const updateDate = () => {
    const now = new Date()
    document.getElementById('datetime').textContent = now.toLocaleString();
}

setInterval(updateDate, 1000)