const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`bg-black/50 text-center p-2 `}>
      &copy; {currentYear} Chromatic Threads
    </div>
  );
};
export default Footer;
