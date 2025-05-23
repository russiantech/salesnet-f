export const ShowSigninCanvas = () => {
    const canvasElement = document.getElementById('quickSigninCanvas');
    if (canvasElement) {
        const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
        existingBackdrops.forEach(backdrop => backdrop.remove());
        const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
        offcanvas.show();
    }
};
