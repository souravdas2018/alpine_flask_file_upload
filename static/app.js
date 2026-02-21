function fileUploader() {
  return {
    files: [],
    uploadedFiles: [],
    uploadedCount: 0,
    totalFiles: 0,
    isLoading: false,

    init() {
      this.uploadedFiles = [];
      this.uploadedCount = 0;
      this.totalFiles = 0;
      this.isLoading = false;
    },

    handleFiles(event) {
      this.files = Array.from(event.target.files);
    },

    async uploadFiles() {
      if (this.files.length === 0) return;

      this.isLoading = true;
      this.uploadedFiles = [];
      this.uploadedCount = 0;
      this.totalFiles = this.files.length;

      for (let i = 0; i < this.files.length; i++) {
        const formData = new FormData();
        formData.append('file', this.files[i]);

        try {
          let res = await fetch('/upload', {
            method: 'POST',
            body: formData
          });

          if (res.ok) {
            let result = await res.json();
            this.uploadedFiles.push(result.files[0].filename);
            this.uploadedCount++;
          }
        } catch (err) {
          console.error('Upload error:', err);
        }
      }

      this.isLoading = false;
    }
  };
}
