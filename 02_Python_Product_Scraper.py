import requests
from bs4 import BeautifulSoup

url = 'https://example.com/products'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

products = soup.find_all('div', class_='product-name')
prices = soup.find_all('span', class_='price')

for p, pr in zip(products, prices):
    print(f'{p.text.strip()} - {pr.text.strip()}')