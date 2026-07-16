import subprocess

cwd = "/Users/yahyasateha/Downloads/recruitment-agency"

def run_cmd(args):
    print(f"Running: {' '.join(args)}")
    result = subprocess.run(args, cwd=cwd, capture_output=True, text=True)
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)

try:
    run_cmd(["git", "remote", "remove", "old-origin"])
except Exception:
    pass

try:
    run_cmd(["git", "remote", "add", "old-origin", "https://github.com/Ericyo123/al-falah.git"])
    run_cmd(["git", "fetch", "old-origin"])
    run_cmd(["git", "diff", "old-origin/main", "--", "src/app/page.tsx"])
except Exception as e:
    print("Error:", e)
