from PIL import Image

def crop_border(img_path, output_path, crop_pixels):
    img = Image.open(img_path)
    width, height = img.size
    
    # Crop (left, top, right, bottom)
    cropped_img = img.crop((crop_pixels, crop_pixels, width - crop_pixels, height - crop_pixels))
    cropped_img.save(output_path)
    print(f"Cropped {crop_pixels} pixels from all sides.")

crop_border("public/assets/images/recieve.png", "public/assets/images/recieve.png", 20)
