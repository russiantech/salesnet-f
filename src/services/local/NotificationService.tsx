// NotificationService.tsx

type NotificationObserver = (message: ModalState) => void;

interface ModalState {
  show: boolean;
  message: string;
  type: string;
}

interface ServiceState {
  is_loading: number;
  modal: ModalState;
}

let observers: NotificationObserver[] = [];

const state: ServiceState = {
  is_loading: 0,
  modal: {
    show: false,
    message: '',
    type: ''
  }
};

function notifyObservers(message: ModalState): void {
  observers.forEach(observer => {
    observer(message);
  });
}

export const NotificationService = {
  subscribe(observer: NotificationObserver): void {
    if (observers.indexOf(observer) === -1) {
      observers.push(observer);
    }
  },

  unsubscribe(observer: NotificationObserver): void {
    if (observers.includes(observer)) {
      observers = observers.filter(o => o !== observer);
    }
  },

  setIsLoading(bool: boolean): void {
    state.is_loading = bool ? state.is_loading + 1 : state.is_loading - 1;
  },

  showDialog(message: string, type: string = 'primary'): void {
    state.modal = { show: true, message, type };
    notifyObservers(state.modal);
  },

  closeDialog(): void {
    state.modal.show = false;
    notifyObservers(state.modal);
  },

  getState(): ServiceState {
    return state;
  }
};