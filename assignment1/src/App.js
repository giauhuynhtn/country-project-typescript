import images from './assets/images';
import Header from './components/Header';
import AboutSection from './components/About';
import Services from './components/Services';
// import TechStack from './components/TechStack';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';

function App() {
    return (
        <GlobalStyles>
            <div className="App">
                <Header logo={images.logo} />
                <AboutSection aboutImg={images.ownerImg} />
                <Services />
                {/* <TechStack /> */}
                <Blogs img={images.blogImg} />
                <Contact />
                <Footer
                    fbLogo={images.facebookLogo}
                    linkedInLogo={images.linkedinLogo}
                    twitterLogo={images.twitterLogo}
                />
            </div>
        </GlobalStyles>
    );
}

export default App;
