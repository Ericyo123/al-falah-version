from PIL import Image

img = Image.open("public/assets/images/recieve.png")
pixels = list(img.getdata())
width, height = img.size

# Check top left, top middle, top right
print("Top Left:", pixels[0])
print("Top Middle:", pixels[width // 2])
print("Top Right:", pixels[width - 1])
