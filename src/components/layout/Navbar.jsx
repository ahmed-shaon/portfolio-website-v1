import {useState, useEffect} from 'react';
import {Code, Menue, X} from "lucide-react";
import {NAV_LINKS, PERSONAL_INFO} from "../../utils/constant";

const Navbar = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <div>Navbar</div>
  )
}

export default Navbar