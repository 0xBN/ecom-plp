const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`bg-black/50 text-center p-2 `}>
      &copy; {currentYear} Chromatic Threads
    </footer>
  );
};
export default Footer;
