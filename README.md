# CMIS311_5ASSIGNMENT

To add your new file to the root of your GitHub repository, follow these steps:

---

### **1. Navigate to Your Local Repository**
If you haven't already, open your terminal and `cd` into your repository folder:

```bash
cd /path/to/your/repo
```

---

### **2. Ensure You're on the Correct Branch**
Check your current branch:

```bash
git branch
```

If needed, switch to the `main` or `master` branch (or whatever branch you want to push to):

```bash
git checkout main
```

---

### **3. Add the New File**
If your file is named `myfile.txt`, add it to Git tracking:

```bash
git add myfile.txt
```

To add **all** new and modified files:

```bash
git add .
```

---

### **4. Commit the File**
Run:

```bash
git commit -m "Added my new file"
```

---

### **5. Push to GitHub**
Push your changes:

```bash
git push origin main
```

If you see **permission denied (publickey)** again, follow my previous steps to fix SSH authentication.

---

### **6. Verify on GitHub**
Go to your GitHub repository and check if the file appears in the root directory.

Let me know if you run into any issues! 🚀