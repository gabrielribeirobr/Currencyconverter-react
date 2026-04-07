import styles from "./boxvalue.module.css";
import { useState, useEffect, useRef } from "react";
import * as FlagIcons from "country-flag-icons/react/3x2";

// Mapa de moedas para código de país ISO
const currencyToCountry = {
  AED: "AE", // Dirham dos EAU
  AFN: "AF", // Afeganistão
  ALL: "AL", // Albânia
  AMD: "AM", // Armênia
  ANG: "AG", // Antilhas Holandesas
  AOA: "AO", // Angola
  ARS: "AR", // Argentina
  AUD: "AU", // Austrália
  AZN: "AZ", // Azerbaijão
  BAM: "BA", // Bósnia
  BBD: "BB", // Barbados
  BDT: "BD", // Bangladesh
  BGN: "BG", // Bulgária
  BHD: "BH", // Barém
  BMD: "BM", // Bermudas
  BND: "BN", // Brunei
  BOB: "BO", // Bolívia
  BRL: "BR", // Brasil
  BSD: "BS", // Bahamas
  BTN: "BT", // Butão
  BWP: "BW", // Botsuana
  BZD: "BZ", // Belize
  CAD: "CA", // Canadá
  CDF: "CD", // Congo
  CHF: "CH", // Suíça
  CLP: "CL", // Chile
  CNY: "CN", // China
  COP: "CO", // Colômbia
  CRC: "CR", // Costa Rica
  CUP: "CU", // Cuba
  CVE: "CV", // Cabo Verde
  CZK: "CZ", // República Tcheca
  DJF: "DJ", // Djibouti
  DKK: "DK", // Dinamarca
  DOP: "DO", // República Dominicana
  DZD: "DZ", // Argélia
  EGP: "EG", // Egito
  ERN: "ER", // Eritreia
  ETB: "ET", // Etiópia
  EUR: "EU", // Europa
  FJD: "FJ", // Fiji
  GBP: "GB", // Reino Unido
  GEL: "GE", // Geórgia
  GHS: "GH", // Gana
  GIP: "GI", // Gibraltar
  GMD: "GM", // Gâmbia
  GNF: "GN", // Guiné
  GTQ: "GT", // Guatemala
  GYD: "GY", // Guiana
  HNL: "HN", // Honduras
  HRK: "HR", // Croácia
  HTG: "HT", // Haiti
  HUF: "HU", // Hungria
  IDR: "ID", // Indonésia
  ILS: "IL", // Israel
  INR: "IN", // Índia
  IQD: "IQ", // Iraque
  IRR: "IR", // Irã
  ISK: "IS", // Islândia
  JMD: "JM", // Jamaica
  JOD: "JO", // Jordânia
  JPY: "JP", // Japão
  KES: "KE", // Quênia
  KGS: "KG", // Quirguistão
  KHR: "KH", // Camboja
  KMF: "KM", // Comores
  KPW: "KP", // Coreia do Norte
  KRW: "KR", // Coreia do Sul
  KWD: "KW", // Kuwait
  KYD: "KY", // Ilhas Cayman
  KZT: "KZ", // Cazaquistão
  LAK: "LA", // Laos
  LBP: "LB", // Líbano
  LKR: "LK", // Sri Lanka
  LRD: "LR", // Libéria
  LSL: "LS", // Lesoto
  LYD: "LY", // Líbia
  MAD: "MA", // Marrocos
  MDL: "MD", // Moldávia
  MGA: "MG", // Madagáscar
  MKD: "MK", // Macedônia
  MMK: "MM", // Mianmar
  MNT: "MN", // Mongólia
  MOP: "MO", // Macau
  MUR: "MU", // Maurício
  MVR: "MV", // Maldivas
  MWK: "MW", // Malawi
  MXN: "MX", // México
  MYR: "MY", // Malásia
  MZN: "MZ", // Moçambique
  NAD: "NA", // Namíbia
  NGN: "NG", // Nigéria
  NIO: "NI", // Nicarágua
  NOK: "NO", // Noruega
  NPR: "NP", // Nepal
  NZD: "NZ", // Nova Zelândia
  OMR: "OM", // Omã
  PAB: "PA", // Panamá
  PEN: "PE", // Peru
  PGK: "PG", // Papua Nova Guiné
  PHP: "PH", // Filipinas
  PKR: "PK", // Paquistão
  PLN: "PL", // Polônia
  PYG: "PY", // Paraguai
  QAR: "QA", // Catar
  RON: "RO", // Romênia
  RSD: "RS", // Sérvia
  RUB: "RU", // Rússia
  RWF: "RW", // Ruanda
  SAR: "SA", // Arábia Saudita
  SBD: "SB", // Ilhas Salomão
  SCR: "SC", // Seicheles
  SDG: "SD", // Sudão
  SEK: "SE", // Suécia
  SGD: "SG", // Singapura
  SHP: "SH", // Santa Helena
  SLL: "SL", // Serra Leoa
  SOS: "SO", // Somália
  SRD: "SR", // Suriname
  SSP: "SS", // Sudão do Sul
  STD: "ST", // São Tomé e Príncipe
  SYP: "SY", // Síria
  SZL: "SZ", // Suazilândia
  THB: "TH", // Tailândia
  TJS: "TJ", // Tajiquistão
  TMT: "TM", // Turcomenistão
  TND: "TN", // Tunísia
  TOP: "TO", // Tonga
  TRY: "TR", // Turquia
  TTD: "TT", // Trinidad e Tobago
  TWD: "TW", // Taiwan
  TZS: "TZ", // Tanzânia
  UAH: "UA", // Ucrânia
  UGX: "UG", // Uganda
  USD: "US", // Estados Unidos
  UYU: "UY", // Uruguai
  UZS: "UZ", // Uzbequistão
  VEF: "VE", // Venezuela
  VES: "VE", // Venezuela
  VND: "VN", // Vietnã
  VUV: "VU", // Vanuatu
  WST: "WS", // Samoa
  XAF: "CM", // CFA Franco BEAC
  XOF: "CI", // CFA Franco WAEMU
  YER: "YE", // Iêmen
  ZAR: "ZA", // África do Sul
  ZWL: "ZW", // Zimbábue
  HKD: "HK", // Hong Kong
};

// Componente para renderizar bandeira
function FlagComponent({ code }) {
  const FlagIcon = FlagIcons[code];
  if (!FlagIcon) return null;
  return <FlagIcon />;
}

export function useKeyCurrency() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const responseNames = await fetch("/api/currencies");
        const dataNames = await responseNames.json();

        const responseRates = await fetch("/api/latest");
        const dataRates = await responseRates.json();

        const currencyArray = Object.entries(dataNames).map(([code, name]) => ({
          code,
          name,
          rate: dataRates.rates[code] || 1,
        }));

        setCurrencies(currencyArray);
      } catch (erro) {
        console.error("Erro ao buscar moedas:", erro);
      }
    }

    fetchCurrencies();
  }, []);

  return currencies;
}

// Componente Select Customizado com Ícones
function CurrencySelect({ currencies, selectedCurrency, onCurrencyChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedCurrencyData = currencies.find(
    (c) => c.code === selectedCurrency
  );
  const countryCode = currencyToCountry[selectedCurrency];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    onCurrencyChange(code);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect} ref={dropdownRef}>
      <button
        className={styles.selectButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {countryCode && (
          <span className={styles.flagIcon}>
            <FlagComponent code={countryCode} />
          </span>
        )}
        <span className={styles.currencyCode}>{selectedCurrency}</span>
        <span className={styles.currencyName}>{selectedCurrencyData?.name}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {currencies.map((currency) => {
            const countryCodeItem = currencyToCountry[currency.code];
            return (
              <button
                key={currency.code}
                className={`${styles.dropdownItem} ${
                  selectedCurrency === currency.code ? styles.selected : ""
                }`}
                onClick={() => handleSelect(currency.code)}
              >
                {countryCodeItem && (
                  <span className={styles.flagIconSmall}>
                    <FlagComponent code={countryCodeItem} />
                  </span>
                )}
                <span className={styles.itemCode}>{currency.code}</span>
                <span className={styles.itemName}>{currency.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Boxvalue({
  selectedCurrency,
  onCurrencyChange,
  amount,
  onAmountChange,
}) {
  const currencies = useKeyCurrency();

  return (
    <div className={styles.box}>
      <label>Amount</label>

      <div className={styles.inputGroup}>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />

        <CurrencySelect
          currencies={currencies}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={onCurrencyChange}
        />
      </div>
    </div>
  );
}
