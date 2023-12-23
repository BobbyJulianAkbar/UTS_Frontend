const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container py-4 text-center border-t-[1px] border-gray-400">
        <span className="text-sm text-gray-400">
          Pinjam Buku &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
