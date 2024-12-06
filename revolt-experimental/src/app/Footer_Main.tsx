
import Image from "next/image";
import Link from "next/link";
import footer_styles from "@/styles/Footer.module.scss";

function Footer() {

  return (
    <footer className={footer_styles.footer}>
      <div className={footer_styles.footer_image}>
        <Image 
          src='/revolt_logo.png'
          alt="ReVOLT Logo"
          width={200}
          height={50}
          className={footer_styles.responsive_image}
        />
      </div>

      <div className={footer_styles.footer_text}>
        <p className={footer_styles.f_t_1}>2500 University Dr NW, Calgary</p>
        <p className={footer_styles.f_t_1}> Copyright © 2024 ReVOLT</p>
        <p className={footer_styles.f_t_1}>All right reserved</p>
      </div>

      <div className={footer_styles.footer_socials}>
          {/* <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/uofc_icon.png" 
              alt="Facebook"
              width={30}
              height={30}
              className={footer_styles.social_icon}
            />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/gmail_icon.png" 
              alt="Twitter"
              width={30}
              height={30}
              className={footer_styles.social_icon}
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/instagram_icon.png" 
              alt="Instagram"
              width={30}
              height={30}
              className={footer_styles.social_icon}
            />
          </Link> */}
          <Link href="https://www.linkedin.com/company/revolt-ev/about/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkedin_icon.png" 
              alt="LinkedIn"
              width={30}
              height={30}
              className={footer_styles.social_icon}
            />
          </Link>
      </div>
    </footer>
  );
}

export default Footer;