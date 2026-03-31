import fitz
import json

doc = fitz.open('src/assets/aman_resume.pdf')
links_out = []
for i, page in enumerate(doc):
    for link in page.get_links():
        uri = link.get('uri')
        if uri:
            links_out.append(uri)

with open('links.json', 'w') as f:
    json.dump(links_out, f, indent=4)
