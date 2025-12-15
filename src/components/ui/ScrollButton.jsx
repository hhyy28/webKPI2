import { useScroll } from '../../hooks/useScroll';

const ScrollButton = () => {
  const { isVisible, scrollToTop } = useScroll();

  return (
    <button
      className={`scroll-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ⬆ Вгору
    </button>
  );
};

export default ScrollButton;