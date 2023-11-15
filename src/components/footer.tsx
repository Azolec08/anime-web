import "../style/footer.scss";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="image_container">
        <img src="./logo/facebook.png" alt="" />
        <img src="./logo/gmail.png" alt="" />
      </div>
      <div className="links">
        <h6>Contacts</h6>
        <span>Mark Angelo Celoza</span>
        <span>markangeloceloza380@gmail.com</span>
      </div>
      <div className="copyright">
        <span>&copy;2023 Mark Angelo Celoza | All Rights Reserved</span>
      </div>
    </div>
  );
}
