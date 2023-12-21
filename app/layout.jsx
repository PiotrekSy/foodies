import './globals.css';
import MainHeader from '../components/Header/MainHeader';
import HeaderBackground from '../components/Header/HeaderBackground';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <HeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
