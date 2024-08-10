// Import required modules
import Image from "next/image";
import Link from "next/link";

// Home component
const Home = () => {
  return (
    <main className="bg-blue-900" style={{ cursor: "url(/cursorblues.png), auto"}}>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 h-16 flex items-center">
          <Image
            src={"/totoro_nobg.png"}
            alt="Foto Profil"
            width={50}
            height={50}
            className="rounded-full ml-4"
          />
          <div className="p-4">
            <ul className="text-white flex justify-end">
              <li className="shadow-lg" style={{ margin: "0 1rem", fontWeight: "bold", backgroundColor: "bg-blue-900" }}>
                <Link href="#profile">Profile</Link>
              </li>
              <li className="shadow-lg" style={{ margin: "0 1rem", fontWeight: "bold", backgroundColor: "bg-blue-900" }}>
                <Link href="#hobby">Skill</Link>
              </li>
              <li className="shadow-lg" style={{ margin: "0 1rem", fontWeight: "bold", backgroundColor: "bg-blue-900" }}>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li className="shadow-lg" style={{ margin: "0 1rem", fontWeight: "bold", backgroundColor: "bg-blue-900" }}>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-6xl font-bold">Welcome to Hazim Portfolio</h1>
        <p className="text-white text-lg">Scroll down to learn more about me!</p>
      </div>
    </main>
  );
};

// Profile component
const Profile = () => {
  return (
    <div className="flex flex-col bg-blue-900 h-screen" style={{ cursor: "url(/cursorblues.png), auto"}}>
      <div className="flex flex-row">
        <Image
          src={"/fotoportofoliofix.jpg"}
          alt="Foto Profil"
          width={400}
          height={400}
          className="rounded-full mt-4 ml-10"
        />
        <h2 className="headersize headersize:hover ml-5" style={{ color: "white", fontWeight: "bold", fontFamily: "sans-serif", fontStyle: "italic" }}>
          My Profile
        </h2>
      </div>
      <p className="mt-4 ml-40 " style={{ color: "white", fontFamily: "sans-serif", fontStyle: "italic" }}>
        Hello, my name is Muhammad Hazim Ramadhan Prajoda and I'm a college student at Institut Teknologi Bandung. 
        I'm currently studying Informatics Engineering and I'm in my 2nd year as of now. While in High School I still don't know where to continue my study,
        I choose ITB because it seems like a good place for me to learn and grow. Although I choose this major, I'm quite struggling with a lot of coding and programming, 
        but I'm still trying to learn and improve myself.
      </p>
      <p className="mt-4 ml-40 " style={{ color: "white", fontFamily: "sans-serif", fontStyle: "italic" }}>
        Right now I'm interested in learning more about web development and programming, I'm still learning and trying to improve my skills in this field.
        I'm also interested in Cybersecurity but I'm still at the starting point right now. 
      </p>
      <p className="mt-4 ml-40 " style={{ color: "white", fontFamily: "sans-serif", fontStyle: "italic" }}>
        One of my achievement is getting to ITB through the SNBT test, I'm quite proud of it because I'm the first person in my family to get into ITB.
      </p>
    </div>
  );
};


const Skill = () => {
  return (
    <div className="bg-blue-900 justify-center" style={{ cursor: "url(/cursorblues.png), auto"}}>
      <h1 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "sans-serif", textAlign: "center" }}>My Talents and Skills</h1>
      <div className="flex flex-row justify-center">
        <div className="talent-item marginlarge">
          <h2 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Mathematics</h2>
          <Image src="/mathimg.jpg" alt="Mathematics" className="justify-center" style={{ width: "100px", height: "150px" }} />
          <p>My math skills is on a mid to high level for 1st year college student, I'm quite confident with it although not to the point 
            where I can say I'm a math genius
          </p>
        </div>
        <div className="talent-item marginlarge">
          <h2 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Memorizing</h2>
          <Image src="/memorizing.png" alt="Memorizing" style={{ width: "100px", height: "150px" }} />
          <p>I can memorize something fast if I deem it something important enough.</p>
        </div>
      </div>
    </div>
  );
};

// Portfolio component
const Portfolio = () => {
  return (
    <div className="bg-blue-900 pt-40 justify-center" style={{ cursor: "url(/cursorblues.png), auto"}}>
      <h1 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "sans-serif", textAlign: "center" }}>My Portfolio</h1>
      <p className="text-white pl-10">Check out my project:</p>
      <ul className="text-white flex justify-center">
        <li className="marginlarge">
          <Image src="/project1.jpg" alt="Project 1" className="items-center" style={{ width: "200px", height: "200px" }} />
          <p>One of my team "Weapon Creation" project for the GST Fest 23, it was making some props for cosplay.</p>
        </li>
      </ul>
    </div>
  );
};

// Contact component
const Contact = () => {
  return (
    <div className="bg-blue-900 pt-40 justify-center" style={{ cursor: "url(/cursorblues.png), auto"}}>
      <h1 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "sans-serif", textAlign: "center" }}>Contact Me</h1>
      <p className="text-white pl-10 ">You can reach out to me through the following channels:</p>
      <ul className="text-white flex justify-center">
        <li style={{ fontWeight: "bold", display: "flex", flexDirection: "row" }}>
          Media: 
          <a href="https://www.linkedin.com/in/muhammadhazimrp" target="_blank" rel="noopener noreferrer">
            <img src="/linkedinlogo.png" alt="Contact Image" className="contactlogo mt-4" />
          </a>
          <a href="https://github.com/HARUDe" target="_blank" rel="noopener noreferrer">
            <img src="/githublogo.png" alt="Contact Image" className="contactlogo contactlogo:hover mt-4" />
          </a>
        </li>
      </ul>
    </div>
  );
};

// Page component
const Page = () => {
  return (
    <>
      <Home />
      <section id="profile">
        <Profile />
      </section>
      <section id="hobby">
        <Skill />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Page;
