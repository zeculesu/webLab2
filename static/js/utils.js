function showNotification(message) {
    const container = document.getElementById('notification-container');

    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    container.prepend(notification);

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}
