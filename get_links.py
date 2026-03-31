import fitz

doc = fitz.open('src/assets/aman_resume.pdf')
for i, page in enumerate(doc):
    text = page.get_text()[:400].replace('\n', ' ')
    print(f"--- Page {i+1} ---")
    print("Preview:", text)
    links = page.get_links()
    print("Links:")
    for link in links:
        uri = link.get('uri')
        if uri:
            print(uri)
