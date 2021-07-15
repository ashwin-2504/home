print("HTTP/1.0 200 OK\n")
import cgi
form = cgi.FieldStorage()

title=form["title"].value

description=form["Description"].value

image=form["inpFile"].value

with open(image, 'rb') as img:
  m = f.read()
  print(m)

with open('asstes_navbar/compass')