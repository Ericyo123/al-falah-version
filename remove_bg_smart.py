import cv2
import numpy as np

img = cv2.imread('public/assets/images/award_new_2.png', cv2.IMREAD_UNCHANGED)

if len(img.shape) == 2:
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

# Get mask of the background using floodFill from the 4 corners
h, w = img_bgr.shape[:2]
mask = np.zeros((h+2, w+2), np.uint8)

# We will flood fill from all 4 corners
diff = (10, 10, 10)
for pt in [(0,0), (w-1,0), (0,h-1), (w-1,h-1)]:
    cv2.floodFill(img_bgr, mask, pt, (255, 255, 255), diff, diff, cv2.FLOODFILL_MASK_ONLY)

# The mask is now 1 where the background was flood-filled
# It's padded by 1 pixel on all sides, so we crop it back
mask = mask[1:h+1, 1:w+1]

# Invert mask so background is 0 and foreground is 255
mask_keep = cv2.bitwise_not(mask * 255)

# To remove the halo (anti-aliasing) around the edges:
# We erode the keep mask slightly to remove the edge pixels
kernel = np.ones((2,2), np.uint8)
mask_keep = cv2.erode(mask_keep, kernel, iterations=1)

# Apply mask to alpha channel
a = cv2.bitwise_and(a, a, mask=mask_keep)

# merge back
img_transparent = cv2.merge([b, g, r, a])
cv2.imwrite('public/assets/images/award_no_bg_white.png', img_transparent)
print("Background removed via floodFill.")
