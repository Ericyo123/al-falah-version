import cv2
import numpy as np

img = cv2.imread('public/assets/images/award_new.png', cv2.IMREAD_UNCHANGED)

# Handle cases where image might not have alpha channel
if len(img.shape) == 2:
    # Grayscale, not expected but handle it
    b = g = r = img
    a = np.ones(img.shape, dtype=img.dtype) * 255
    img_bgr = cv2.merge([b, g, r])
elif img.shape[2] == 4:
    b, g, r, a = cv2.split(img)
    img_bgr = cv2.merge([b, g, r])
else:
    b, g, r = cv2.split(img)
    a = np.ones(b.shape, dtype=b.dtype) * 255
    img_bgr = img

# White background threshold
# Anything where B > 240, G > 240, R > 240 is considered white
lower_white = np.array([240, 240, 240])
upper_white = np.array([255, 255, 255])
mask = cv2.inRange(img_bgr, lower_white, upper_white)

# Invert mask (we want to keep things that are NOT white)
mask_keep = cv2.bitwise_not(mask)

# Apply mask to alpha channel
a = cv2.bitwise_and(a, a, mask=mask_keep)

# Add morphological closing or smoothing if necessary? Let's keep it simple first
# merge back
img_transparent = cv2.merge([b, g, r, a])
cv2.imwrite('public/assets/images/award_no_bg_white.png', img_transparent)
print("Background removed.")
