import React, { useState } from 'react';

const About = () => {
  // भाषा बदलने के लिए स्टेट (डिफ़ॉल्ट: हिंदी)
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(lang === 'hi' ? 'en' : 'hi');
  };

  return (
    <div className="container my-4">
      {/* ऊपर का परिचय हिस्सा और भाषा बटन */}
      <div className="p-4 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-2">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h1 className="display-6 fw-bold text-primary mb-0">
              {lang === 'hi' ? 'About iNotebook' : 'About iNotebook'}
            </h1>
            {/* भाषा बदलने वाला बटन */}
            <button
              onClick={toggleLanguage}
              className="btn btn-outline-primary btn-sm fw-bold px-3 py-2"
            >
              🌐 {lang === 'hi' ? 'Switch to English' : 'हिंदी में देखें'}
            </button>
          </div>
          <p className="col-md-10 fs-5 text-muted mt-2">
            {lang === 'hi'
              ? 'iNotebook एक सुरक्षित और तेज़ क्लाउड-आधारित नोट्स ऐप है। यहाँ आप अपने दैनिक विचार, ज़रूरी काम और पर्सनल नोट्स को कभी भी और कहीं से भी सुरक्षित रख सकते हैं।'
              : 'iNotebook is a secure and fast cloud-based notes application. Here you can safely store your daily thoughts, important tasks, and personal notes anytime, anywhere.'}
          </p>
        </div>
      </div>

      {/* 3 मुख्य फीचर्स कार्ड्स */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">
                {lang === 'hi' ? '🔒 100% सुरक्षित' : '🔒 100% Secure'}
              </h5>
              <p className="card-text">
                {lang === 'hi'
                  ? 'आपका डेटा पासवर्ड एन्क्रिप्शन (Bcrypt) और JWT ऑथेंटिकेशन से सुरक्षित है। आपके नोट्स सिर्फ आप ही देख सकते हैं।'
                  : 'Your data is protected with password encryption (Bcrypt) and JWT authentication. Only you can access your notes.'}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">
                {lang === 'hi' ? '☁️ क्लाउड पर सेव' : '☁️ Cloud Storage'}
              </h5>
              <p className="card-text">
                {lang === 'hi'
                  ? 'आपके सभी नोट्स MongoDB क्लाउड डेटाबेस में सेव रहते हैं। किसी भी डिवाइस से लॉगिन करके तुरंत एक्सेस करें।'
                  : 'All your notes are saved in the MongoDB cloud database. Log in from any device to access them instantly.'}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">
                {lang === 'hi' ? '⚡ तेज़ और आसान' : '⚡ Fast & Easy'}
              </h5>
              <p className="card-text">
                {lang === 'hi'
                  ? 'बिना पेज रीलोड हुए आसानी से नए नोट्स जोड़ें, एडिट करें और डिलीट करें।'
                  : 'Easily add, edit, and delete your notes seamlessly without any page reloads.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <h4 className="mb-3">
        {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल (FAQ)' : 'Frequently Asked Questions (FAQ)'}
      </h4>
      <div className="accordion mb-4" id="aboutAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              {lang === 'hi' ? 'क्या मेरे नोट्स कोई और पढ़ सकता है?' : 'Can anyone else read my notes?'}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              {lang === 'hi'
                ? 'नहीं, हर यूज़र का डेटा उसके यूनिक टोकन से जुड़ा होता है। आपके अलावा कोई भी आपके नोट्स नहीं देख सकता।'
                : 'No, every user’s data is linked to their unique authentication token. Nobody except you can view your notes.'}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              {lang === 'hi' ? 'यह प्रोजेक्ट किन तकनीकों से बना है?' : 'Which technologies were used to build this project?'}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              {lang === 'hi' ? (
                <>
                  इसे <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, और Node.js) और Bootstrap की मदद से बनाया गया है।
                </>
              ) : (
                <>
                  It is built using the <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, and Node.js) along with Bootstrap.
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* डेवलपर फुटर */}
      <div className="text-center text-muted border-top pt-3">
        <p className="mb-0">
          {lang === 'hi' ? 'Developed with ❤️ by ' : 'Developed with ❤️ by '}
          <strong>Soniya Lodhi</strong>
        </p>
      </div>
    </div>
  );
};

export default About;