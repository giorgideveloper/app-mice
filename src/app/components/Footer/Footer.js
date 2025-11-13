import Image from "next/image";
import style from "./Footer.module.css";
import FooterDes from "./FooterDes";
import FooterLink from "./FooterLink";
import FooterApp from "./FooterApp";

export default function Footer({data, dict, lang}) {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-5 mt-4">
                <FooterDes data={data.footer_logos}  lang={lang}/>
            </div>
            <div className="col-12 col-lg-5 mt-4">
                <FooterLink data={data.footer_menu} dict={dict} />
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <FooterApp dict={dict} />
            </div>
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
