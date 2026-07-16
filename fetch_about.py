import subprocess
import os
import shutil

temp_dir = "/Users/yahyasateha/.gemini/antigravity-ide/scratch/al-falah-temp"

# Clean up temp dir if exists
if os.path.exists(temp_dir):
    shutil.rmtree(temp_dir)

try:
    print("Cloning remote repository...")
    result = subprocess.run(
        ["git", "clone", "https://github.com/Ericyo123/al-falah.git", temp_dir],
        capture_output=True, text=True
    )
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)
    if result.returncode == 0:
        print("Cloned successfully!")
    else:
        print("Clone failed.")
except Exception as e:
    print("Error:", e)
