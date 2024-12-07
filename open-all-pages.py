import webbrowser

urls = [
    "http://localhost:3000/",
    "http://localhost:3000/admin",
    "http://localhost:3000/contractor",
    "http://localhost:3000/investigator"
]

for url in urls:
    webbrowser.open(url)
