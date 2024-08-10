document.addEventListener('DOMContentLoaded', function () {
    const updateLog = document.getElementById('update-log');
    const closeBtn = document.querySelector('.close-btn');

    // Check if update log has already been shown
    if (!localStorage.getItem('updateLogShown')) {
        updateLog.style.display = 'block';
    }

    // Close the update log and set local storage
    closeBtn.addEventListener('click', function () {
        updateLog.style.display = 'none';
        localStorage.setItem('updateLogShown', 'true');
    });
});
