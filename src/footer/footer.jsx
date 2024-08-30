import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const showForm = () => {
      setIsFormVisible(true);
    };
  
    const hideForm = () => {
      setIsFormVisible(false);
    };
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <div className="footer-left">
          <p>&copy; 2024 <span>Haseeb ur Rehman</span>. All rights reserved.</p>
        </div>
        
        <div className="form-card1">
      {!isFormVisible ? (
        <button className="show-form-btn" onClick={showForm}>
          Get In Touch
        </button>
      ) : (
        <div className="form-card2">
          <form className="form" action="https://api.web3forms.com/submit" method="POST">
            <p className="form-heading">Get In Touch</p>

            <div className="form-field">
              <input
                name='first-name'
                required
                placeholder="Name"
                className="input-field"
                type="text"
              />
            </div>

            <div className="form-field">
              <input
                name='email'
                required
                placeholder="Email"
                className="input-field"
                type="email"
              />
            </div>

            <div className="form-field">
              <textarea
                name='message'
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className="input-field"
              />
            </div>
            
            <input type="hidden" name="access_key" value="3cdd5cda-272f-4f81-99de-f078bd7aa928"/>
            <button type="submit" className="sendMessage-btn">Send Message</button>
            <button className="hide-form-btn show-form-btn" onClick={hideForm}>
              &larr; Back
            </button>
          </form>
        </div>
      )}
    </div>

        <ul className="example-2">
        <li className="icon-content">
          <a
            href="https://www.linkedin.com/in/haseeb-ur-rehman-b65a03233/"
            aria-label="LinkedIn"
            data-social="linkedin"
          >
            <div className="filled" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
              space="preserve"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                fill="currentColor"
              />
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a
            href="https://github.com/haseeburehman"
            aria-label="GitHub"
            data-social="github"
          >
            <div className="filled" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
              space="preserve"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                fill="currentColor"
              />
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.instagram.com/ranahaseeb.o_o?igsh=aHN3bnJhNW1oNm41"
            aria-label="Instagram"
            data-social="instagram"
          >
            <div className="filled" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
              space="preserve"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                fill="currentColor"
              />
            </svg>
          </a>
          <div className="tooltip">Instagram</div>
        </li>
        <li className="icon-content">
          <a
            href="https://whatsapp.com/dl/"
            aria-label="Youtube"
            data-social="youtube"
          >
            <div className="filled" />
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  className="bi bi-whatsapp"
  viewBox="0 0 16 16"
  space="preserve"
>
  <path
    d="M13.601 2.326A7.874 7.874 0 0 0 8.034 0a7.82 7.82 0 0 0-7.8 7.942c-.002 1.398.358 2.756 1.04 3.961L0 16l4.29-1.122c1.15.635 2.43.97 3.74.97h.004c4.356 0 7.917-3.56 7.926-7.942a7.917 7.917 0 0 0-2.359-5.58Zm-5.57 12.01h-.004c-1.236 0-2.448-.334-3.495-.967l-.25-.148-2.544.666.678-2.482-.163-.256a6.755 6.755 0 0 1-1.008-3.574 6.714 6.714 0 0 1 6.708-6.832c1.793.004 3.476.7 4.74 1.968a6.711 6.711 0 0 1 1.965 4.788c-.007 3.703-3.028 6.722-6.627 6.837Zm3.67-4.94c-.203-.102-1.198-.59-1.384-.656-.186-.065-.32-.097-.455.102-.133.194-.522.656-.64.791-.118.133-.236.15-.44.051-.203-.102-.855-.314-1.628-.998-.6-.534-1.002-1.195-1.12-1.397-.118-.204-.013-.315.089-.418l.196-.203c.101-.102.135-.18.202-.3.066-.118.033-.222-.017-.322-.05-.102-.454-1.095-.622-1.5-.165-.396-.333-.34-.454-.346-.117-.006-.252-.007-.386-.007a.738.738 0 0 0-.53.247c-.183.202-.697.68-.697 1.66s.714 1.926.813 2.057c.1.133 1.407 2.148 3.417 3.006.478.206.85.329 1.14.43.479.152.915.13 1.26.079.385-.057 1.198-.49 1.367-.96.168-.472.168-.878.117-.963-.05-.084-.186-.135-.387-.237Z"
    fill="currentColor"
  />
</svg>

          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
