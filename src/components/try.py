import requests

def getPhoneNumbers(country, phoneNumber):
 
  url = f"https://jsonmock.hackerrank.com/api/countries?name={country}"
  response = requests.get(url)
  data = response.json()["data"]

  if not data:
    return "-1"

  calling_codes = data[0]["callingCodes"]

  calling_code = calling_codes[-1]

  return f"+{calling_code} {phoneNumber}"


print(get_phone_number("Afghanistan", "656445445"))  # Output: +93 656445445
print(get_phone_number("Puerto Rico", "564593986"))  # Output: +1939 564593986
print(get_phone_number("Oceania", "987574876"))  # Output: -1
