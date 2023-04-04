import Footer from '../navigation/Footer';
import Header from '../navigation/Header';

function CategoryLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default CategoryLayout;
