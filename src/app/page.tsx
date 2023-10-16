import Header from "./components/organisms/Header/header"
import Banner from "./components/organisms/Banner/banner"
import Footer from "./components/organisms/Footer/footer"
import Car from "./components/organisms/Cars/cards"

export default function Home() {
  const bannerUrl = '/inicio2.jpg'
  return (
   <>
    <Header/>
    <main >

    <Banner url={bannerUrl}/>
    <Car/>
    </main>

    <Footer/>
   </>
  );
}
