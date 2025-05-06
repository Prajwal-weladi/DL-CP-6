from ultralytics import YOLO

model = YOLO("best.pt")  

metrics = model.val()

precision = metrics.box.pr  # Precision
recall = metrics.box.re  # Recall
map50 = metrics.box.map50  # mAP@50 (IoU 0.5)
map50_95 = metrics.box.map  # mAP@[50:95] (IoU 0.5-0.95)
f1_score = metrics.box.f1  # F1 Score

print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"mAP@50: {map50:.4f}")
print(f"mAP@50-95: {map50_95:.4f}")
print(f"F1 Score: {f1_score:.4f}")