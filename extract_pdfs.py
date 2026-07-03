import os
import PyPDF2

pdf_dir = "PDFs"
output_dir = "PDF_Texts"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, filename)
        output_path = os.path.join(output_dir, filename + ".txt")
        
        try:
            with open(pdf_path, "rb") as f:
                reader = PyPDF2.PdfReader(f)
                text = ""
                for page in reader.pages:
                    text += page.extract_text() + "\n"
                
            with open(output_path, "w", encoding="utf-8") as out_f:
                out_f.write(text)
            print(f"Extracted {filename}")
        except Exception as e:
            print(f"Error extracting {filename}: {e}")
