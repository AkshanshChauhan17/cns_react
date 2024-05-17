from PIL import Image
import glob
import os

# def compress_image(input_path, output_path, quality=1):
#     try:
#         # Open the image file
#         with Image.open(input_path) as img:
#             # Save the compressed image
#             img.save(output_path, 'JPEG', quality=quality)
#             print(f"Image compressed and saved to {output_path}")
#     except Exception as e:
#         print(f"Error: {e}")

# def main(x):
#     input_image_path = f"p ({x}).jpg"  # Replace with the path to your input image
#     output_image_path = f"MID\POINT({x}).jpg"  # Replace with the desired output path

#     # Check if the input image file exists
#     if os.path.exists(input_image_path):
#         # Set the compression quality (0-100)
#         compression_quality = 0

#         # Compress the image
#         compress_image(input_image_path, output_image_path, quality=compression_quality)
#     else:
#         print(f"Error: Input image file not found at {input_image_path}")

# if __name__ == "__main__":
#     for i in range(1, 18):
#         main(i)

g = glob.glob("*.jpg")

def compress_resolution(image_path, target_resolution, out_path):
    # Open the image
    img = Image.open(image_path)
    
    # Get the original width and height
    original_width, original_height = img.size
    
    # Calculate the aspect ratio
    aspect_ratio = original_width / original_height
    
    # Calculate new dimensions based on target resolution
    if original_width > original_height:
        new_width = target_resolution
        new_height = int(new_width / aspect_ratio)
    else:
        new_height = target_resolution
        new_width = int(new_height * aspect_ratio)
    
    # Resize the image
    resized_img = img.resize((new_width, new_height))
    
    # Save the resized image
    resized_img.save(out_path)  # Change the file extension as needed

# Example usage:
if __name__ == "__main__":
    try:
        os.mkdir("PLACEHOLDER")
        os.mkdir("SMALL")
        os.mkdir("MEDIUM")
        os.mkdir("LARGE")
    except:
        print("skip")
        
    for i in g:
        compress_resolution(i , 400, f"PLACEHOLDER/{i}")
    for i in g:
        compress_resolution(i , 1000, f"SMALL/{i}")
    for i in g:
        compress_resolution(i , 2500, f"MEDIUM/{i}")
    for i in g:
        compress_resolution(i , 5000, f"LARGE/{i}")