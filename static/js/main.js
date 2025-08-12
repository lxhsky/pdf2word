// 文件拖放功能
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const batchDropArea = document.getElementById('batch-drop-area');
const batchFileInput = document.getElementById('batch-file-input');

// 单文件拖放
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

// 监听文件选择事件，提供视觉反馈
fileInput.addEventListener('change', function() {
    if (this.files.length) {
        const fileNameDisplay = document.createElement('p');
        fileNameDisplay.className = 'text-green-600 font-medium mt-2';
        fileNameDisplay.textContent = `已选择: ${this.files[0].name}`;
        
        // 移除之前的文件名显示
        const existingDisplay = dropArea.querySelector('.text-green-600');
        if (existingDisplay) {
            existingDisplay.remove();
        }
        
        dropArea.appendChild(fileNameDisplay);
    }
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
    dropArea.classList.add('active');
}

function unhighlight() {
    dropArea.classList.remove('active');
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length) {
        fileInput.files = files;
    }
}

// 批量文件拖放
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    batchDropArea.addEventListener(eventName, preventDefaults, false);
});

// 监听批量文件选择事件，提供视觉反馈
batchFileInput.addEventListener('change', function() {
    if (this.files.length) {
        const fileNameDisplay = document.createElement('p');
        fileNameDisplay.className = 'text-green-600 font-medium mt-2';
        fileNameDisplay.textContent = `已选择: ${this.files.length} 个文件`;
        
        // 移除之前的文件名显示
        const existingDisplay = batchDropArea.querySelector('.text-green-600');
        if (existingDisplay) {
            existingDisplay.remove();
        }
        
        batchDropArea.appendChild(fileNameDisplay);
    }
});

['dragenter', 'dragover'].forEach(eventName => {
    batchDropArea.addEventListener(eventName, batchHighlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    batchDropArea.addEventListener(eventName, batchUnhighlight, false);
});

function batchHighlight() {
    batchDropArea.classList.add('active');
}

function batchUnhighlight() {
    batchDropArea.classList.remove('active');
}

batchDropArea.addEventListener('drop', batchHandleDrop, false);

function batchHandleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length) {
        batchFileInput.files = files;
    }
}

// 首次使用引导
const closeGuideBtn = document.getElementById('close-guide');
if (closeGuideBtn) {
    closeGuideBtn.addEventListener('click', function() {
        const guideModal = document.getElementById('guide-modal');
        guideModal.style.opacity = '0';
        setTimeout(() => {
            guideModal.style.display = 'none';
        }, 300);
        // 设置cookie表示已使用过
        document.cookie = 'first_use=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    });
}

// 处理Flash消息自动消失
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const flashMessage = document.querySelector('.flash-message');
        if (flashMessage) {
            flashMessage.style.opacity = '0';
            setTimeout(() => {
                flashMessage.remove();
            }, 300);
        }
    }, 3000);
});