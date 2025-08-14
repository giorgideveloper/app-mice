import Image from "next/image";
import style from "./Footer.module.css";
import FooterDes from "./FooterDes";
import FooterLink from "./FooterLink";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-5 mt-4">
                <FooterDes />
            </div>
            <div className="col-12 col-lg-5 mt-4">
                <FooterLink />
            </div>
            <div className="col-12 col-lg-2 mt-4"></div>
        </div>
        <div className="col-12">
             <div className={style.footerBottom}>
        <p>VisitBatumi</p>
        <p>© 2025 www.visitbatumi.com</p>

        <div className={style.socialIcons}>
          <a href="https://www.facebook.com/VisitBatumi" target="_blank" rel="noopener noreferrer"><Image src="/fb.svg" alt="Facebook" width={24} height={24} /></a>
          <a href="https://www.instagram.com/VisitBatumi" target="_blank" rel="noopener noreferrer"><Image src="/inst.svg" alt="Instagram" width={24} height={24} /></a>
          <a href="https://www.youtube.com/VisitBatumi" target="_blank" rel="noopener noreferrer"><Image src="/youtube.svg" alt="YouTube" width={24} height={24} /></a>
        </div>

      </div>
        </div>
        
      </div>
     
    </div>
  );
}
