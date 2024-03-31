let isPushEnabled = false

export function VerifySend({ title, message }) {

    // Request permission for push notifications
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            
            // Register service worker
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('Service Worker registered.');
                        isPushEnabled = true;
                        Push({ title: title, message: message })
                    })
                    .catch((error) => {
                        console.error('Service Worker registration failed:', error);
                    });
            } else {
                console.warn('Push messaging is not supported');
            }
        }
    });

}

function Push({ title, message }) {
    if (isPushEnabled) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title, {
                body: message,
                icon: '/icon-192x192.png',
            });
        });
    } else {
        console.error('Service Worker not enabled.');
    }
}