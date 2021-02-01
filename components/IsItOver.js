export async function findCountry() {
  let geoData = await (await fetch('https://ipapi.co/json/')).json()
  return geoData.country;
};

export function No(countryCode) {
    var codes = {
      "US": "NO", // United States
      "FR": "NON", // France
      "NL": "NEE", // Netherlands
      "ZA": "NEE", // South Africa
      "ES": "NO", // Spain
      "UK": "NO", // United Kingdom
      "CA": "NO/NON", // Canada (English/French)
      "PL": "NIE", // Poland
      "AX": "NEJ", // Åland Islands
      "SE": "NEJ", // Sweden
      "LT": "NE", // Lithuania
      "DE": "NEIN", // Germany
      "IE": "NÍ hEA", // Ireland
      "AU": "NO", // Australia
      "JP": "いいえ", // Japan
      "NO": "NEI", // Norway
      "IT": "NO", // Italy
      "HU": "NEM", // Hungary
      "DK": "NEJ", // Denmark
      "FI": "EI", // Finland
      "BE": "NEE", // Belgium
      "CL": "NO", // Chile
      "MX": "NO", // Mexico
      "NZ": "NO", // New Zealand
      "AT": "NEIN", // Austria
      "RO": "NU", // Romania
      "CH": "NEIN/NON/NO/NA", // Switzerland (German/French/Italian/Romansh)
      "PT": "NÃO", // Portugal
      "BR": "NÃO", // Brazil
      "AR": "NO", // Argentina
      "EE": "EI", // Estonia
      "HR": "NE", // Croatia
      "CN": "不是", // China (Mandarin)
      "TW": "不是", // Taiwan (Mandarin)
      "IN": "नहीं", // India (Hindi)
      "SG": "TIDAK", // Singapore
      "PH": "HINDI", // Phillipines
      "IL": "לא", // Israel
      "KR": "아니요", // Korea
      "PK": "نہیں", // Pakistan
      "CZ": "NE", // Czech Republic
      "BG": "НЕ", // Bulgaria
      "SK": "NIE", // Slovakia
      "GR": "ΟΧΙ", // Greece
      "IS": "NEI", // Iceland
      "VE": "NO", // Venezuela
      "SI": "NE", // Slovenia
      "TH": "ไม่ใช่", // Thailand
      "LV": "NĒ", // Latvia
      "RU": "НЕТ", // Russia
      "HK": "唔係", // Hong Kong (Cantonese)
      "MO": "唔係", // Macau (Cantonese)
      "TR": "HAYIR", // Turkey
      "MY": "TIDAK", // Malaysia
      "PR": "NO", // Puerto Rico
      "CO": "NO", // Colombia
      "EC": "NO", // Ecuador
      "PE": "NO", // Peru
      "CR": "NO", // Costa Rica
      "UY": "NO", // Uruguay
      "CY": "OHI", // Cyprus
      "GT": "NO", // Guatemala
      "SV": "NO", // El Salvador
      "DO": "NO", // Dominican Republic
      "BM": "NÃO", // Bermuda
      "PA": "NO", // Panama
      "BO": "NO", // Bolivia
      "TT": "NO", // Trinidad & Tobago
      "DM": "NON", // Dominica (Creole)
      "HT": "NON", // Haiti (Creole)
      "JM": "NO", // Jamaica
      "BB": "NO", // Barbado
      "BZ": "NO", // Belize
      "UA": "НІ", // Ukraine - https://github.com/isitchristmas/web/issues/67
      "AM": "ՈՉ", // Armenia - https://github.com/isitchristmas/web/issues/71
      "KY": "NO", // Cayman Islands
      "NI": "NO", // Nicaragua
      "PY": "NO", // Paraguay
      "VN": "SAI", // Vietnam
      "MM": "မဟုတ်ဘူး။", // Myanmar (Burmese) - https://github.com/isitchristmas/web/issues/151
      "TZ": "HAPANA", //Tanzania (Swahili)
      "KE": "NDIO", //Kenya (Swahili)
      "ZM": "AWEH", //Zambia (Bemba)
      "MN": "Үгүй", // Mongolian
      "MU": "NON" // Mauritius (French Creole?)
    }

    return codes[countryCode] || "NO";
}
