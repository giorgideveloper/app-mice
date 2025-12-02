"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import NavbarLink from "./NavbarLink";
import NavbarLang from "./NavbarLang";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

export default function Navbar({ lang, menu, dict, footerData }) {
  console.log("Navbar footerData:", footerData);
  if (!menu || menu.length === 0) {
    return null;
  }

  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-light ${styles.navbar}`}
      >
        <div className="container align-items-end py-2">
          <div className={`navbar-brand  ${styles.brand}`}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/${lang}`;
              }}
              href={`/${lang}`}
            >
              <Image src="/logo.svg" alt="logo" width={130} height={100} />
            </Link>

            <Link href={footerData?.downloadable_files[0]?.file} target="blank">
              {" "}
              <span
                style={{ fontFamily: "firaGo" }}
                className={styles.navbarPosition}
              >
                {footerData?.downloadable_files[0]?.title} <IoMdDownload />
              </span>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menu?.map((item) => (
                <NavbarLink
                  key={item.id}
                  href={item.href}
                  className="nav-link"
                  dropdown={item.children}
                  parent={item.id}
                  id={item.id}
                  lang={lang}
                >
                  {item.name}
                </NavbarLink>
              ))}
            </ul>
            <Button>
              <a href="https://visitbatumi.com/ka"> {dict?.button?.main}</a>
            </Button>
            <NavbarLang className={styles.lang} lang={lang} />
          </div>
        </div>
      </nav>
    </>
  );
}
