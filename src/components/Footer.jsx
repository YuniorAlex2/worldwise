import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <p className={style.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}

export default Footer;
