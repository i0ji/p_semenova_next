export default function scrollToSide(direction: string) {
  switch (direction) {
    case 'top':
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      break;

    case 'bottom':
      window.scrollTo({
        top: document.body.scrollHeight + 600,
        behavior: 'smooth'
      });
      break;
  }
}
