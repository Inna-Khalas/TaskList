const Layout = ({ children }) => {
  return (
    <main className="h-screen min-h-screen flex flex-col justify-start bg-white pt-36 p-6 px-4 sm:px-6 md:px-8">
      {children}
    </main>
  );
};
export default Layout;
