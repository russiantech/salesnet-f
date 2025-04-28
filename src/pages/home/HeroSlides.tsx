import { useEffect } from 'react';

const HeroSlides = () => {
  useEffect(() => {
    // Check if the swiper DOM is ready
    const mainEl = document.querySelector('.swiper[data-swiper-main]');
    const imageEl = document.querySelector('#sliderImages');

    if (!mainEl || !imageEl) return;

    const mainSlider = new window.Swiper(mainEl, {
      spaceBetween: 64,
      loop: true,
      speed: 400,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      controller: {
        control: null
      }
    });

    const imageSlider = new window.Swiper(imageEl, {
      allowTouchMove: false,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });

    mainSlider.controller.control = imageSlider;
    imageSlider.controller.control = mainSlider;
  }, []);

  return (

        <section className="container pt-4">
            <div className="row">
                <div className="col-lg-9 offset-lg-3">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" style={{ background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)' }} />
                        <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" style={{ background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)' }} />
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-xl-5 col-xxl-4 offset-xxl-1 d-flex align-items-center mt-xl-n3">
                                {/* Text content master slider */}
                                <div className="swiper px-5 pe-xl-0 ps-xxl-0 me-xl-n5 swiper-initialized swiper-horizontal swiper-backface-hidden"
                                // data-swiper="{
                                //     &quot;spaceBetween&quot;: 64,
                                //     &quot;loop&quot;: true,
                                //     &quot;speed&quot;: 400,
                                //     &quot;controlSlider&quot;: &quot;#sliderImages&quot;,
                                //     &quot;autoplay&quot;: {
                                //     &quot;delay&quot;: 1000,
                                //     &quot;disableOnInteraction&quot;: false
                                //     },
                                //     &quot;scrollbar&quot;: {
                                //     &quot;el&quot;: &quot;.swiper-scrollbar&quot;
                                //     }
                                // }"
                                >
                                    <div className="swiper-wrapper" id="swiper-wrapper-bfb2c6fb56101059910" aria-live="off" style={{ transitionDuration: '400ms', transform: 'translate3d(-680px, 0px, 0px)' }}>
                                        <div className="swiper-slide text-center text-xl-start pt-5 py-xl-5 swiper-slide-next" role="group" aria-label="3 / 3" data-swiper-slide-index={2} style={{ width: '276px', marginRight: '64px' }}>
                                            <p className="text-body">Virtual reality glasses</p>
                                            <h2 className="display-4 pb-2 pb-xl-4">Experience New Reality</h2>
                                            <a className="btn btn-lg btn-primary" href="shop-catalog-electronics.html">
                                                Shop now
                                                <i className="ci-arrow-up-right fs-lg ms-2 me-n1" />
                                            </a>
                                        </div><div className="swiper-slide text-center text-xl-start pt-5 py-xl-5 swiper-slide-prev" role="group" aria-label="1 / 3" data-swiper-slide-index={0} style={{ width: '276px', marginRight: '64px' }}>
                                            <p className="text-body">Feel the real quality sound</p>
                                            <h2 className="display-4 pb-2 pb-xl-4">Headphones ProMax</h2>
                                            <a className="btn btn-lg btn-primary" href="./single_product.html">
                                                Shop now
                                                <i className="ci-arrow-up-right fs-lg ms-2 me-n1" />
                                            </a>
                                        </div><div className="swiper-slide text-center text-xl-start pt-5 py-xl-5 swiper-slide-active" role="group" aria-label="2 / 3" data-swiper-slide-index={1} style={{ width: '276px', marginRight: '64px' }}>
                                            <p className="text-body">Deal of the week</p>
                                            <h2 className="display-4 pb-2 pb-xl-4">Powerful iPad Pro M2</h2>
                                            <a className="btn btn-lg btn-primary" href="./single_product.html">
                                                Shop now
                                                <i className="ci-arrow-up-right fs-lg ms-2 me-n1" />
                                            </a>
                                        </div></div>
                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                            </div>
                            <div className="col-9 col-sm-7 col-md-6 col-lg-5 col-xl-7">
                                {/* Binded images (controlled slider) */}
                                <div className="swiper user-select-none swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden" id="sliderImages"
                                // data-swiper="{
                                //     &quot;allowTouchMove&quot;: false,
                                //     &quot;loop&quot;: true,
                                //     &quot;effect&quot;: &quot;fade&quot;,
                                //     &quot;fadeEffect&quot;: {
                                //     &quot;crossFade&quot;: true
                                //     }
                                // }"
                                >
                                    <div className="swiper-wrapper" id="swiper-wrapper-608510074584605ab" aria-live="polite" style={{ transitionDuration: '400ms' }}>
                                        <div className="swiper-slide d-flex justify-content-end swiper-slide-next" role="group" aria-label="3 / 3" data-swiper-slide-index={2} style={{ width: '273px', opacity: 0, transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '400ms' }}>
                                            <div className="ratio rtl-flip" style={{ maxWidth: '495px', "--cz-aspect-ratio": 'calc(537 / 495 * 100%)' }}>
                                                <img src="assets/img/home/hero-slider/03.png" alt="Image" />
                                            </div>
                                        </div><div className="swiper-slide d-flex justify-content-end swiper-slide-prev" role="group" aria-label="1 / 3" data-swiper-slide-index={0} style={{ width: '273px', opacity: 0, transform: 'translate3d(-273px, 0px, 0px)', transitionDuration: '400ms' }}>
                                            <div className="ratio rtl-flip" style={{ maxWidth: '495px', "--cz-aspect-ratio": 'calc(537 / 495 * 100%)' }}>
                                                <img src="assets/img/home/hero-slider/01.png" alt="Image" />
                                            </div>
                                        </div><div className="swiper-slide d-flex justify-content-end swiper-slide-visible swiper-slide-fully-visible swiper-slide-active" role="group" aria-label="2 / 3" data-swiper-slide-index={1} style={{ width: '273px', opacity: 1, transform: 'translate3d(-546px, 0px, 0px)', transitionDuration: '400ms' }}>
                                            <div className="ratio rtl-flip" style={{ maxWidth: '495px', "--cz-aspect-ratio": 'calc(537 / 495 * 100%)' }}>
                                                <img src="assets/img/home/hero-slider/02.png" alt="Image" />
                                            </div>
                                        </div></div>
                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                            </div>
                        </div>
                        {/* Scrollbar */}
                        <div className="row justify-content-center" data-bs-theme="dark">
                            <div className="col-xxl-10">
                                <div className="position-relative mx-5 mx-xxl-0">
                                    <div className="swiper-scrollbar mb-4 swiper-scrollbar-horizontal"><div className="swiper-scrollbar-drag" style={{ transform: 'translate3d(96.0251px, 0px, 0px)', transitionDuration: '400ms', width: '77.9498px' }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSlides
