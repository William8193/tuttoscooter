// Google Consent Mode v2 - Default denied
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});
gtag('js', new Date());

// Dynamic Google Analytics loading
(function() {
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-LEQ5WQ8RMZ';
  document.head.appendChild(gaScript);
})();
gtag('config', 'G-LEQ5WQ8RMZ');

// Detect language from html lang attribute
var currentLang = document.documentElement.lang || 'it';

// Initialize vanilla-cookieconsent
CookieConsent.run({
  currentLang: currentLang,
  
  categories: {
    necessary: {
      enabled: true,
      readOnly: true
    },
    analytics: {
      enabled: false,
      autoClear: {
        cookies: [
          {
            name: /^_ga/,
          },
          {
            name: '_gid',
          }
        ]
      }
    }
  },
  
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom left',
      flipButtons: false,
      equalWeightButtons: true
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      flipButtons: false,
      equalWeightButtons: true
    }
  },
  
  onFirstConsent: ({ cookie }) => {
    if (cookie.categories.includes('analytics')) {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  },
  
  onConsent: ({ cookie }) => {
    if (cookie.categories.includes('analytics')) {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    } else {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  },
  
  onChange: ({ changedCategories }) => {
    if (changedCategories.includes('analytics')) {
      const consent = CookieConsent.getUserPreferences();
      if (consent.acceptedCategories.includes('analytics')) {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      } else {
        gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }
  },
  
  language: {
    default: 'it',
    autoDetect: 'document',
    translations: {
      it: {
        consentModal: {
          title: 'Utilizziamo i cookie',
          description: 'Usiamo cookie tecnici necessari al funzionamento del sito e, previo tuo consenso, cookie di analisi (Google Analytics) per capire come viene usato il sito. Puoi accettare, rifiutare o personalizzare le tue preferenze in qualsiasi momento. Leggi la nostra <a href="/it/cookie-policy.html">Cookie Policy</a>.',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta',
          showPreferencesBtn: 'Personalizza',
          closeIconLabel: 'Chiudi'
        },
        preferencesModal: {
          title: 'Preferenze cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          sections: [
            {
              title: 'Cookie necessari',
              description: 'Indispensabili per il funzionamento del sito. Sempre attivi.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Cookie di analisi (Google Analytics)',
              description: 'Ci aiutano a capire come i visitatori usano il sito, in forma aggregata.',
              linkedCategory: 'analytics'
            }
          ]
        }
      },
      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'We use technical cookies necessary for the site to function and, with your consent, analytics cookies (Google Analytics) to understand how the site is used. You can accept, reject, or customize your preferences at any time. Read our <a href="/en/cookie-policy.html">Cookie Policy</a>.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject',
          showPreferencesBtn: 'Customize',
          closeIconLabel: 'Close'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Necessary cookies',
              description: 'Essential for the website to function. Always active.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics cookies (Google Analytics)',
              description: 'Help us understand how visitors use the site, in aggregate form.',
              linkedCategory: 'analytics'
            }
          ]
        }
      },
      fr: {
        consentModal: {
          title: 'Nous utilisons des cookies',
          description: 'Nous utilisons des cookies techniques nécessaires au fonctionnement du site et, avec votre consentement, des cookies d\'analyse (Google Analytics) pour comprendre comment le site est utilisé. Vous pouvez accepter, refuser ou personnaliser vos préférences à tout moment. Consultez notre <a href="/fr/cookie-policy.html">politique de cookies</a>.',
          acceptAllBtn: 'Accepter tout',
          acceptNecessaryBtn: 'Refuser',
          showPreferencesBtn: 'Personnaliser',
          closeIconLabel: 'Fermer'
        },
        preferencesModal: {
          title: 'Préférences de cookies',
          acceptAllBtn: 'Accepter tout',
          acceptNecessaryBtn: 'Refuser',
          savePreferencesBtn: 'Enregistrer les préférences',
          closeIconLabel: 'Fermer',
          sections: [
            {
              title: 'Cookies nécessaires',
              description: 'Indispensables au fonctionnement du site. Toujours actifs.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Cookies d\'analyse (Google Analytics)',
              description: 'Nous aident à comprendre comment les visiteurs utilisent le site, de manière agrégée.',
              linkedCategory: 'analytics'
            }
          ]
        }
      },
      es: {
        consentModal: {
          title: 'Utilizamos cookies',
          description: 'Usamos cookies técnicas necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies de análisis (Google Analytics) para entender cómo se usa el sitio. Puedes aceptar, rechazar o personalizar tus preferencias en cualquier momento. Lee nuestra <a href="/es/cookie-policy.html">Política de cookies</a>.',
          acceptAllBtn: 'Aceptar todo',
          acceptNecessaryBtn: 'Rechazar',
          showPreferencesBtn: 'Personalizar',
          closeIconLabel: 'Cerrar'
        },
        preferencesModal: {
          title: 'Preferencias de cookies',
          acceptAllBtn: 'Aceptar todo',
          acceptNecessaryBtn: 'Rechazar',
          savePreferencesBtn: 'Guardar preferencias',
          closeIconLabel: 'Cerrar',
          sections: [
            {
              title: 'Cookies necesarias',
              description: 'Imprescindibles para el funcionamiento del sitio. Siempre activas.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Cookies de análisis (Google Analytics)',
              description: 'Nos ayudan a entender cómo los visitantes usan el sitio, de forma agregada.',
              linkedCategory: 'analytics'
            }
          ]
        }
      },
      de: {
        consentModal: {
          title: 'Wir verwenden Cookies',
          description: 'Wir verwenden technische Cookies, die für den Betrieb der Website notwendig sind, sowie – mit Ihrer Zustimmung – Analyse-Cookies (Google Analytics), um zu verstehen, wie die Website genutzt wird. Sie können Ihre Einstellungen jederzeit akzeptieren, ablehnen oder anpassen. Lesen Sie unsere <a href="/de/cookie-policy.html">Cookie-Richtlinie</a>.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Ablehnen',
          showPreferencesBtn: 'Anpassen',
          closeIconLabel: 'Schließen'
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Ablehnen',
          savePreferencesBtn: 'Einstellungen speichern',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Notwendige Cookies',
              description: 'Für den Betrieb der Website unerlässlich. Immer aktiv.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analyse-Cookies (Google Analytics)',
              description: 'Helfen uns zu verstehen, wie Besucher die Website nutzen, in aggregierter Form.',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  }
});
