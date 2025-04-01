let observers = [];

const state = {
    is_loading: [],
    modal: {
        show: false,
        message: '',
        type: ''
    }
};

function notifyObservers(message) {
    observers.forEach(o => {
        o(message);
    });
}

export const NotificationService = {
    subscribe(observer) {
        if (observers.indexOf(observer) === -1) {
            observers.push(observer);
        }
    },
    unsubscribe(observer) {
        if (observers.includes(observer)) {
            observers = observers.filter(o => o !== observer);
        }
    },

    setIsLoading(bool) {
        state.is_loading = bool ? state.is_loading + 1 : state.is_loading - 1;
    },

    showDialog(message, type = 'primary') {
        state.modal = { show: true, message, type };
        notifyObservers(state.modal);
    },

    closeDialog() {
        state.modal.show = false;
        notifyObservers(state.modal);
    }
};
