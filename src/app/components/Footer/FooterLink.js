
import style from './FooterLink.module.css';

export default function FooterLink() {
  return (
    <div>
        <div className={`row ${style.footerLinks}`}>
            <div className="col-lg-6">
                <h5>Our Other Websites</h5>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col-lg-6">
                <h5>Our Other Websites</h5>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
