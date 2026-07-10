import cv2
import numpy as np

img = cv2.imread('public/assets/images/award_isolated.png', cv2.IMREAD_UNCHANGED)
if img.shape[2] == 4:
    b, g, r, a = cv2.split(img)
    img_bgr = cv2.merge([b, g, r])
else:
    b, g, r = cv2.split(img)
    a = np.ones(b.shape, dtype=b.dtype) * 255
    img_bgr = img

hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)

lower_blue = np.array([80, 30, 30])
upper_blue = np.array([140, 255, 255])
mask = cv2.inRange(hsv, lower_blue, upper_blue)
mask = cv2.bitwise_not(mask)

lower_orange = np.array([5, 50, 50])
upper_orange = np.array([25, 255, 255])
mask_orange = cv2.inRange(hsv, lower_orange, upper_orange)

mask = cv2.bitwise_and(mask, cv2.bitwise_not(mask_orange))

# apply mask to the original alpha
a = cv2.bitwise_and(a, a, mask=mask)

img_transparent = cv2.merge([b, g, r, a])
cv2.imwrite('public/assets/images/award_no_bg.png', img_transparent)
print("Success")
