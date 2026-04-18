import urllib.request
import re

icons = ['researchgate', 'gmail', 'tencentqq', 'googlescholar', 'github', 'orcid']
for icon in icons:
    url = f'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/{icon}.svg'
    try:
        req = urllib.request.urlopen(url)
        svg = req.read().decode('utf-8')
        match = re.search(r'<path d="([^"]+)"', svg)
        if match:
            print(f'{icon}: {match.group(1)}')
    except Exception as e:
        print(f'Error fetching {icon}: {e}')
