# DocFlip

A lightweight and efficient PDF to Word conversion tool with OCR support.

## Features
- Single file PDF to Word conversion
- Batch conversion (up to 10 files)
- OCR text recognition for scanned PDFs
- Conversion history management
- Temporary download links (valid for 1 hour)

## Installation
1. Clone this repository
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Linux/Mac)
4. Install dependencies: `pip install -r requirements.txt`

## Usage
1. Run the application: `flask run`
2. Open your browser and navigate to `http://127.0.0.1:5000`
3. Upload your PDF file(s) and click 'Convert'

## Configuration
The application can be configured via `config.py` file. Available configurations include:
- File upload directory
- Maximum file size (default: 100MB)
- OCR configuration
- Secret key for Flask

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## About This Project
This project was developed with the assistance of AI. We strive to provide the best possible user experience, but if you encounter any issues or have suggestions for improvements, please feel free to reach out and communicate with us. We appreciate your understanding and support, and kindly request that you avoid blaming the author for any problems you may encounter.