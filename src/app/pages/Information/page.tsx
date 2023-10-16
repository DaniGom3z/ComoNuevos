import Banner from "@/app/components/organisms/Banner/banner";
import Header from "../../components/organisms/Header/header"
import Car from "../../components/organisms/Cars/cards"
import Footer from "../../components/organisms/Footer/footer"

export default function Home() {
    const bannerUrl = '/auto4.jpg'
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
  