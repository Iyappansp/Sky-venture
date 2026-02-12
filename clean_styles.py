
import os
import re

files = [
    r'c:\Users\IYAPPAN\OneDrive\Desktop\magten\project-3\static-website\dashboard\bookings.html',
    r'c:\Users\IYAPPAN\OneDrive\Desktop\magten\project-3\static-website\dashboard\messages.html',
    r'c:\Users\IYAPPAN\OneDrive\Desktop\magten\project-3\static-website\dashboard\packages.html',
    r'c:\Users\IYAPPAN\OneDrive\Desktop\magten\project-3\static-website\dashboard\settings.html',
    r'c:\Users\IYAPPAN\OneDrive\Desktop\magten\project-3\static-website\dashboard\users.html',
    r'c:\Users\IYAPPAN\OneDrive\Desktop\magten\project-3\static-website\dashboard\videos.html'
]

pattern = re.compile(r'<style>[\s\S]*?</style>')

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub('', content, count=1)
        
        if content != new_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(file_path)}")
        else:
            print(f"No match in {os.path.basename(file_path)}")
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
