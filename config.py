import os
import tempfile

class Config:
    # 密钥，用于会话管理等
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key'
    
    # 文件上传配置
    UPLOAD_FOLDER = os.path.join(tempfile.gettempdir(), 'pdf2word_uploads')
    RESULT_FOLDER = os.path.join(tempfile.gettempdir(), 'pdf2word_results')
    HISTORY_FOLDER = os.path.join(tempfile.gettempdir(), 'pdf2word_history')
    
    # 文件大小限制 (100MB)
    MAX_CONTENT_LENGTH = 100 * 1024 * 1024
    
    # 历史记录最大数量
    MAX_HISTORY_ENTRIES = 20
    
    # 批量转换最大文件数量
    MAX_BATCH_FILES = 10
    
    # 临时链接有效期 (秒)
    TEMP_LINK_EXPIRE_SECONDS = 3600
    
    # OCR配置
    TESSERACT_PATH = r'C:\Program Files\Tesseract-OCR\tesseract.exe'  # Windows默认路径
    
    # 确保所有目录存在
    @staticmethod
    def init_app(app):
        os.makedirs(Config.UPLOAD_FOLDER, exist_ok=True)
        os.makedirs(Config.RESULT_FOLDER, exist_ok=True)
        os.makedirs(Config.HISTORY_FOLDER, exist_ok=True)

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False

# 配置映射，便于根据环境选择
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}