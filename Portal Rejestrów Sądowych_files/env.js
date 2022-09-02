(function(window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["prsSlownikiApiUrl"] = "/api/slowniki/";
  window["env"]["prsApiUrl"] = "/api/prs/";
  window["env"]["apkKrsUrl"] = "https://prs-ekrs.ms.gov.pl/";
  window["env"]["apkWewUrl"] = "";
  window["env"]["apkZewUrl"] = "https://prs-gui-zew-prs-prod.apps.ocp.prod.ms.gov.pl/";
  window["env"]["ekrsApiUrl"] = "/api/eKRS/";
  window["env"]["notificationUrl"] = "/api/notification/";
  window['env']['signalRUrl'] = '/broadcasting';

  window["env"]["landingPage"] = '';

  window['env']['mt_issuer'] = "https://sso-toz-kont-prod.apps.ocp.prod.ms.gov.pl/",
  window['env']['mt_realm'] = "ms-ext",
  window['env']['mt_clientId'] = "prs-portal",
  window['env']['mt_scope'] = "openid",
  window['env']['mt_redirectUri'] = "",
  window['env']['mt_postLogoutRedirectUri'] = "https://prs.ms.gov.pl/",
  window['env']['mt_responseType'] = "code",
  window['env']['mt_userProfileEndpoint'] = "https://portal-ext-prod.apps.ocp.prod.ms.gov.pl/#!/jump/TOZKonta/TozKontaGui.Konto?backUrl=https://prs-ekrs.ms.gov.pl&backCaption=PRS"

  window['env']['krzPortalPublicznyUrl'] = "https://krz.ms.gov.pl";
  window['env']['krzPortalUzUrl'] = "https://krz-ext.ms.gov.pl/#!/jump/KRZPortalUZ";
  window['env']['krzPortalUbUrl'] = "https://krz-ext.ms.gov.pl/#!/jump/KRZPortalUB";
  window['env']['krzRegzUrl'] = "https://krz-ext.ms.gov.pl/#!/jump/REGZ";
  window['env']['mtPortalUrl'] = "https://portal-ext-prod.apps.ocp.prod.ms.gov.pl/";

  window['env']['prsOpenApiUrl'] = "https://api-krs.ms.gov.pl/";
  window['env']['openApiDate'] = "";
  window['env']['krsInfoTitle'] = "";
  window['env']['krsInfoPicture'] = "api_krs.png";
  window['env']['krsInfoText'] = "Na mocy art. 4b ust. 2 ustawy z dnia 20 sierpnia 1997 r. o Krajowym Rejestrze Sądowym (tj.: Dz. U. z 2021 r., poz. 112 ze zm.), w związku z art. 24 ust. 1 ustawy z dnia 11 sierpnia 2021 r. o otwartych danych i ponownym wykorzystywaniu informacji sektora publicznego (Dz. U. z 2021 r., poz. 1641), dane zgromadzone w Krajowym Rejestrze Sądowym udostępnia się w celu ponownego wykorzystywania także za pośrednictwem interfejsu programistycznego aplikacji (API).<br><br> Zakres informacyjny danych udostępnianych z KRS poprzez API odpowiada odpisowi pełnemu i aktualnemu, wydawanych przez Centralną Informację Krajowego Rejestru Sądowego.<br><br> Pobrane poprzez API dane osób fizycznych ujawnionych w rejestrze są zanonimizowane w zakresie imion, nazwisk i ich numerów PESEL, zgodnie z zasadami przetwarzania tych danych wynikających z Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz. Urz. UE L 119 z 04.05.2016 ze zm.).<br> <br> Usługa dostępna pod adresem: <br> <a href='/krs/openApi'>http://prs.ms.gov.pl/krs/openAPI</a>";

  window['env']['wylaczonyKafelMonitor'] = "true";
  window['env']['monitorURL'] = "https://wyszukiwarka-msig.ms.gov.pl/";
  window['env']['wyszukiwarkaKrsUrl'] = "https://wyszukiwarka-krs.ms.gov.pl/";
  window['env']['newsletterUrl'] = "https://prs-newsletter-gui-prs-prod.apps.ocp.prod.ms.gov.pl";
  window['env']['newsletterInfoPicture'] = "news-newsletter.png";
  window['env']['newsletterInfoActive'] = "true";

})(this);
