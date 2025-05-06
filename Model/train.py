import torch
from torchvision import transforms
from PIL import Image

# Load your saved model
model = torch.load("GoogleNet.pkl")
model.eval()  # Set the model to evaluation mode

# Define image transform (standard ImageNet preprocessing)
transform = transforms.Compose([
    transforms.Resize((224, 224)),  # GoogLeNet expects 224x224
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])

# Load and transform an input image
image = Image.open("bus.jpg")  # Replace with your own image path
input_tensor = transform(image).unsqueeze(0)  # Add batch dimension

# Predict
with torch.no_grad():
    outputs = model(input_tensor)
    _, predicted = torch.max(outputs, 1)

# Get class labels (assuming ImageNet classes)
import urllib.request
url = "https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt"
class_names = urllib.request.urlopen(url).read().decode("utf-8").splitlines()

print(f"Predicted class: {class_names[predicted.item()]}")
