# Alpine Flask File Upload

A modern, lightweight file upload application built with Flask (Python) and Alpine.js, featuring a beautiful UI with real-time upload progress tracking and duplicate file detection.

## 📋 Features

- **Multiple File Upload**: Select and upload multiple files simultaneously
- **Real-time Progress Tracking**: Visual progress bars showing upload status for each file
- **Duplicate Detection**: Automatically detects if a file already exists on the server
- **Interactive UI**: Add/remove files from the queue before uploading
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Feedback**: 
  - Spinner animation during upload
  - Success checkmarks for completed uploads
  - Warning indicators for duplicate files
  - Popup notifications for file conflicts

## 🛠 Technology Stack

- **Backend**: Flask 3.0.0 (Python web framework)
- **Frontend**: Alpine.js 3.x (Lightweight JavaScript framework)
- **Styling**: Custom CSS with modern design
- **File Handling**: Werkzeug utilities for secure file operations

## 📁 Project Structure

```
alpine_flask_file_upload/
│
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
│
├── static/
│   └── app.js            # (Legacy - functionality moved to inline)
│
├── templates/
│   └── index.html        # Main UI with Alpine.js logic
│
└── uploads/              # Directory for uploaded files (auto-created)
```

## 🚀 Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Setup Steps

1. **Clone or download the project**
   ```bash
   cd alpine_flask_file_upload
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

## 🎯 Usage

1. **Start the Flask server**
   ```bash
   python app.py
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:5010
   ```

3. **Upload files**:
   - Click the file input to select one or multiple files
   - Review the selected files in the upload list
   - Remove any unwanted files using the × button
   - Click "Upload" to start the upload process
   - Watch the real-time progress bars
   - Get notifications if any files already exist

## 🔧 How It Works

### Backend (Flask)

The Flask application provides two main endpoints:

- **`GET /`**: Serves the main HTML page
- **`POST /upload`**: Handles file uploads
  - Accepts multiple files via `files[]` parameter
  - Validates file existence
  - Uses `secure_filename()` to prevent security vulnerabilities
  - Creates the `uploads/` directory if it doesn't exist
  - Returns status: `success` or `exists` (for duplicates)

### Frontend (Alpine.js)

The frontend uses Alpine.js for reactive state management:

- **File Selection**: Adds files to queue with duplicate checking
- **Upload Queue**: Manages sequential file uploads
- **Progress Tracking**: Uses XMLHttpRequest to track upload progress
- **State Management**: Tracks uploaded files, duplicates, and current progress
- **User Feedback**: Real-time UI updates with spinners, checkmarks, and warnings

### Key Features Implementation

1. **Sequential Upload**: Files are uploaded one at a time to ensure accurate progress tracking
2. **Progress Bars**: XMLHttpRequest's `onprogress` event provides percentage completion
3. **Duplicate Detection**: Server checks if file exists and returns appropriate status
4. **Popup Alerts**: Modal notification when a duplicate file is detected
5. **Queue Management**: Users can add/remove files before starting upload

## ⚙ Configuration

### Change Server Port

Edit [app.py](app.py#L33) and modify:
```python
app.run(debug=True, port=5010)  # Change 5010 to your desired port
```

### Change Upload Directory

Edit [app.py](app.py#L6) and modify:
```python
UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')  # Change 'uploads' to your desired folder
```

### Allowed File Types

Currently, all file types are allowed. To restrict file types, add validation in the `/upload` route:

```python
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
```

## 🎨 UI Features

- **Clean Modern Design**: Professional appearance with subtle shadows and rounded corners
- **Color-Coded Status**:
  - Blue: Active/uploading
  - Green checkmark: Successfully uploaded
  - Red warning: Duplicate file detected
- **Responsive Layout**: Flexbox-based layout adapts to different screen sizes
- **Smooth Animations**: CSS transitions for hover effects and progress updates

## 📝 Notes

- The server runs in debug mode by default (suitable for development only)
- Uploaded files are stored in the `uploads/` directory
- File names are sanitized using `secure_filename()` for security
- The application automatically creates the upload directory if it doesn't exist
- Duplicate files are not overwritten; users are notified instead

## 🔐 Security Considerations

- **Filename Sanitization**: Uses Werkzeug's `secure_filename()` to prevent path traversal attacks
- **HTTPS Recommended**: For production, use HTTPS to encrypt file transfers
- **File Size Limits**: Consider adding maximum file size restrictions
- **Authentication**: Add user authentication for production use
- **File Type Validation**: Implement whitelist-based file type checking

## 📄 License

This project is open-source and available for modification and distribution.

## 🤝 Contributing

Feel free to fork, modify, and submit pull requests to improve this project!

---

**Built with ❤️ using Flask and Alpine.js**
