/**
 * @copyright 2024 Zhenghong Chen 
 * @license Apache-2.0
*/

/**
 * Node modules
 */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.
        offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.
        offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.
        offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.
        offsetHeight + 'px';
    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(event.target.getAttribute('href'));

      // Smoothly scroll to the section
      targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });

      // Handle active link box positioning
      lastActiveLink.current?.classList.remove('active');
      event.target.classList.add('active');
      lastActiveLink.current = event.target;

      // Previously highlighted link adjust by click, now adjust by scrolling
      // activeBox.current.style.top = event.target.offsetTop + 'px';
      // activeBox.current.style.left = event.target.offsetLeft + 'px';
      // activeBox.current.style.width = event.target.offsetWidth + 'px';
      // activeBox.current.style.height = event.target.offsetHeight + 'px';
  }

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Courses',
          link: '#courses',
          className: 'nav-link'
        },
        {
          label: 'Skills',
          link: '#skills',
          className: 'nav-link'
        },
        {
          label: 'Experience',
          link: '#experience',
          className: 'nav-link'
        },
        {
          label: 'Projects',
          link: '#projects',
          className: 'nav-link'
        },
        // {
        //   label: 'Reviews',
        //   link: '#reviews',
        //   className: 'nav-link'
        // },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

      useEffect(() => {
        const handleScroll = () => {
          const sections = navItems.map(item => 
            document.querySelector(item.link)
          );
          
          const scrollPosition = window.scrollY + 100;
          const pageBottom = window.innerHeight + window.scrollY;
          const footer = document.querySelector('footer');
      
          // If we're at the footer, keep Work section highlighted, -53px to account for the footer height
          if (footer && pageBottom >= document.documentElement.scrollHeight - 53) {
            const workLink = document.querySelector('a[href="#work"]');
            lastActiveLink.current?.classList.remove('active');
            workLink.classList.add('active');
            lastActiveLink.current = workLink;
      
            activeBox.current.style.top = workLink.offsetTop + 'px';
            activeBox.current.style.left = workLink.offsetLeft + 'px';
            activeBox.current.style.width = workLink.offsetWidth + 'px';
            activeBox.current.style.height = workLink.offsetHeight + 'px';
            return;
          }
      
          sections.forEach((section, index) => {
            if (!section) return;
            
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              lastActiveLink.current?.classList.remove('active');
              const newActiveLink = document.querySelector(`a[href="${navItems[index].link}"]`);
              newActiveLink.classList.add('active');
              lastActiveLink.current = newActiveLink;
      
              activeBox.current.style.top = newActiveLink.offsetTop + 'px';
              activeBox.current.style.left = newActiveLink.offsetLeft + 'px';
              activeBox.current.style.width = newActiveLink.offsetWidth + 'px';
              activeBox.current.style.height = newActiveLink.offsetHeight + 'px';
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [navItems]);
      


  return (
    <nav className={'navbar ' + (navOpen ? 'active': '')}>
        {
            navItems.map(({ label, link, className, ref}, key) => (
            <a 
                href={link} 
                key={key}
                ref={ref}
                className={className}
                onClick={activeCurrentLink}
            >
                {label}
            </a>
        ))
        }
        <div 
            className="active-box"
            ref={activeBox}
        ></div>
    </nav>
  )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar