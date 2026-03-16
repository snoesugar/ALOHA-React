import { Link, Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const FrontLayout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
          <img src={`${import.meta.env.BASE_URL}logo-aloha.svg`} alt="index" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <span className="material-symbols-outlined align-middle">
                    language
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button 
                      className={`dropdown-item ${i18n.language === 'en' ? 'active' : ''}`} 
                      onClick={() => i18n.changeLanguage('en')}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`dropdown-item ${i18n.language === 'zh' ? 'active' : ''}`} 
                      onClick={() => i18n.changeLanguage('zh')}
                    >
                      中文
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{t('sign-up')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{t('login')}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    
    </> 

  );
};

export default FrontLayout;